const os = require('os');
var tmemory = os.totalmem();
var fmem = os.freemem();

console.log('total ='+tmemory);
console.log(`free = ${fmem}`);