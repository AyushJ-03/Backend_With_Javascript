console.log('1. Start of script');

Promise.resolve().then(() => console.log('2. Microtask'));

setTimeout(() => console.log('3. Timer 1'), 0);

const fs = require('fs');
fs.readFile('user-details.txt', () => console.log('4. I/O Operation'));

setImmediate(() => console.log('5. Immediate 1'));

process.on('exit', (code) => {
  console.log('6. Exit event');
});

console.log('7. End of script');