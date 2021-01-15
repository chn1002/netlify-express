'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const util = require('../src/utils');
const fs = require('fs');


//router.get('/', (req, res) => {
//  res.writeHead(200, { 'Content-Type': 'text/html' });
//  res.write('<h1>Hello from Express.js!</h1>');
//  res.end();
//});

const router = express.Router();

// Other settings
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(flash());

app.use('/.netlify/functions/server', router);  // path must route to lambda

// Routes
app.use('/', require('../routes/home'));


module.exports = app;
module.exports.handler = serverless(app);
