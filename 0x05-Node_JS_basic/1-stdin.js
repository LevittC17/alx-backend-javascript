/**
 * Displays a welcome message and prompts the user for their name.
 * Accepts user input from stdin and prints the user's name.
 * Displays a closing message when the program ends.
 */
process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on('readable', () => {
  const name = process.stdin.read();

  if (name) {
    console.log(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  console.log("This important software is now closing");
});
