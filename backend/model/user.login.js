const mongoose = require("mongoose");

const userLoginSchema = new mongoose.Schema({
  firstname: {
    type: String,
    trim: true,
    default: null,
  },
  lastname: {
    type: String,
    trim: true,
    default: null,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("User", userLoginSchema);
