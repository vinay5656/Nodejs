const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Welcome to home Page");
    res.end();
});

server.listen(3000,function () {
    console.log("Server is running on localhost3000");
});

