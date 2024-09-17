const fs=require('fs');
fs.readFile('postman.txt','utf-8',function(err,data){
    if(!err)
        fs.writeFile('Writeasync.txt',data,(err)=>{
           if (err)
            throw err;
        });
    else
      throw err;
});