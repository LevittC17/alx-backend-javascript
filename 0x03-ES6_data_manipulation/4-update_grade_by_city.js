export default function updateStudentGradeByCity(studentList, city, newGrades) {
  // Use filter to get students in the specified city
  const studentsInCity = studentList.filter((student) => student.location === city);

  // Use map to update grades for students in the specified city
  const updateStudents = studentsInCity.map((student) => {
    // Find the corresponding grade object in newGrades by student ID
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);

    // If a matching grade is found, set the student's grade to it, otherwise set it to 'N/A'
    const grade = matchingGrade ? matchingGrade.grade : 'N/A';

    // Create a new object with the update grade and the existing student properties
    return { ...student, grade };
  });

  return updateStudents;
}
