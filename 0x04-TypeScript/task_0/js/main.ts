// task_0/js/main.ts

// Define the interface for a student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "Los Angeles"
};

// Create an array named studentsList containing the two students
const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JavaScript
const table = document.createElement("table");

// Append a header row
const headerRow = table.insertRow();
const headerCell1 = headerRow.insertCell(0);
headerCell1.textContent = "First Name";
const headerCell2 = headerRow.insertCell(1);
headerCell2.textContent = "Location";

// Append a row for each student in the array
studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  cell1.textContent = student.firstName;
  const cell2 = row.insertCell(1);
  cell2.textContent = student.location;
});

// Append the table to the body of the document
document.body.appendChild(table);
