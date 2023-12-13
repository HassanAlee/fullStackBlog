const {
  registerUser,
  loginUser,
  updateProfile,
  getAllAuthors,
} = require("../controllers/user.controller.js");
const { verifyToken } = require("../utils/verifyToken.js");
const router = require("express").Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.patch("/update-profile", verifyToken, updateProfile);
router.get("/all-authors", getAllAuthors);
router.get("/verifyToken", verifyToken);
module.exports = router;
