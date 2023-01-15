const express = require("express");
const router = express.Router();

const connectDB = require("../config/database");
const auth = require("../middleware/auth");
connectDB.connect();
const {
  register,
  login,
  dashboard,
  logout,
} = require("../controllers/userControllers");

router.post("/register", register);

router.post("/login", login);

router.get("/dashboard", auth, dashboard);

router.get("/logout", logout);

module.exports = router;
