const express = require("express");
const router = express.Router();
const PORT = process.env.PORT;
const connectDB = require("./config/database");
connectDB.connect();
const {
  register,
  login,
  dashboard,
} = require("../controllers/userControllers");

router.post("/register", register);

router.post("/login", login);

router.get("/dashboard/:id", auth, dashboard);

app.listen(PORT, () => {
  console.log(`Port is running at ${PORT}`);
});
