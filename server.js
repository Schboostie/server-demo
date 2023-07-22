// Import required modules
const express = require("express");

// Create an instance of Express
const app = express();

// Define a route that responds with "Hello"
app.get("/", (req, res) => {
  res.send("Hello");
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
