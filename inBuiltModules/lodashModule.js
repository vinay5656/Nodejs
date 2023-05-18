// Before require a node i should install it
// Using npm install package name
const ld = require('lodash');

const items = [1,2,[3,4,[5,6,[7]]]];
const newItems = ld.flattenDeep(items);
console.log(newItems);
console.log("Vinay singh chouhan");
console.log("now you using nodemon to see change automatic on save");