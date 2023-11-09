const Blog = require("../models/blog.model.js");
const { errorHandler } = require("../utils/error");
const addBlogController = async (req, res, next) => {
  try {
    let newBlog = new Blog(req.body);
    await newBlog.save();
    return res.status(200).json(newBlog);
  } catch (error) {
    next(error);
  }
};
module.exports = { addBlogController };
