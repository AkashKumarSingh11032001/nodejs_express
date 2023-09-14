// NORMSAL WAY -- using process.argv
// console.log(process.argv.slice(2)[0])
// use cmd : node argument.js name=Akash


// using external package -- using minimist
// use cmd: node argument.js --name=Akash
const minimist = require("minimist")

const argNew = minimist(process.argv.slice(2))
console.log(argNew.name)
