// Source: http://expressjs.com/starter/hello-world.html

// Include express library
var express = require('express');

// We make a new express intance
var app = express();

app.get('/', function (request, response) {
  response.send('Hello World from TU Varna!');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

    console.log('Example TU Varna app listening at http://%s:%s', host, port);
});
