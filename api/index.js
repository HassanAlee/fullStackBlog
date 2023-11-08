const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 8080;
app.use("/", (req, res) => {
  return res.status(200).send("Everything is working just perfect");
});
app.listen(port, () => console.log("Server is listening"));
