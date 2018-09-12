var viewportHeight = $(window).height();  
var viewportWidth = $(window).width();
document.getElementById('container-land-page-calculator').setAttribute("style",`height:${viewportHeight}px`);

// ------------------------------MAP BOX------------------------------------------------------------------
// mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaW9uYXJvY2EiLCJhIjoiY2prYTFlMHhuMjVlaTNrbWV6M3QycHlxMiJ9.MZnaxVqaxmF5fMrxlgTvlw';

// mapboxgl.accessToken = 'pk.eyJ1IjoiYWxiZXJ0ZmFycmUiLCJhIjoiY2prYTFldmkwMXUzcDNrcDJiNnY4dHQ1MyJ9.FjBZAgLX8rRpeJwXQrJ9Ig';

// Ara creem el Mapa. Tenim una nova variable, i cridem al metode constructor. Hem de passar una serie de
// parametres: style, center: on el volem centrem, i quin zoom volem 

  


// Anem a agafar la posicio de la persona

console.log('estem en aquest punt');




function startMap22() {
  const ironhackBCN = {
  	lat: 41.3977381,
    lng: 2.190471916};
    
    var map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
      center: [ironhackBCN.lng, ironhackBCN.lat], // starting position [lng, lat]
      zoom: 15 // starting zoom
    }) 

    // map.addControl(new MapboxGeocoder({
    //   accessToken: mapboxgl.accessToken,
    //   localGeocoder: forwardGeocoder,
    //   zoom: 14,
    //   placeholder: "Enter search e.g. Lincoln Park"
    // }));
  
  // return map;
    
  };

  // startMap();

// var map = startMap(); // per poder utilizar la variable map fora de la funció startMap(), haig de retornar la variable

// var mapid = document.getElementById('map');
// formGetCoords.addEventListener('load', startMap());

// --------------------- Aquesta funciona be per agafar la posicio actual-----------------------
// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition((showLocation, errorHandler, options) => {
//     if (showLocation) {
//       console.log('ha tornat informacio');
//       console.log('la latitud es:',showLocation.coords.latitude);
//       console.log('la longitud es:',showLocation.coords.longitude);
//       console.log(`More or less ${showLocation.coords.accuracy} meters.`);
//       // 'afegim un marcador'
//       const point = [showLocation.coords.longitude, showLocation.coords.latitude];
//       var marker = new mapboxgl.Marker()
//       .setLngLat(point)
//       .addTo(map);

//     } else {
//       console.log('no ha retornat res');
//     }
//   })
// }

// ----------------------- Fet amb Promises------------------------

// Falta provar que funcioni, pero sembla que a la gent li funciona

// var getPosition = function (options) {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject, options);
//   });
// }

// getPosition()
//   .then((position) => {
//     console.log(position);
//   })
//   .catch((err) => {
//     console.error(err.message);
//   });









// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition((position) => {
//     var map = new mapboxgl.Map({
//       container: 'map', // container id
//       style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
//       center: [position.coords.longitude, position.coords.latitude], // starting position [lng, lat]
//       zoom: 15 // starting zoom
//     }) 
//     var marker = new mapboxgl.Marker()
//     .setLngLat([position.coords.longitude, position.coords.latitude])
//     .addTo(map);


//     },(error) => {
//       console.error('error no puedo obtener localización', error);
//    })
// } else {
//   console.log('tu navegador no tiene permisos de geolocalización');
// }

// var formGetCoords = document.getElementById('formGetCoords');
// formGetCoords.addEventListener('submit', getCloseBuildings());

function getCloseBuildings(element) {
  console.log('estem a dins de GETCLOSEBUILDINGS abans de cridar AXIOS');
  let address = document.getElementById("address").value;
  let number = document.getElementById("number").value;
  let zipcode = document.getElementById("zipcode").value;
  let stateBuilding = document.getElementById("estadoInmueble").value;
  // let address = $('#address').val();
  console.log('el valor de adreça es:');
  // let numActivity = element.getAttribute('numActivity');
  // let attributeJSON = element.getAttribute('dataprofile');
  // let dataTransaction = JSON.parse(attributeJSON);
  let dataAddress = {
    address: address,
    number: number,
    zipcode: zipcode,
    stateBuilding: stateBuilding
  };
  console.log('el valor de dataAddress es:',dataAddress);
  axios.post('http://localhost:3000/api/getBuildingLocation', dataAddress)
  
  .then((response) => {
    // $("#getResult2").empty(); //we empty the activities <div>
    // $("#panel-result-apply-transaction").empty();
    // $("#panel-result-apply-transaction").append("<p class='text-success border border-success apply-transaction'>THE NEW TRANSACTION HAS BEEN CREATED SUCCESFULLY!!</p>");
    // $("#panel-result-apply-transaction").append('<button class="btn btn-success" onclick="clearResults(this)">Accept</button>');  
    $(window).scrollTop(0); //move the scroll at the top
  })
  .catch( (error) => {
    console.log('tenim un error al retornar de AXIOS');
    // $("#getResult2").empty(); //we empty the activities <div>
    // $("#panel-result-apply-transaction").empty();
    // $("#panel-result-apply-transaction").append("<p class='text-danger border border-danger apply-transaction'>THERE HAS BEEN A PROBLEM. NEW TRANSACTION HAS NOT BEEN CREATED. TRY AGAIN, PLEASE</p>");
    // $("#panel-result-apply-transaction").append('<button class="btn btn-danger" onclick="clearResults(this)">Accept</button>');  
  });
}