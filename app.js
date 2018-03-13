var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/test');

var app = module.exports = express();
var NODE_ENV = 'development';

app.set('env', process.env.NODE_ENV || 'production');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes = require('./routes/index')
app.use('/api', routes);

var port = process.env.PORT || 2000;

app.listen(port);
console.log('Insert getat on port ' + port);
