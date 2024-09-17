const express= require("express");
const bodyParser= require("body-parser");
const app=express();
const port=5000;
app.use(bodyParser.json());

app.get("/hello", (req,res) =>{
    res.send("Hello, Postman!");
});

app.post("/calculate",(req,res) =>{
    const { num1,num2 } =req.body;
    if(num1==undefined || num2 ==undefined){
        return res.send(400).json({
            error:"Both the numbers are required"
        });
    }
    const result=num1+num2;
    res.json({result});
});

app.listen(port,()=> {
  console.log(`Running on  http://localhost:${port}`);
});