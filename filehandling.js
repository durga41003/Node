const express =require('express');
const multer= require('multer');
const app=express();
const upload=multer({dest:'upload/'});
app.post('/upload',upload.single('file'),(req,res)=>{
    const file=req.file;
    if(!file){
        return res.status(400).send('No File uploaded');
    }
    res.send('File uploaded');
    console.log('File uploaded successfully');
});
app.listen(5000,()=>{
    console.log("Server running");
});