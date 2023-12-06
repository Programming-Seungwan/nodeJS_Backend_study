const fs = require('fs');
const result = fs.readFileSync('./hello.txt').toString();

// console.log(result);

fs.readFile('./hello.txt', { encoding: 'utf-8' }, (err, data) => {
  console.log(data);
});
