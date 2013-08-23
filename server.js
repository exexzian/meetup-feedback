var express = require("express");
var http = require('http');
var app = express();
app.use(express.static(__dirname + '/public', { }));
app.use(express.bodyParser());


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


app.get("/participants",function(request,response) {
  //Show all the friends 
  response.end("I am sending details of all particiapants");
});

app.get("/participant/:id",function(request,response) {
  //Show friend by id 
  response.end("I am sending details of particiapant with id "+ request.params.id);
});

app.post("/participant",function(request,response) {
  //Create new Friend
  response.end("I am creating new participant");
});

app.post("/participant/:id",function(request,response) {
  //Update a friend details
  response.end("I am updating details of particiapant with id "+ id);
});


var setHeaders = function (response) {
  var statusCode = 200;
  var headers = defaultCorsHeaders;
  
  headers['Content-Type'] = "application/json";
  response.writeHead(statusCode, headers);
};

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10,
  "Access-Control-Allow-Headers": "X-Requested-With" // Seconds.
};
