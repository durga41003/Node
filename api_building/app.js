const express =require("express");
const bodyParser = require("body-parser");
const app=express();
const port=5000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const users=[{name:"Tom", email:"tom123@gmail.com"}]

app.get("/", (req, res) => {
  res.send("Express App");
});

app.get('/users',(req,res)=>{
    res.json({ok:true,users});
});

app.get("/user/:name", (req, res) => {
    const {name}=req.params;
    const user=user.filter((user)=> user.name===name)[0];
    res.json({ok:true,user});
});

app.post('/adduser',(req,res)=>{
    const {name,email}=req.body;
    if(name&&email){
        users.push({name,email});
        res.json({ok:true,users});
    }
});

app.listen(5000,()=>{
    console.log("Server running at the port 5000");
});