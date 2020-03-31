const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
const app = express();
require('rootpath')();
const errorHandler = require('./middleware/errorhandler');
fs = require('fs-extra')

var dir = path.join(__dirname, 'public');
app.use(express.static(dir));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// api routes
app.use('/users', require('./controllers/user.controller'));

//global error handler
app.use(errorHandler);

let port = 5656;

if(process.env.PORT)
  port = process.env.PORT;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
