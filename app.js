import express from "express";
import firestoreRoute from "./routes/firestore.js";

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/firestore", firestoreRoute);

app.listen(3000, () => {
  console.log("server running on port 3000");
});
