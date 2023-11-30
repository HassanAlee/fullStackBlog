const { addBlog } = require("../controllers/blog.controller.js");
const { verifyToken } = require("../utils/verifyToken.js");
const router = require("express").Router();
router.post("/add-blog", verifyToken, addBlog);
module.exports = router;
