const {readFile , writeFile} = require('fs');


console.log('Start first task');
readFile('C:/Users/chauh/Desktop/Nodejs/inBuiltModules/content/first.txt','utf8',(err, data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
    console.log('completed first task');
})
console.log('Starting next task');