// promise: reject and resolve

const promise = new Promise((resolve, reject) => {
  console.log("ASYNC task execution");
  if (false) {
    resolve();
  } else {
    reject();
  }
});

promise.then(
  // if true
  () => {
    console.log("Passed!");
  },
  //   if false
  () => {
    console.log("Failed!");
  }
);

// parsing data in promise
const myPromise = new Promise((resolve, reject) => {
    console.log("ASYNC task execution");
    if (true) {
        const person = {name:"Akash"}
      resolve(person);
    } else {
      reject();
    }
  });
  
  myPromise.then(
    // if true
    (person) => {
      console.log("Passed!");
      console.log(person);
    },
    //   if false
    () => {
      console.log("Failed!");
    }
  );
