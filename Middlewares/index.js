// Filename - index.js
const express = require("express");
const app = express();

const port = process.env.port || 5000;
app.get("/", (req, res) => {
  res.set('Content-Type','text/html')
  res.send(`<div>
    <h2>Welcome to GeeksforGeeks</h2>
    <h5>Tutorial on Middleware</h5>
  </div>`);
});
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
