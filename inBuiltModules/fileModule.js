const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('inBuiltModules/content/first.txt','utf8');
const second = readFileSync('inBuiltModules/content/second.txt','utf8');

console.log(first);
 console.log(second);

 writeFileSync('inBuiltModules/content/third.txt',` here is the result : ${first} ${second}`);