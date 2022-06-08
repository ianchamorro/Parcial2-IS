const { average } = require('./index');

console.log(`First entry: 6`);
console.log(`... The average is ${average([6])}\n`);
console.log(`Second entry: 23, 5, 26, 12`);
console.log(`... The average is ${average([23, 5, 26, 12])}\n`);
console.log(`Third entry:`);
console.log(`... The average is ${average([])}`);