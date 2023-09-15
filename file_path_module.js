const path = require("path")

const filePath = "C:\\Users\\Akash\\OneDrive - Advantest\\Desktop\\code\\nodejs_express\\file_test\\sample.txt"

// dir name
console.log(path.dirname(filePath)) 
// file name
console.log(path.basename(filePath))
// extension name
console.log(path.extname(filePath))