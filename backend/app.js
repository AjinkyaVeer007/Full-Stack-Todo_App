require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/userRoutes");

const cookieParser = require("cookie-parser");

const app = express();

//use express and npm libraries
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", userRoutes);
