/**
 * New node file
 */
var eObj = require('eventObj.js');

eObj.obj.on('test', function(){
	console.log('test');
});

console.log(eObj.obj.sum(5,6));
eObj.obj.emit('test');