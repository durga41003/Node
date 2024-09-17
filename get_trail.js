const express=require('express');
const app=express();
const port=3000;

app.get('/hello',(req,res) =>{
   res.set('Content-Type','text/html');
   res.status(200).send("<h1>Welcome</h1>");
});

app.listen(port, (error) =>{
    if(!error)
        console.log("Successfully running"+port)
    else
        console.log("Error")
});