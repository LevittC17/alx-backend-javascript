// Define the MajorCredits interface
interface MajorCredits {
  credits: number;
  __brand: 'MajorCredits'; // Brand property
}

// Define the MinorCredits interface
interface MinorCredits {
  credits: number;
  __brand: 'MinorCredits'; // Brand property
}

// Create a function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

// Create a function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}

// Example usage
const majorSubject1: MajorCredits = { credits: 3 } as MajorCredits;
const majorSubject2: MajorCredits = { credits: 4 } as MajorCredits;

const minorSubject1: MinorCredits = { credits: 1 } as MinorCredits;
const minorSubject2: MinorCredits = { credits: 2 } as MinorCredits;

const resultMajor = sumMajorCredits(majorSubject1, majorSubject2);
const resultMinor = sumMinorCredits(minorSubject1, minorSubject2);

console.log(resultMajor); // { credits: 7, __brand: 'MajorCredits' }
console.log(resultMinor); // { credits: 3, __brand: 'MinorCredits' }

