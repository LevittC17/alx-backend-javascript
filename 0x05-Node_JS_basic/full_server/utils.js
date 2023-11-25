import { readFile } from 'fs';

/**
 * Reads the database asynchronously and returns a promise.
 * @param {string} filePath - The path to the CSV file.
 * @returns {Promise<object>} A promise that resolves with an object of
 * arrays of student first names per fields.
 */
export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
