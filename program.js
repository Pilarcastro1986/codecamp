
const fs = require('fs');
const filename = process.argv[2];
const txt = fs.readFileSync(filename);

const content = toSting().txt;
console.log(content.split('\n').length - 1);


// var r = 0;
// for(var i = 2; i < process.argv.length ; i++){
//     r = r + Number(process.argv[i]);
// }    
// console.log(r);