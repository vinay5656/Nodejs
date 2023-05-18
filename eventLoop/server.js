const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Request event");
    res.end("Hello World");
})

server.listen(5000,(req,res) => {
    console.log("Server is running on port 5000");
})
