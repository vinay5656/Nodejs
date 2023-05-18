let name = require("./names");
// let showName = require('./function');

// showName.showFullName(name.firstName, name.lastName);

let showFullName = require("./function");

showFullName(name.firstName,name.lastName);

// exporting or importing module as a object with some properties

const data = require("./basket");

console.log(data.fruit);

console.log(data.singlePerson.fname + " "+ data.singlePerson.lName);

data.fruit.map((f)=>console.log(f));

// When you import a module you are excuting it
require("./addition");