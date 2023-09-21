const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.json({ message: "This is Home Page" });
});
app.get("/user", (req, res) => {
  res.json({ message: "Get All Users" });
});
app.get("/user/:id", (req, res) => {
  res.json({ message: `I am User With Id: ${req.params.id} ` });
});

app.listen(port, () => {
  console.log(`App listining at port: ${port}`);
});
