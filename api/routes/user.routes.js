const { registerUser } = require("../controllers/user.controller.js");
const router = require("express").Router();
router.post("/register", registerUser);
module.exports = router;
