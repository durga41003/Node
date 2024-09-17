const http = require("http");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");

http.createServer(function (req, res) {
    if(req.url == "/fileupload" && req.method.toLowerCase() === "post") {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        if(err) {
          res.writeHead(400, { "content-type": "text/plain" });
          res.write("Error");
          res.end();
          return;
        }
        console.log(files);

        var uploadedFile = files.filetoupload[0];
        var tempFilePath = uploadedFile.filepath;
        var originalFilename = uploadedFile.originalFilename;

        // Target file path
        var projectFilePath = path.join(__dirname,"upload",originalFilename);
        // Ensure the upload directory exists
        if (!fs.existsSync(path.join(__dirname, "upload"))) {
          fs.mkdirSync(path.join(__dirname, "upload"));
        }

        // Rename and move the file
        fs.rename(tempFilePath, projectFilePath, function (err) {
          if (err) {
            res.writeHead(500, { "content-type": "text/plain" });
            res.write("Error saving the file.");
            res.end();
            return;
          }
          res.writeHead(200, { "content-type": "text/html" });
          res.write("File uploaded");
          res.end();
        });
      });
    } else {
      // Serve the file upload form
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write("</form>");
      res.end();
    }
  })
  .listen(5000, () => {
    console.log("Server is listening");
  });
