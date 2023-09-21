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

// //  nested chaining call
// const p = Promise.resolve("Task done!");
// p.then((val) => {
//   console.log(val);
//   return "task done 2";
// })
//   .then((val) => {
//     console.log(val);
//     return "task done 3";
//   })
//   .then((val) => {
//     console.log(val);
//     return "task done 4";
//   })
//   .then((val) => {
//     console.log(val);
//     return "task done 5";
//   })
//   .catch((val) => console.log(val));

// Promise All and Promise race
// Promise ALl:  will help use to give multi api result in list
// Primise race: will give the first api call that executed first

const makeApiCalls = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This APi Executed in: " + time);
    }, time);
  });
};

let multiApiCall = [makeApiCalls(1000), makeApiCalls(2000), makeApiCalls(500)];

Promise.all(multiApiCall).then((val) => console.log(val));
Promise.race(multiApiCall).then((val) => console.log("First Api that executed is: "+val));
