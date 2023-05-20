const express = require('express');
const app = express();


// req => middleware => res


// Put the logger function into separately for more moduler code then require it
// I didn't done this is a goood practice
const logger = (req,res,next) =>{
    const method = req.method;
    const url = req.url;
    const year = new Date().getFullYear();
    console.log(method,url,year);
    next();
}

// How to use logger with all the routes
app.use(logger);
app.get('/', (req,res) => {
    res.send("Home Page");
})

app.get('/about',(req,res)=>{
    res.send("About Page");
})


// How to apply middleware to some specific route

app.use('/api',logger);
app.get('/api/info',(req,res) => {
    res.send("Hi, My name is vinay");
})

// How to apply multiple middleware
const autherize = (req,res,next) =>{
    console.log("Permission Granted");
    next();
}

app.use('/api/address',[logger,autherize]);
app.get('/api/address',(req,res)=>{
    res.send("Alwar, Rajasthan");
})
// app.get('/', logger, (req,res) => {
//     res.send("Home Page");
// })

// app.get('/about',logger,(req,res)=>{
//     res.send("About Page");
// })

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})