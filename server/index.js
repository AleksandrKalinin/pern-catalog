const express = require('express');
const router = require('./router');
const bodyparser = require('body-parser');


const app = express();

app.use(bodyparser.json());
app.use('/', router)


module.exports = app;