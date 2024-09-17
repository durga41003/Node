const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// POST route to handle incoming data
app.post("/api/data", (req, res) => {
  const requestData = req.body;
  // Process the received data 
  console.log("Received data:", requestData);
  // below picture is given of console data on server
  
  res.status(200).send("Data received successfully!\n");

});
 
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
