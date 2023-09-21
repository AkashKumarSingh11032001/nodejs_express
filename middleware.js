// Application-level middleware
// Third party middleware
// Router-level middleware
// Built—in middleware
// Error—hand ling middleware

const express = require("express");
const app = express();
const port = 5001;

// Application-level middleware
const loggerMiddleware = (req, res, next) => {
  console.log(`${new Date()} ----- Request [${req.method}] [${req.url}]`);
  next();
};
app.use(loggerMiddleware);

// Router-level middleware
const router = express.Router();

app.use("/api/users", router);

const fakeAuth = (req,res,next)=>{
    // const authStatus = false;
    const authStatus = true;
    if(authStatus){
        console.log("User Authenthicated");
        next();
    }else{
        res.status(401);
        throw new Error("User not Authorized");
    }
}
const getUser = (req, res) => {
  res.json({ message: "Get All users" });
};
const createUser = (req, res) => {
  res.json({ message: "User created" });
};

router.use(fakeAuth);
router.route("/").get(getUser).post(createUser);



app.listen(port, () => {
  console.log(`Listening at Port: ${port}`);
});
