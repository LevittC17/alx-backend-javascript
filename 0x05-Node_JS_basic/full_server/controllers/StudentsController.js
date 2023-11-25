const readDatabase = require('../utils');

/**
 * Controller class for handling student-related operations.
 */
class StudentsController {
  /**
   * Handles the request to get a list of all students grouped by fields.
   *
   * @param {Object} request - The Express request object.
   * @param {Object} response - The Express response object.
   */
  static getAllStudents(request, response) {
    // Read the student database and process the data
    readDatabase(process.argv[2].toString()).then((students) => {
      const output = [];

      // Construct the output array with information about each field
      output.push('This is the list of our students');
      const keys = Object.keys(students);
      keys.sort();
      for (let i = 0; i < keys.length; i += 1) {
        output.push(`Number of students in ${keys[i]}: ${students[keys[i]].length}. List: ${students[keys[i]].join(', ')}`);
      }

      // Send the constructed output as the response
      response.status(200).send(output.join('\n'));
    }).catch(() => {
      // Handle errors when reading the database
      response.status(500).send('Cannot load the database');
    });
  }

  /**
   * Handles the request to get a list of students in a specific major (field).
   *
   * @param {Object} request - The Express request object.
   * @param {Object} response - The Express response object.
   */
  static getAllStudentsByMajor(request, response) {
    // Extract the major parameter from the request
    const field = request.params.major;

    // Read the student database and process the data
    readDatabase(process.argv[2].toString()).then((students) => {
      // Check if the specified major is valid
      if (!(field in students)) {
        response.status(500).send('Major parameter must be CS or SWE');
      } else {
        // Send the list of students in the specified major as the response
        response.status(200).send(`List: ${students[field].join(', ')}`);
      }
    }).catch(() => {
      // Handle errors when reading the database
      response.status(500).send('Cannot load the database');
    });
  }
}

// Export the StudentsController class for use in other modules
module.exports = StudentsController;
