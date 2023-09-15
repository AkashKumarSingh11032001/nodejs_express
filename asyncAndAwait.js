const prompt = require("prompt-sync")({ sigint: true });

// using Promise
const userLogin = () => {
  console.log("Enter Username and Password");
  let username = prompt("Enter username: ");
  let password = prompt("Enter password: ");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Performing UserAuthenthication!");
      if (username == "Akash" && password == "akash") {
        resolve("User Authenthicated!");
      } else {
        reject("Authenthication Failed!");
      }
    }, 1000);
  });
};

function goToHomePage(userAuth) {
  return Promise.resolve(`Go to Homepage as: ${userAuth}`);
}

// userLogin()
//   .then((response) => {
//     console.log("Validating user!");
//     return goToHomePage(response);
//   })
//   .then((val) => console.log(val))
//   .catch((err)=>console.log(err));

// using Async n Await
async function login() {
  try {
    const respnse = await userLogin();
    console.log("Validating User!");
    const userAuthStatus = await goToHomePage(respnse);
    console.log(userAuthStatus);
  } catch (err) {
    console.log("Something went wrong!");
  }
}

login();
