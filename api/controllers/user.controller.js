const bcryptjs = require("bcryptjs");
const User = require("../models/user.model.js");
const { errorHandler } = require("../utils/error.js");
const registerUser = async (req, res, next) => {
  try {
    const hashedPassword = await bcryptjs.hashSync(req.body.password, 10);
    const user = new User({ ...req.body, password: hashedPassword });
    await user.save();
    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
module.exports = { registerUser };
