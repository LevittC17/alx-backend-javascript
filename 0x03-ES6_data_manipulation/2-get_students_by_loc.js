export default function getStudentsByLocation(studentList, city) {
  // Use the filter function to filter students by the specified city
  const filteredStudents = studentList.filter((student) => student.location === city);

  // Return the array of filtered students
  return filteredStudents;
}
