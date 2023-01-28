const express = require("express");
const router = express.Router();

const connectDB = require("../config/database");
const auth = require("../middleware/auth");
connectDB.connect();
const {
  register,
  login,
  dashboard,
  createTodo,
  getTodos,
} = require("../controllers/userControllers");

router.post("/register", register);

router.post("/login", login);

router.get("/dashboard", auth, dashboard);

router.post("/createTodo", auth, createTodo);

router.post("/getTodos", auth, getTodos);

module.exports = router;
