require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

//use express and npm libraries
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
