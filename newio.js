var fs = require('fs');
// import * as fs from 'fs';
var buff = fs.readFileSync(process.argv[2]);

console.log(buff.toString().split('\n').length - 1);