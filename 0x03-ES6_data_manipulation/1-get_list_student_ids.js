export default function getListStudentsIds(studentList) {
  // Step 1: Check if the argument is an array
  if (!Array.isArray(studentList)) {
    // Step 2: If its not an array, return an empty array
    return [];
  }

  // Step 3: If its an array, use map to extract IDs
  const studentIds = studentList.map((student) => student.id);

  // Return the array of student IDs
  return studentIds;
}
