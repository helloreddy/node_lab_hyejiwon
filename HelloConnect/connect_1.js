/**
 * New node file
 */
var connect = require('connect'), http = require('http');
var app = connect();

app.use(function(request, response, next){
	console.log('In comes a ' + request.method + " to " + request.url);
	next();
});

app.use(function(request, response){
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.end('Hello World\n');
});

http.createServer(app).listen(1337);

console.log('Server running at http://127.0.0.1:1337/');