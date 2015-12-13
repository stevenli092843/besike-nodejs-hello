#!/usr/bin/env node
var parseArgs = require('minimist')(process.argv.slice(2));
var greet = require('../index.js');
console.log(parseArgs);

var boolValue = parseArgs['drunk'];
var name = parseArgs['_'];
console.log(boolValue);
console.log(greet(name, boolValue));
