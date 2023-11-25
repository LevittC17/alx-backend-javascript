const express = require('express');
const { readFile } = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const fileName = process.argv[2];

  readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
      res.status(404).send('Cannot load the database');
    } else {
      const lines = data.trim().split('\n');

      const nonEmptyLines = lines.filter(line => line.trim() !== '');

      res.write('This is the list of our students\n');
      res.write(`Number of students: ${nonEmptyLines.length}\n`);

      const fields = {};
      nonEmptyLines.forEach((line) => {
        const [, , , field] = line.split(',');
        if (field in fields) {
          fields[field] += 1;
        } else {
          fields[field] = 1;
        }
      });

      Object.entries(fields).forEach(([field, count]) => {
        const studentsList = nonEmptyLines
          .filter(line => line.endsWith(`,${field}`))
          .map(line => line.split(',')[0])
          .join(', ');

        res.write(`Number of students in ${field}: ${count}. List: ${studentsList}`);
      });
    }
  });
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
