const mongoose = require("mongoose");

const userTodoSchema = new mongoose.Schema({
  Title: {
    type: String,
    require: true,
    trim: true,
  },
  Tasks: {
    type: [],
    trim: true,
    require: true,
  },
});

module.exports = mongoose.model("User", userTodoSchema);
