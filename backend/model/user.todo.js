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
  userId: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("UserTodo", userTodoSchema);
