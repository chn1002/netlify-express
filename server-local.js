'use strict';
const express = require('express');

const app = require('./express/server');
app.use(express.static('public'));

app.listen(3000, () => console.log('Local app listening on port 3000!'));
