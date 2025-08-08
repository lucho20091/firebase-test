import express from "express";
import firestoreRoute from "./routes/firestore.js";
const app = express();

app.use("/firestore", firestoreRoute);

app.get("/", (req, res) => {
  res.redirect("/firestore");
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
