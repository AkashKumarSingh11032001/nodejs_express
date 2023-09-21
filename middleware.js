// Application-level middleware
// Third party middleware
// Router-level middleware
// Built—in middleware
// Error—hand ling midd leware

const express = require("express");
const app = express();
const port = 5001;

const loggerMiddleware = (req, res, next) => {
  console.log(`${new Date()} ----- Request [${req.method}] [${req.url}]`);
  next();
};
app.use(loggerMiddleware);

app.listen(port, () => {
  console.log(`Listening at Port: ${port}`);
});
