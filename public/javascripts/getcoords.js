function getCoords() {
  console.log('estem a dins abans de cridar AXIOS');
  let address = document.getElementById("address").value;
  let number = document.getElementById("number").value;
  let zipcode = document.getElementById("zipcode").value;
  let city = document.getElementById("city").value;
  // let stateBuilding = document.getElementById("estadoInmueble").value;
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

var formGetCoords = document.getElementById('formGetCoords');
formGetCoords.addEventListener('submit', getCoords());
