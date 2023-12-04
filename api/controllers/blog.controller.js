const Blog = require("../models/blog.model.js");
// add a new blog
const addBlog = async (req, res, next) => {
  try {
    let newBlog = new Blog(req.body);
    await newBlog.save();
    return res.status(200).json(newBlog);
  } catch (error) {
    next(error);
  }
};
// get all blogs
const getAllBlogs = async (req, res, next) => {
  const { id } = req.body;
  let blogs;
  try {
    if (id) {
      blogs = await Blog.find({ authorRef: id });
      return res.status(200).json(blogs);
    }
    blogs = await Blog.find();
    return res.status(200).json(blogs);
  } catch (error) {
    next(error);
  }
};
module.exports = { addBlog, getAllBlogs };
