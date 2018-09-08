var geo = require('mapbox-geocoding');
var express = require('express');
var router = express.Router();

geo.setAccessToken('pk.eyJ1IjoibWFyaW9uYXJvY2EiLCJhIjoiY2prYTFlMHhuMjVlaTNrbWV6M3QycHlxMiJ9.MZnaxVqaxmF5fMrxlgTvlw');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET calculator page. */
router.get('/calculator', function(req, res, next) {
  res.render('calculator', { title: 'Privalore Calculator' });
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
