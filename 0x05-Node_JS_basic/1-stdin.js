process.stdout.write("Welcome to Holberton School, what is your name?\n");

// Listen for user input on stdin
process.stdin.on('readable', () => {
  const name = process.stdin.read();

  if (name) {
    // Display the user's name
    console.log(`Your name is: ${name}`);
  }
});

// Listen for the end of the program
process.stdin.on('end', () => {
  // Display closing message
  console.log("This important software is now closing");
});
