// task_1/js/main.ts

interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any; // Allow any additional attribute
}

interface Directors extends Teachers {
  numberOfReports: number;
}

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

// Example usage
const director1: Directors = {
  firstName: 'John',
  fullTimeEmployee: true,
  lastName: 'Doe',
  location: 'London',
  numberOfReports: 17,
};

console.log(teacher3);

console.log(director1);

// Function to print teacher information
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  return `${firstLetter}. ${formattedLastName}`;
};

// Example usage
const printedTeacher = printTeacher("John", "Doe");
console.log(printedTeacher);

// Interface for the StudentClass constructor
interface Student {
  firstName: string;
  lastName: string;
}

// Interface for the StudentClass class
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of the StudentClass class
class StudentClass implements Student, StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const studentInstance = new StudentClass('John', 'Doe');
console.log(studentInstance.workOnHomework());
console.log(studentInstance.displayName());
