//  take user input from cmd line
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question(`what is your name? : `, (name) => {
//   console.log(`Hi ${name}`);
//   rl.close();
// });

// external pacakge -- prompt-sync
const prompt = require("prompt-sync")();

const name = prompt("what is your name?: ");
console.log(`Hi ${name}`)

