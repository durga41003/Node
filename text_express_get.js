const express = require("express");
const app = express();
let port = 8080;

app.listen(port, () =>{
    console.log(`server is running on port ${port}`);
});

app.get("/user/:id" , (req, res) => {
    const userId = req.params.id;
    res.send(`Fetching user with ID: ${userId}`);
});
