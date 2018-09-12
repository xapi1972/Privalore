const mongoose = require('mongoose');

// const dbName = 'timeBank';
// mongoose.connect(`mongodb://localhost/${dbName}`)
const dbName2 = 'realstate';
mongoose.connect(`mongodb://administrator:privalore2018@ds145562.mlab.com:45562/${dbName2}`)
  .then(() => {
    console.log('😀');
  })
  .catch(() => {
    console.log('😔');
    mongoose.connection.close();
  })

  module.exports = mongoose;