// var viewportHeight = $(window).height();  
// var viewportWidth = $(window).width();
// document.getElementById('container-land-page-calculator').setAttribute("style",`height:${viewportHeight}px`);

// ------------------------------MAP BOX------------------------------------------------------------------
// mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaW9uYXJvY2EiLCJhIjoiY2prYTFlMHhuMjVlaTNrbWV6M3QycHlxMiJ9.MZnaxVqaxmF5fMrxlgTvlw';
require("dotenv").config();

mapboxgl.accessToken = process.env.MAPBOX_TOKEN;


function startMap() {
  const ironhackBCN = {
  	lat: 41.3977381,
    lng: 2.190471916};
    
    var map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
      center: [ironhackBCN.lng, ironhackBCN.lat], // starting position [lng, lat]
      zoom: 15 // starting zoom

    })
  return map;  //Devolvemos el objeto 'map' para que lo podamos usar en otras posiciones  
  }    


function getCoords() {
  console.log('estem a dins abans de cridar AXIOS');
  let address = document.getElementById("address").value;
  let number = document.getElementById("number").value;
  let zipcode = document.getElementById("zipcode").value;
  let surface = document.getElementById("surface").value;
  let city = document.getElementById("city").value;
  let stateBuilding = document.getElementById("estadoInmueble").value;
  // let address = $('#address').val();
  console.log('el valor de adreça es:',address+' '+number);
  // let numActivity = element.getAttribute('numActivity');
  // let attributeJSON = element.getAttribute('dataprofile');
  // let dataTransaction = JSON.parse(attributeJSON);
  let dataAddress = {
    address: address,
    number: number,
    zipcode: zipcode,
    city: city
    // stateBuilding: stateBuilding
  };
  console.log('el valor de dataAddress es:',dataAddress);
  axios.post('process.env.PRODUCT_URL/api/getBuildingLocation', dataAddress)
  
  .then((response) => {
    // $("#getResult2").empty(); //we empty the activities <div>
    // $("#panel-result-apply-transaction").empty();
    // $("#panel-result-apply-transaction").append("<p class='text-success border border-success apply-transaction'>THE NEW TRANSACTION HAS BEEN CREATED SUCCESFULLY!!</p>");
    // $("#panel-result-apply-transaction").append('<button class="btn btn-success" onclick="clearResults(this)">Accept</button>');  
    $(window).scrollTop(0); //move the scroll at the top

    //----------------remove the previous PopUp Container from previous search-------------
    // if(divContainer) {
    //   $(divContainer).empty()
    // } else {
    //   let divContainer = document.createElement('div');
    //   divContainer.id = 'containerPopups';
    // }

    let divContainer = document.createElement('div');
      divContainer.setAttribute('id','containerPopups');

    console.log('extem al punt 2');
    const buildingCoords = response.data.buildingPosition;
    console.log('les coordenades del edifici son:',buildingCoords);
    map.flyTo({center: buildingCoords}); // centrem el mapa a l'adreça que ens han donat
    // afegim la posició de l'adreça buscada
    // new mapboxgl.Marker({color: 'red'})
    // new mapboxgl.Marker(Fancy3rdPartyMarkerFactory({ icon: 'default', color: 'red' }))
    var marker = new mapboxgl.Marker({color: 'red'})
      // .color('red')
      .setLngLat(buildingCoords)
      .addTo(map);

    for (let i=0;i<response.data.nearBuildings.length; i++) {
      const buildingCoords = [response.data.nearBuildings[i].longitude,response.data.nearBuildings[i].latitude];
      const stateBuilding = response.data.nearBuildings[i].desc_estado;
      const price = response.data.nearBuildings[i].precio_inmueble;
      const surface = response.data.nearBuildings[i].superficie;
      const squarePrice = (price/surface).toFixed(0);
      const rooms = response.data.nearBuildings[i].habitaciones;
      const idBuilding = response.data.nearBuildings[i].ref_inmueble;

      // create the popup
      let popup = new mapboxgl.Popup({ offset: 5, className: 'popup'})
      .setHTML(`<h5><b>Estado: </b>${stateBuilding}</h5><p><b>Precio:</b> ${price} &euro;<br><b>Superficie:</b> ${surface} m<sup>2</sup><br><b>Nº Habitaciones:</b> ${rooms}<br><b>Precio m<sup>2</sup>: </b>${squarePrice} &euro;/m<sup>2</sup></p>`)

      // .setHTML(`<h5><b>Estado: </b>${stateBuilding}</h5><p><b>Precio:</b> ${price} &euro;</p><p><b>Superficie:</b> ${surface} m<sup>2</sup></p><p><b>Nº Habitaciones:</b> ${rooms}</p><p><b>Precio m<sup>2</sup>: </b>${squarePrice} &euro;/m<sup>2</sup></p>`)
      // .setText('Aixo es per afegir text simple');
      
      // create DOM element for the marker
      
      let divElement = document.createElement('div');
      if (typeof(idBuilding)=='string') {  // hem de mirar que sigui un string, i sino el convertim
        divElement.id = idBuilding; 
      } else {
        divElement.id = idBuilding.toString();
      }

      divContainer.appendChild(divElement);
      
      
      switch (stateBuilding.toLowerCase()) {
        case 'indefinido':
        var marker = new mapboxgl.Marker({color: 'yellow'})
        .setLngLat(buildingCoords)
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);
        break;

        case 'bien':
        var marker = new mapboxgl.Marker({color: 'blue'})
        .setLngLat(buildingCoords)
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);
        break;

        case 'muy bien':
        var marker = new mapboxgl.Marker({color: 'green'})
        .setLngLat(buildingCoords)
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);
        break;

        case 'casi nuevo':
        var marker = new mapboxgl.Marker({color: 'green'})
        .setLngLat(buildingCoords)
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);
        break;

        case 'a reformar':
        var marker = new mapboxgl.Marker({color: 'violet'})
        .setLngLat(buildingCoords)
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);
        break;

        case 'reformado':
        var marker = new mapboxgl.Marker({color: 'cyan'})
        .setLngLat(buildingCoords)
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);
        break;

        case 'obra nueva':
        var marker = new mapboxgl.Marker({color: 'grey'})
        .setLngLat(buildingCoords)
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);
        break;
      }
      

    } 


  })
  .catch( (error) => {
    console.log('tenim un error al retornar de AXIOS');
    // $("#getResult2").empty(); //we empty the activities <div>
    // $("#panel-result-apply-transaction").empty();
    // $("#panel-result-apply-transaction").append("<p class='text-danger border border-danger apply-transaction'>THERE HAS BEEN A PROBLEM. NEW TRANSACTION HAS NOT BEEN CREATED. TRY AGAIN, PLEASE</p>");
    // $("#panel-result-apply-transaction").append('<button class="btn btn-danger" onclick="clearResults(this)">Accept</button>');  
  });
}

