require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const User = require("./model/user.login");

const app = express();

//use express and npm libraries
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
