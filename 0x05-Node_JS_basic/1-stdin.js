/**
 * Displays a welcome message and prompts the user for their name.
 * Accepts user input from stdin and prints the user's name.
 * Displays a closing message when the program ends.
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
