const http = require('http');
const { readFile } = require('fs');

// Server configuration
const hostname = '127.0.0.1';
const port = 1245;

/**
 * Counts the number of students and generates a list for each field.
 * @param {string} fileName - The path to the CSV file.
 * @returns {Promise<string>} A promise that resolves with the output string.
 */
function countStudents(fileName) {
  // Objects to store students and fields
  const students = {};
  const fields = {};
  let length = 0;

  return new Promise((resolve, reject) => {
    // Read file asynchronously
    readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let output = '';
        // Split data into lines
        const lines = data.toString().split('\n');

        // Iterate through each line
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');

            // Update students object
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }

            // Update fields object
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }

        const l = length - 1;
        output += `Number of students: ${l}\n`;

        // Generate output for each field
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }

        resolve(output);
      }
    });
  });
}

// Create HTTP server
const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  // Handle root path
  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  }

  // Handle /students path
  if (request.url === '/students') {
    response.write('This is the list of our students\n');
    countStudents(process.argv[2].toString())
      .then((output) => {
        const outString = output.slice(0, -1);
        response.end(outString);
      })
      .catch(() => {
        response.statusCode = 404;
        response.end('Cannot load the database');
      });
  }
});

// Listen on the specified port and hostname
app.listen(port, hostname, () => {});

module.exports = app;
