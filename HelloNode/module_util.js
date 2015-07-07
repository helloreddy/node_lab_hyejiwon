/**
 * New node file
 */
var util = require('util');

// %s = String , %d = number , %j = JSON
var data = util.format('%s, %d, %j', 'foo', 10, {name:'node.js'});

util.log(data);