export default function getStudentIdsSum(studentList) {
  // Use the reduce function to calculate the sum of student IDs
  const sum = studentList.reduce((accumulator, student) => accumulator + student.id, 0);

  // Return the sum of student ids
  return sum;
}
