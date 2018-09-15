const mongoose = require('mongoose');
const Buildings = require('./models/buildings');
var MapboxClient = require('mapbox');
var mapbox = require('mapbox');
var geo = require('mapbox-geocoding');
// require("dotenv").config();
// var mapbox = require('./mapbox-geocode.js');
// var mapBoxClient = new MapboxClient('pk.eyJ1IjoibWFyaW9uYXJvY2EiLCJhIjoiY2prYTFlMHhuMjVlaTNrbWV6M3QycHlxMiJ9.MZnaxVqaxmF5fMrxlgTvlw');
// geo.setAccessToken('pk.eyJ1IjoibWFyaW9uYXJvY2EiLCJhIjoiY2prYTFlMHhuMjVlaTNrbWV6M3QycHlxMiJ9.MZnaxVqaxmF5fMrxlgTvlw');

var mapBoxClient = new MapboxClient(process.env.MAPBOX_TOKEN);
geo.setAccessToken(process.env.MAPBOX_TOKEN);

module.exports = {
  getLocation: {
    forwardGeocoding: (req, res, next) => {
      const {address, number, zipcode, city, estadoInmueble} = req.body;
      console.log('el req.body es:', req.body);
      console.log('el valor de address es:', address);
      const query = address + ' ' + number + ',' + zipcode + ' ' + city + ', Spain'; 
      // query.concat(address,' ',number,',',zipcode,' ',city,' Spain');
      console.log('el query del geocoding es:',query);
      geo.geocode('mapbox.places', query, (err, geoData) => {
        if (geoData) {
          console.log('hem entrat a dins de geoData per obtenir les coordenades');
          console.log('el valor de geodata es:', geoData);
          let longitude = geoData.features[0].geometry.coordinates[0];
          let latitude = geoData.features[0].geometry.coordinates[1];
          let coordsBuilding = {
            longitude: longitude,
            latitude: latitude
          };
          res.locals.coordinates = coordsBuilding;
          console.log('les coordenades de la ubicacio del client son:', coordsBuilding);
          next();
        } else {
          console.log('hi ha hagut un error:',err);
        }
        
    });
     },
     getNearestBuildings: (req, res, next) => {
      const latitude = res.locals.coordinates.latitude
            ,longitude = res.locals.coordinates.longitude;

      Buildings.find({ location:
        { $geoWithin:
           { $centerSphere: [ [ longitude, latitude ], 0.5 / 3963.2 ] } } })
          //  Buildings.find({ location:
          //   { $geoWithin:
          //      { $centerSphere: [ [ longitude, latitude ], 0.5 / 3963.2 ] } } }).select({ 'latitude': 1, 'longitude': 1, '_id': 1})     
           
           //{ $near: [ -74 , 40 ],  $maxDistance: 10 } La distancia es marca en metres
           // Buildings.find({ref_inmueble: refInmueble}).select({ 'latitude': 1, 'longitude': 1, '_id': 0})
      .then(response => {
        // console.log('la response de la consulta es',response);
        // res.locals.coordinates = {
        //     latitude: response[0].latitude,  // Retorna un array de resultats la Response
        //     longitude: response[0].longitude  
        //   };
        if (response.length>0) {
          const resultBuildings = {
            buildingPosition: [longitude,latitude],
            nearBuildings: response
          }
          res.json(resultBuildings);  // Retornem a AXIOS el resultat dels edificis a prop, i de la posició de l'edifici
        } else {
          res.status(500);
          res.json({ errorMessage: 'No hay resultado de edificios cerca de esta ubicacion' });
        }
        res.locals.nearBuildings = response;
        // console.log('el valor de ref inmueble es',res.locals.refInmueble);
        next();
      })
      .catch(error => {
        next(error);
      })
    }
  },
  // we create the property 'location' in the MongoDB for each building, in order to apply geolocation queries
  createLocationProperty: {
    getCoordsRefInmueble: (req, res, next) => {
      const refInmueble = 142735896;
      var id = new mongoose.Types.ObjectId('5b91012671a66ce4e936b33d');
      // Buildings.findById(id)
      Buildings.find({}).select({ 'latitude': 1, 'longitude': 1, '_id': 1})
      // Buildings.find({ref_inmueble: refInmueble}).select({ 'latitude': 1, 'longitude': 1, '_id': 0})
      .then(response => {
        console.log('la response de la consulta es',response);
        // res.locals.coordinates = {
        //     latitude: response[0].latitude,  // Retorna un array de resultats la Response
        //     longitude: response[0].longitude  
        //   };
        res.locals.refInmueble = refInmueble;
        res.locals.coordinates = response;
        // console.log('el valor de ref inmueble es',res.locals.refInmueble);
        next();
      })
      .catch(error => {
        next(error);
      })
    }, 
    updateGeoJSONProperty: (req, res, next) => {
      
      const refInmueble = res.locals.refInmueble;
      const latitude = res.locals.coordinates.latitude
            ,longitude = res.locals.coordinates.longitude;

      console.log('el valor de ref inmueble es',res.locals.refInmueble);
      console.log('el valor de latitude es',res.locals.coordinates);
      console.log('el valor de longitude es',res.locals.coordinates.longitude);
      // we create the GeoJSON property
      const location = {
        type: 'Point',
        coordinates: [longitude,latitude]
      };

      let conditions = { ref_inmueble: refInmueble }
            , update = { $set: {location: location}}
            , options = { multi: false };

        Buildings.update(conditions, update, options)
        .then(numAffected => {
          console.log('el numero de files update es:', numAffected);
          next();
        })
        .catch(error => {
          next(error);
        })

    },
    updateManyGeoJSONProperty: (req, res, next) => {
         
      // we create the GeoJSON property
      
      for (let i=0; i<res.locals.coordinates.length; i++ ) {
        const id = res.locals.coordinates[i]._id;
        const latitude = res.locals.coordinates[i].latitude
            ,longitude = res.locals.coordinates[i].longitude;
            
        const location = {
          type: 'Point',
          coordinates: [longitude,latitude]
        };
  
        let conditions = { _id: id }
              , update = { $set: {location: location}}
              , options = { multi: false };

          // Buildings.update(conditions, update, options)
          Buildings.findOneAndUpdate(conditions, update, options)
          .then(numAffected => {
            // console.log('el numero de files update es:', numAffected);
            
          })
          .catch(error => {
            next(error);
          })
        
      }
      console.log('hem acabat de fer el for-next');
      next();
    }    
  }
}