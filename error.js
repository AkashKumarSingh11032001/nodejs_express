// method 1- using try-catch

function doSomething() {
    console.log("I m doing something");
//   consol.log("I m doing something");
}

// try {
//   doSomething();
// } catch (err) {
//   console.log("Error occured");
//   console.log(err);
// }

// method 2- Uncaught Exception
// process.on("uncaughtException", (err) => {
//   console.log("There is an Uncaught Exception:", err);
//   process.exit(1);
// });

// doSomething();

// method 3- promise
const myPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve(doSomething());
  } else {
    reject(doSomething());
  }
});

myPromise
  .then((val) => {
    console.log(val); // function not returing anything thats why undefined!
  })
  .catch((err) => {
    console.log("Error Occcured", err);
  });
