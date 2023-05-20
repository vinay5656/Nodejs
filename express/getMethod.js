const express = require("express");
const app = express();

const Person = require("./PersonDetailsJsonFile");


app.get('/',(req,res)=>{
    const fullName = Person.firstName + " "+  Person.lastName;
    res.status(202).send(fullName);
    res.end("Data is retrived");
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})