//-------------si ponemos estas lineas de código, al cargar la página ejecuta la consulta----------------
// var formGetCoords = document.getElementById('formGetCoords');
// formGetCoords.addEventListener('submit', getCoords());

//---------- PROGRAMA PRINCIPAL: VAMOS A REALIZAR ALGUNAS ACCIONES-------------------------------------

//  1)------------CARGAMOS EL MAPA INICIAL, ASIGNAMOS A UNA VARIABLE 'map' PARA USARLO DENTRO DE LA FUNCION getCoords()------------------------------

var map = startMap(); // per poder utilizar la variable map fora de la funció startMap(), haig de retornar la variable

// Center the map on the coordinates of any clicked symbol from the 'symbols' layer.
map.on('click', 'symbols', function (e) {
  map.flyTo({center: e.features[0].geometry.coordinates});
});

// Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
map.on('mouseenter', 'symbols', function () {
  map.getCanvas().style.cursor = 'pointer';
});

// Change it back to a pointer when it leaves.
map.on('mouseleave', 'symbols', function () {
  map.getCanvas().style.cursor = '';
});


// 2)---------------------CLEAR INPUT FIELDS-----------------------------------------------------

function clearResults() {
  document.getElementById("address").value = '';
  document.getElementById("number").value = '';
  document.getElementById("zipcode").value = '';
  document.getElementById("surface").value = '';
}