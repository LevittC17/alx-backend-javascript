const http = require('http');

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the respose body
  res.end('Hello Holberton School!\n');
});

// Listen on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});

// Export the app variable
module.exports = app;
