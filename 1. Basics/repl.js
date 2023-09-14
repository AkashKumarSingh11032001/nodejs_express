// Read Evaluate Print Loop

const repl = require("repl");

// START NODE CMD LINE
const local = repl.start('$');
// const local = repl.start('Node console started!');


// EXIT NODE CMD LINE
local.on('exit', () => {
    console.log("Exiting REPL")
});