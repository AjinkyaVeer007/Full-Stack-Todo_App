const express = require("express");
const router = express.Router();

const connectDB = require("../config/database");
const auth = require("../middleware/auth");
connectDB.connect();
const {
  register,
  login,
  dashboard,
} = require("../controllers/userControllers");

router.post("/register", register);

router.post("/login", login);

router.get("/dashboard", auth, dashboard);

module.exports = router;
