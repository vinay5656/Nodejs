
const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("This is home page");
});

app.get('/about',(req,res)=>{
    res.status(200).send("I am getting good at it.");
})

app.all('*',(req,res)=>{
    res.status(404).send("Page is Not Found");
})
app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})