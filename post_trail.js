const express = require("express");
const app = express();
const port = 3000;
app.use(express.json()); //used to parse the incoming request object as a JSON object.
app.post("/", (req, res) => {
  const {name} = req.body;
  res.send(`Welcome ${name}`);
});

app.listen(port, (error) => {
  if (!error) console.log("Successfully running" + port);
  else console.log("Error");
});
