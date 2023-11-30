const Blog = require("../models/blog.model.js");
const addBlog = async (req, res, next) => {
  try {
    let newBlog = new Blog(req.body);
    await newBlog.save();
    return res.status(200).json(newBlog);
  } catch (error) {
    next(error);
  }
};
module.exports = { addBlog };
