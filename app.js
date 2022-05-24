"use strict";

const express = require('express');
const app = express();

const route_home = require('./src/routes/home');

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/', route_home);


module.exports = app;