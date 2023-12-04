const { addBlog, getAllBlogs } = require("../controllers/blog.controller.js");
const { verifyToken } = require("../utils/verifyToken.js");
const router = require("express").Router();
router.post("/add-blog", verifyToken, addBlog);
router.get("/get-blogs", getAllBlogs);
module.exports = router;
