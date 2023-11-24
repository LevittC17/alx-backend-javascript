const http = require('http');
const fs = require('fs');

/**
 * Parses CSV data into an array of student objects.
 * @param {string} data - CSV data to be parsed.
 * @returns {Array} An array of student objects.
 */
function parseCSV(data) {
  return data
    .split('\n')
    .map((line) => line.split(','))
    .filter((student) => student.length === 4 && student[0] !== '' && !Number.isNaN(Number(student[2])))
    .map((student) => ({ firstname: student[0], lastname: student[1], age: parseInt(student[2], 10), field: student[3] }));
}

/**
 * Counts the number of students and generates a list for a specific field.
 * @param {Array} students - Array of student objects.
 * @param {string} field - The field to filter students.
 * @returns {Object} An object with count and list properties.
 */
function countStudents(students, field) {
  const filteredStudents = students.filter((student) => student.field === field);
  return {
    count: filteredStudents.length,
    list: filteredStudents.map((student) => student.firstname).join(', '),
  };
}

/**
 * Loads students from a CSV file.
 * @param {string} path - The path to the CSV file.
 * @returns {Array} An array of student objects.
 */
function loadStudentsFromFile(path) {
  const data = fs.readFileSync(path, 'utf-8');
  return parseCSV(data);
}

const hostname = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;

  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }

  if (url === '/students') {
    try {
      const students = loadStudentsFromFile(process.argv[2]);
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${students.length}\n`);

      const csStudents = countStudents(students, 'CS');
      const sweStudents = countStudents(students, 'SWE');

      res.write(`Number of students in CS: ${csStudents.count}. ` +
                `List: ${csStudents.list}\n`);
      res.write(`Number of students in SWE: ${sweStudents.count}. ` +
                `List: ${sweStudents.list}\n`);

      res.end();
    } catch (err) {
      res.end(err.message);
    }
  }
});

app.listen(port, hostname);

module.exports = app;
