const { addBlogController } = require("../controllers/blog.controller.js");
const router = require("express").Router();
router.get("/add-blog", addBlogController);
module.exports = router;
