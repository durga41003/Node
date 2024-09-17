const express = require("express");
const app = express();
app.enable("trust proxy");
console.log(app.disabled("trust proxy")); // false

app.disable("trust proxy");

console.log(app.disabled("trust proxy")); // false
