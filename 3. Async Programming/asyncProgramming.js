// SYNC : code get blocked until we get the response from server
// ASYNC: code will not wait for respnse, it will continue with next line of code.

// // SYNC EXP:
// console.log("Opration Started");

// function sleepX(ms) {
//   let startTime = new Date().getTime();
//   console.log("Opration is running");
//   while (new Date().getTime() < startTime + ms) {
//     console.log("in Progress");
//   }
//   console.log("Opration done!");
// }

// sleepX(1000);
// console.log("do something else");
// // ouput: Opration Started -> Opration is running -> in Progress -> Opration done! -> do something else

// ASYN EXP:
console.log("Opration Started");

function sleepX(ms) {
  console.log("Opration is running");
  setTimeout(() => {
    console.log("Opration done!");
  },ms);
}

sleepX(1000);
console.log("do something else");
// ouput: Opration Started -> Opration is running -> do something else -> Opration done!
