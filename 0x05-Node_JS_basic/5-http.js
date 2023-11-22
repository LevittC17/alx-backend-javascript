const http = require('http');
const fs = require('fs');

const port = 1245;

// Read the content of 3-read_file_async.js for /sudents endpoint
const readFileSync = (path) => {
  try {
    return fs.readFileSync(path, 'utf-8');
  } catch (error) {
    console.log(`Error reading file: ${error.message}`);
    return 'Cannot load the file';
  }
};

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the response headers
  res.setHeader('Content-Type', 'text/plain');

  // Check the request URL and respond accordingly
  if (req.url === '/') {
    res.writeHead(200);
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    res.writeHead(200);
    const studentsData = readFileSync(process.argv[2]);
    res.end(`This is the list of our students\n${studentsData}`);
  } else {
    res.writeHead(404);
    res.end('Not Found\n');
  }
});

// Listen on port 1245
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});

// Export the app variable
module.exports = app;
