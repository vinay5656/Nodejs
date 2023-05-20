const express = require('express');
const app = express();

app.use(express.static('C:/Users/chauh/Desktop/Nodejs/express/navbar-app'));

app.get('/',(req,res)=>{
    res.sendFile("C:/Users/chauh/Desktop/Nodejs/express/navbar-app/index.html",{'content-type': 'txt.html'});
})

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
  })

app.listen(5000,()=>{
    console.log("Server is running");
});