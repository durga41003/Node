const express = require('express');
const app = express();
const PORT = 5000;
app.listen(PORT, (error) => {
  if (!error) console.log("Successfully running");
  else console.log("Error");
});

