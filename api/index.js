const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 8080;
// connecting to the db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => console.log(`Server is listening on ${port}...`));
  })
  .catch((err) => console.log(err));
// routes
app.use("/", (req, res) => {
  return res.status(200).send("Everything is working just perfect");
});
