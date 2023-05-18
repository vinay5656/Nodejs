const {createReadStream} = require('fs');
const http = require('http');
// Sendig Data into chunks
const server = http.createServer((req,res)=>{
    const  stream = createReadStream("C:/Users/chauh/Desktop/Nodejs/streamsInNode/bigText.txt",{highWaterMark:6000, encoding:'utf8'});
    stream.on('open',()=>{
        stream.pipe(res);
    })
    stream.on('error',()=>{
        res.end(error);
    })
})

server.listen(5000);
