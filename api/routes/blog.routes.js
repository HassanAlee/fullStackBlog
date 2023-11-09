const { addBlogController } = require("../controllers/blog.controller.js");
const { verifyToken } = require("../utils/verifyToken.js");
const router = require("express").Router();
router.post("/add-blog", verifyToken, addBlogController);
module.exports = router;
