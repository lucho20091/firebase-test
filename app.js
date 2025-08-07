const express = require("express");
const app = express();
const testRoute = require("./routes/test");

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/test", testRoute);

app.listen(3000, () => {
  console.log("server running on port 3000");
});
