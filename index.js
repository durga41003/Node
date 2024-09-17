const express = require("express");
// Importing all the routes
const homeroute = require("./routes/Home.js");
const loginroute = require("./routes/login");

// Creating express server
const app = express();

// Handling routes requestcd
app.use("/", homeroute);
app.use("/", loginroute);
app.listen(5000, () => {
  console.log("Server is Running");
});
