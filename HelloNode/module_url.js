/**
 * New node file
 */
var url = require('url');

var obj = url.parse('http://stackoverflow.com/questions/18326707/how-to-debug-node-js-programs-in-eclipse-using-node-eclipse');

console.log('url to Object : ', obj);
console.log("===========================================================")
console.log('Object to url : ', url.format(obj));