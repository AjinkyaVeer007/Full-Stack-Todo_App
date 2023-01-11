const express = require("express");
const router = express.Router();
const {
  register,
  login,
  dashboard,
} = require("../controllers/userControllers");

router.post("/register", register);

router.post("/login", login);

router.get("/dashboard/:id", dashboard);
