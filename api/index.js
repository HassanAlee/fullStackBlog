const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user.routes.js");
const blogRoutes = require("./routes/blog.routes.js");
const port = process.env.PORT || 8080;
app.use(express.json());
// connecting to the db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => console.log(`Server is listening on ${port}...`));
  })
  .catch((err) => console.log(err));
// routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);
// error handler middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  message = err.message || "Internal Server Error";
  return res.status(statusCode).json({ success: false, message, statusCode });
});
