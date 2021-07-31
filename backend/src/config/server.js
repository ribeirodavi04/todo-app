const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const allowCors = require('./cors');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(allowCors);

app.listen('3000', function(){
    console.log('server is running');

});
module.exports = app;