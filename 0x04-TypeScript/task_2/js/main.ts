/**
 * Interface for Director, defining methods for working from home,
 * getting a coffee break, and working on director tasks.
 */
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

/**
 * Interface for Teacher, defining methods for working from home,
 * getting a coffee break, and working on teacher tasks.
 */
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

/**
 * Class representing a Director, implementing the DirectorInterface.
 */
class Director implements DirectorInterface {
  /**
   * Method for working from home.
   * @returns A string indicating working from home.
   */
  workFromHome(): string {
    return 'Working from home';
  }

  /**
   * Method for getting a coffee break.
   * @returns A string indicating getting a coffee break.
   */
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  /**
   * Method for working on director tasks.
   * @returns A string indicating working on director tasks.
   */
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

/**
 * Class representing a Teacher, implementing the TeacherInterface.
 */
class Teacher implements TeacherInterface {
  /**
   * Method for working from home.
   * @returns A string indicating cannot work from home.
   */
  workFromHome(): string {
    return 'Cannot work from home';
  }

  /**
   * Method for getting a coffee break.
   * @returns A string indicating cannot have a break.
   */
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  /**
   * Method for working on teacher tasks.
   * @returns A string indicating getting to work.
   */
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

/**
 * Function to create either a Director or a Teacher instance based on salary.
 * @param salary - The salary, either a number or a string.
 * @returns A Director or a Teacher instance.
 */
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Example usage
console.log(createEmployee(200)); // Output: Teacher
console.log(createEmployee(1000)); // Output: Director
console.log(createEmployee('$500')); // Output: Director

