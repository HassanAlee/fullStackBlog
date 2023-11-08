const mongoose = required("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 25,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 25,
  },
  password: {
    type: String,
    required: true,
    min: 7,
    max: 20,
  },
  joined: {
    type: String,
    default: Date.now(),
  },
  country: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: false,
  },
  instagram: {
    type: String,
    required: false,
  },
  linkedin: {
    type: String,
    required: false,
  },
  facebook: {
    type: String,
    required: false,
  },
  youtube: {
    type: String,
    required: false,
  },
  profile: {
    type: String,
    required: false,
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
