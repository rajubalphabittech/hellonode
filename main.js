// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello www.releaseworksacademy.commm\n");
});

// listen on localhost:8000
server.listen(9000);
console.log("Server now listening at http://127.0.0.1:9000/");
