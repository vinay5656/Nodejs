// Making Http request using events

const http = require('http');

const server = http.createServer();

server.on('request',(req,res)=>{
    console.log("Hello Guys");
    res.write("I am gonna make it.");
    res.end('There is no Good luck. Just hard work');
})

server.listen(5000,()=>{
    console.log('Server is running on port 5000');
})