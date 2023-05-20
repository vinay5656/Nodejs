const express = require('express');
const app = express();

const person = require('./PersonDetailsJsonFile');

// Static Assets
app.use(express.static("express/postMethodProject"));
// Parse Form data
app.use(express.urlencoded({extended:false}));
// Parse json
app.use(express.json());

app.get('/',(req,res)=>{
    console.log('Request arrived');
})

//getting data from /api/person api
app.get("/api/person",(req,res)=>{
    res.status(202).json({success:true,data : person});
})

//post the data on /api/person api
app.post("/api/person",(req,res)=>{
    const p = req.body;

    if(!data){
        return res.status(400).json({success:false, data: p});
    }
    res.status(202).send({success:true, data:p});
})
app.post('/login',(req,res) => {
    const {name} = req.body;

    if(name){
        console.log(name);
        res.status(202).send(name);
    }else{
        res.status(401).send("Something is wrong");
    }

})
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})
