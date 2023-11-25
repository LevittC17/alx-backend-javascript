const express = require('express');

const { readFile } = require('fs');

const app = express();
const port = 1245;

/**
 * Counts the number of students and generates a list for each field.
 * @param {string} fileName - The path to the CSV file.
 * @returns {Promise<string>} A promise that resolves with the output string.
 */
function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;

  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let output = '';
        const lines = data.toString().split('\n');

        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const fieldsArray = lines[i].toString().split(',');

            if (Object.prototype.hasOwnProperty.call(students, fieldsArray[3])) {
              students[fieldsArray[3]].push(fieldsArray[0]);
            } else {
              students[fieldsArray[3]] = [fieldsArray[0]];
            }

            if (Object.prototype.hasOwnProperty.call(fields, fieldsArray[3])) {
              fields[fieldsArray[3]] += 1;
            } else {
              fields[fieldsArray[3]] = 1;
            }
          }
        }

        const l = length - 1;
        output += `Number of students: ${l}\n`;

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

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  countStudents(process.argv[2].toString()).then((output) => {
    response.send(['This is the list of our students', output].join('\n'));
  }).catch(() => {
    response.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
