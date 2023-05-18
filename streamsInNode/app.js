const {createReadStream} = require('fs');

const path = "C:/Users/chauh/Desktop/Nodejs/streamsInNode/bigText.txt";
const stream = createReadStream(path,'utf8');

stream.on('data', (err,result)=>{
    if(err){
        console.log(err);
    }
    console.log(result);
})