const bcryptjs = require("bcryptjs");
const User = require("../models/user.model.js");
const { errorHandler } = require("../utils/error.js");
const jwt = require("jsonwebtoken");
// register user controller
const registerUser = async (req, res, next) => {
  try {
    const hashedPassword = await bcryptjs.hashSync(req.body.password, 10);
    const user = new User({ ...req.body, password: hashedPassword });
    await user.save();
    res.status(200).json("User Created Successfully");
  } catch (error) {
    next(error);
  }
};
// login user handler
const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(400, "User not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Wrong login credentials"));
    }
    const { password: pass, ...rest } = validUser._doc;
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    return res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
module.exports = { registerUser, loginUser };
