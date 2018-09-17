require("dotenv").config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('./database');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const apiRouter = require('./routes/api');

const app = express();

// const cors = require('cors');


const XFRAME_WHITELIST = [ 'https://www.idealista.com', 'https://www.fotocasa.com' ];



// mongodb://administrator:privalore2018@ds145562.mlab.com:45562/realstate
// sudo mongoimport --uri "mongodb://administrator:privalore2018@ds145562.mlab.com:45562/realstate" --collection users --type csv --headerline --columnsHaveTypes --fields "nombre_portal_web.string(),ref_inmueble.string()" --file importdata.csv

//sudo mongoimport --uri "mongodb://administrator:privalore2018@ds145562.mlab.com:45562/realstate" --collection users --type csv --headerline --file immoblesdepuratsUTF8_1 registre_menys_camps.csv

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// app.use(cors({  
//   origin: ["http://localhost:3000"],
//   methods: ["GET", "POST"],
//   allowedHeaders: ["Content-Type", "Authorization"]
// }));

// Allow CORS to access public folder, from any origin. Si utilitzem el setHeader, no estem utilitzant el CORS
// app.use(function(req, res, next) {
// //   if (XFRAME_WHITELIST.indexOf(req.query.domain) !== -1) {
// //     res.header('X-FRAME-OPTIONS', 'ALLOW-FROM ' + req.query.domain);
// // }
//   res.setHeader('X-Frame-Options', 'allow-from https://example.com/');
//   res.setHeader('Access-Control-Allow-Origin', 'https://example.com');
//   res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//   next();
// });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/updateGeoJSON', indexRouter); // we use this route to create the 'location' property into MongoDB
app.use('/users', usersRouter);
app.use('/api', apiRouter);

module.exports = app;
