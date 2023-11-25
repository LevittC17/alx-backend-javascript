// full_server/utils.js

import { readFile } from 'fs';

/**
 * Reads the database asynchronously and returns a promise.
 * @param {string} filePath - The path to the CSV file.
 * @returns {Promise<object>} A promise that resolves with an object of arrays of student first names per fields.
 */
export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const students = {};
        const lines = data.toString().split('\n');

        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            const fieldsArray = lines[i].toString().split(',');

            if (Object.prototype.hasOwnProperty.call(students, fieldsArray[3])) {
              students[fieldsArray[3]].push(fieldsArray[0]);
            } else {
              students[fieldsArray[3]] = [fieldsArray[0]];
            }
          }
        }

        resolve(students);
      }
    });
  });
}
