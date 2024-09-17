const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const port = 8000;

// Set up Multer to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/"); // Uploads will be stored in the 'upload' directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename to avoid overwriting
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.send("Hello from server");
});

// Define the file upload endpoint
app.post("/api/files/upload", upload.single("file"), (req, res) => {
  // Access the uploaded file information from req.file
  const fileName = req.file.filename;
  // Send the response
  res.status(200).json({ message: `File uploaded successfully: ${fileName}` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
