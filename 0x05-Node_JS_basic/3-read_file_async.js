const fs = require('fs/promises');

/**
 * Reads the database file asynchronously and counts the number of students.
 * @param {string} dataPath - The path to the CSV data file.
 * @returns {Promise<void>} A Promise that resolves when the operation is complete.
 */
const countStudents = async (dataPath) => {
  try {
    // Attempt to read the database file asynchronously
    const data = await fs.readFile(dataPath, 'utf-8');
    const lines = data.trim().split('\n');

    if (lines.length <= 1) {
      throw new Error('Database is empty');
    }

    const studentGroups = {};
    const dbFieldNames = lines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

    for (const line of lines.slice(1)) {
      const studentRecord = line.split(',');
      const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
      const field = studentRecord[studentRecord.length - 1];

      if (!Object.keys(studentGroups).includes(field)) {
        studentGroups[field] = [];
      }

      const studentEntries = studentPropNames
        .map((propName, idx) => [propName, studentPropValues[idx]]);

      studentGroups[field].push(Object.fromEntries(studentEntries));
    }

    const totalStudents = Object
      .values(studentGroups)
      .reduce((pre, cur) => (pre || []).length + cur.length);

    console.log(`Number of students: ${totalStudents}`);

    for (const [field, group] of Object.entries(studentGroups)) {
      const studentNames = group.map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
