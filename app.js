const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('./database');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const apiRouter = require('./routes/api');

const app = express();

// mongodb://administrator:privalore2018@ds145562.mlab.com:45562/realstate
// sudo mongoimport --uri "mongodb://administrator:privalore2018@ds145562.mlab.com:45562/realstate" --collection users --type csv --headerline --columnsHaveTypes --fields "nombre_portal_web.string(),ref_inmueble.string()" --file importdata.csv

//sudo mongoimport --uri "mongodb://administrator:privalore2018@ds145562.mlab.com:45562/realstate" --collection users --type csv --headerline --file immoblesdepuratsUTF8_1 registre_menys_camps.csv

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/calculator', indexRouter);
app.use('/updateGeoJSON', indexRouter); // we use this route to create the 'location' property into MongoDB
app.use('/users', usersRouter);
app.use('/api', apiRouter);

module.exports = app;
