const fs=require('fs');
const readme=fs.readFileSync('postman.txt','utf-8');
fs.writeFileSync('writeMe.txt',readme);