/**
 * Displays a welcome message and prompts the user for their name
 * Accepts user input from stdin and prints the user's name
 * Displays a closing message when the program ends.
 */
process.stdout.write("Welcome to Holberton School, what is your name?\n");

// Listen for user input on stdin
process.stdin.on('data', (data) => {
  /**
   * @param {string} data - User input from stdin
   */
  const name = data.toString().trim();
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

// Set encoding to handle user input as strings
process.stdin.setEncoding('utf-8');
