var geo = require('mapbox-geocoding');
var express = require('express');
var router = express.Router();
const Middleware = require('../middlewares');
require("dotenv").config();

// geo.setAccessToken('pk.eyJ1IjoibWFyaW9uYXJvY2EiLCJhIjoiY2prYTFlMHhuMjVlaTNrbWV6M3QycHlxMiJ9.MZnaxVqaxmF5fMrxlgTvlw');
geo.setAccessToken(process.env.MAPBOX_TOKEN);
/* GET calculator page. */
router.post('/getBuildingLocation', Middleware.getLocation.forwardGeocoding, Middleware.getLocation.getNearestBuildings,(req, res, next) => {
  // const {address, number, zipcode, city, estadoInmueble} = req.body;
    // retornem a AXIOS el llistat
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

  // res.redirect('/calculator');
})



module.exports = router;