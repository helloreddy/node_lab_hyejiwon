var http = require('http');

http.get("http://localhost:1337", function(res) {
	console.log("Got response: " + res.statusCode);
}).on('error', function(e) {
	console.log("Got error: " + e.message);
});
//
//http.get("http://www.google.com/index.html", function(res) {
//	console.log("Got response: " + res.statusCode);
//}).on('error', function(e) {
//	console.log("Got error: " + e.message);
//});