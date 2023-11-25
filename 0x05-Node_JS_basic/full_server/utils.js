const { readFile } = require('fs');

/**
 * Reads the student database file asynchronously and returns a promise.
 *
 * @param {string} filePath - The path to the student database file.
 * @returns {Promise<Object>} - A promise that resolves to an object containing
 * arrays of first names per field.
 */
module.exports = function readDatabase(filePath) {
  // Create an object to store students grouped by fields
  const students = {};

  return new Promise((resolve, reject) => {
    // Read the content of the file
    readFile(filePath, (err, data) => {
      if (err) {
        // Reject the promise if there's an error reading the file
        reject(err);
      } else {
        // Convert the file content to an array of lines
        const lines = data.toString().split('\n');
        // Exclude the header line
        const noHeader = lines.slice(1);

        // Process each line of the file
        for (let i = 0; i < noHeader.length; i += 1) {
          if (noHeader[i]) {
            // Split the line into fields
            const field = noHeader[i].toString().split(',');

            // Check if the field exists in the students object
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              // If it exists, push the current student's first name to the array
              students[field[3]].push(field[0]);
            } else {
              // If it doesn't exist, create a new array with the current student's first name
              students[field[3]] = [field[0]];
            }
          }
        }

        // Resolve the promise with the object containing students grouped by fields
        resolve(students);
      }
    });
  });
};
