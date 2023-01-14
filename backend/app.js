require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const userRoutes = require("./routes/userRoutes");

const cookieParser = require("cookie-parser");

const app = express();

//use express and npm libraries
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Port is running at ${PORT}`);
});
