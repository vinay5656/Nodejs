const http = require('http');
const fs = require('fs');
// sending whole data at once
http.createServer((req,res)=>{
    const text = fs.readFileSync("C:/Users/chauh/Desktop/Nodejs/streamsInNode/bigText.txt",'utf8');
    res.end(text);
}).listen(5000,()=>{
    console.log("Server is running");
})