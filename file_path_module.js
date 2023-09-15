// PATH MODULE

const path = require("path");

const filePath =
  "C:\\Users\\Akash\\OneDrive - Advantest\\Desktop\\code\\nodejs_express\\file_test\\sample.txt";

// // dir name
// console.log(path.dirname(filePath))
// // file name
// console.log(path.basename(filePath))
// // extension name
// console.log(path.extname(filePath))

// // join method
// const tryFilename = "newFile.txt"
// console.log(path.join(path.dirname(filePath), tryFilename))

// FILE SYSTEM MODULE
const fs = require("fs");
// console.log(fs)

// reading file -- Async way
// fs.readFile(filePath, "utf-8", (err, data) => {
//   if (err) throw new Error("Something went wrong");
//   console.log(data);
// });

// reading file -- sync way
// try {
//   const data = fs.readFileSync(
//     path.join(__dirname, "file_test", "sample.txt"),
//     "utf-8"
//   );
//   console.log(data);
// } catch (err) {
//   console.log(err);
// }

// reading file -- using PROMISE
// const myPromise = require("fs").promises;

// const promiseFunc = async () => {
//   try {
//     const data = await myPromise.readFile(filePath, "utf-8");
//     console.log("FS PROMISE: ", data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// promiseFunc();

// -------------- WRITING INTO FILE ------------

// writing file -- Async way
const txtFile = path.join(__dirname, "file_test", "text.txt");
const dataToWrite = "Hi Varsha!";
fs.writeFile(txtFile, dataToWrite, (err) => {
  if (err) throw new Error("Something went wrong");
  console.log("Write opration completed Successfully!");
});
