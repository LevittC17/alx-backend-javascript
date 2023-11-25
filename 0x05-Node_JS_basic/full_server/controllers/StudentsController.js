import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const students = await readDatabase(process.argv[2].toString());
      const output = ['This is the list of our students'];

      Object.keys(students).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })).forEach((key) => {
        const count = students[key].length;
        const list = students[key].join(', ');
        output.push(`Number of students in ${key}: ${count}. List: ${list}`);
      });

      response.status(200).send(output.join('\n'));
    } catch (err) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase(process.argv[2].toString());
      const list = students[major].join(', ');
      response.status(200).send(`List: ${list}`);
    } catch (err) {
      response.status(500).send('Cannot load the database');
    }
  }
}
