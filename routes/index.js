
const geo = require('mapbox-geocoding');
const express = require('express');
const router = express.Router();
// const Buildings = require('./models/buildings');
const Middleware = require('../middlewares');
require("dotenv").config();


geo.setAccessToken(process.env.MAPBOX_TOKEN);

// geo.setAccessToken('pk.eyJ1IjoibWFyaW9uYXJvY2EiLCJhIjoiY2prYTFlMHhuMjVlaTNrbWV6M3QycHlxMiJ9.MZnaxVqaxmF5fMrxlgTvlw');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET calculator page. */
router.get('/calculator', function(req, res, next) {
  res.render('calculator', { title: 'Privalore Calculator' });
});

/* GET calculator page. */
router.get('/virtualtour', function(req, res, next) {
  // res.setHeader('X-Frame-Options', 'allow-from https://www.privalore.es');
  // res.setHeader('Access-Control-Allow-Origin', 'https://example.com');
  // res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With');
  res.render('../public/3Drenders/virtualtour2', {layout: false});
});

/* GET calculate the GeoJSON information of each document in MongoDB. */
router.get('/updateGeoJSON', Middleware.createLocationProperty.getCoordsRefInmueble , Middleware.createLocationProperty.updateManyGeoJSONProperty,  (req, res, next) => {
  console.log('hem fet tots els MIDDLEWARES per actualitzar la informacio de GeoJSON');
});


/* GET calculator page. */
router.post('/calculator', function(req, res, next) {
//   const {address, number, zipcode, city, estadoInmueble} = req.body;
  
//   geo.geocode('mapbox.places', 'Dam Square, Amsterdam', (err, geoData) => {
//     if (geoData) {
//       let latitude = geoData.features[0].geometry.coordinates[0];
//       let longitude = geoData.features[0].geometry.coordinates[1];
//       console.log(geoData.features[0].geometry.coordinates[0]);
//     } else {
//       console.log('hi ha hagut un error:',err);
//     }
    
// });
//   console.log('hem entrat a dins del post');
//   console.log(address,number,zipcode, city,estadoInmueble);
//   console.log(req.body);

  res.redirect('/calculator');
});



module.exports = router;
