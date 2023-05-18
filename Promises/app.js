// const  file = require('fs');
const {readFile, writeFile} = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

//  how do we set this code without wrapping function from (line 8 to 19) --> require util module -> method name callled promisify(readFile)
// const getText = (path) =>{
//     return new Promise((resolve, reject) => {
//         file.readFile(path, 'utf8', (error, data)=>{
//             if(error){
//                 reject(error);
//             }else{
//                 resolve(data);
//             }
//         })
//     })
// }

const path1 = "C:/Users/chauh/Desktop/Nodejs/inBuiltModules/content/first.txt";
const path2 = "C:/Users/chauh/Desktop/Nodejs/inBuiltModules/content/second.txt";


const start = async() => {
    try{
       // const first = await getText(path1);
       // const second = await getText(path2);

       const first = await readFilePromise(path1, 'utf8');
       const second = await readFilePromise(path2, 'utf8');
       await writeFilePromise('C:/Users/chauh/Desktop/Nodejs/inBuiltModules/content/fourth.txt', `This is awesome : ${first} ${second}`)
       console.log(first);
       console.log(second);
    }catch(error){
       console.log("Something is wrong");
    }
    
}

start();
