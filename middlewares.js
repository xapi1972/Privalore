var MapboxClient = require('mapbox');
var mapbox = require('mapbox');
var geo = require('mapbox-geocoding');
// var mapbox = require('./mapbox-geocode.js');
var mapBoxClient = new MapboxClient('pk.eyJ1IjoibWFyaW9uYXJvY2EiLCJhIjoiY2prYTFlMHhuMjVlaTNrbWV6M3QycHlxMiJ9.MZnaxVqaxmF5fMrxlgTvlw');
geo.setAccessToken('pk.eyJ1IjoibWFyaW9uYXJvY2EiLCJhIjoiY2prYTFlMHhuMjVlaTNrbWV6M3QycHlxMiJ9.MZnaxVqaxmF5fMrxlgTvlw');

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
          console.log('les coordenades de la ubicacio del client son:', coordsBuilding);
          next();
        } else {
          console.log('hi ha hagut un error:',err);
        }
        
    });
     },
     nearByBuildings: (req, res, next) => {
       next();
      
    }
  }




}