// promise: reject and resolve
// its ASYNC in nature.

// const promise = new Promise((resolve, reject) => {
//   console.log("ASYNC task execution");
//   if (false) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// promise.then(
//   // if true
//   () => {
//     console.log("Passed!");
//   },
//   //   if false
//   () => {
//     console.log("Failed!");
//   }
// );

// // parsing data in promise
// const myPromise = new Promise((resolve, reject) => {
//     console.log("ASYNC task execution");
//     if (true) {
//         const person = {name:"Akash"}
//       resolve(person);
//     } else {
//       reject();
//     }
//   });
  
//   myPromise.then(
//     // if true
//     (person) => {
//       console.log("Passed!");
//       console.log(person);
//     },
//     //   if false
//     () => {
//       console.log("Failed!");
//     }
//   );

//  nested chaining call
const p = Promise.resolve("Task done!")
p.then((val)=>{
    console.log(val);
    return "task done 2"
}).then((val)=>{
    console.log(val)
    return "task done 3"
}).then((val)=>{
    console.log(val)
    return "task done 4"

}).then((val)=>{
    console.log(val)
    return "task done 5"

}).catch((val)=>console.log(val))