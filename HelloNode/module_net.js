/**
 * New node file
 */
var net = require('net');

var server = net.createServer(function(c){ // 'connection' listener
	console.log('Server connected...');
	
	c.on('end', function(){
		console.log('Server disconnected...');
	});
	
	c.write('hello\r\nThis is My Telnet Service \r\n');
	c.pipe(c);
	
});

server.listen(8124, function(){ // 'listening' listener
	console.log('Server bound');
});