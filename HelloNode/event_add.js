/**
 * New node file
 */
var eventHandler = function(){
	console.log('EXIT');
}

process.on('exit', eventHandler);