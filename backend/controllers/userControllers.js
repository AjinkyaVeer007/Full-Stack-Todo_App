const User = require("../model/user.login");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("express");

exports.register = async (req, res) => {
  try {
    //collect all information
    const { firstname, lastname, email, password } = req.body;

    //validate the date
    if (!(firstname && lastname && email && password)) {
      res.status(401).send("All field are mandatory");
    }

    //check user is existing or not
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(401).send("User is already register");
    }

    //encyrpt password
    const encryptPassword = await bcrypt.hash(password, 10);

    // create new entry in database
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: encryptPassword,
    });

    // const token = jwt.sign(
    //   {
    //     id: user._id,
    //     email,
    //   },
    //   "shhhhh",
    //   { expiresIn: "2h" }
    // );

    // user.token = token;

    // // don't want to send password
    // user.password = undefined;

    // res.status(401).json(user);
  } catch (error) {
    console.log(error);
    console.log("Fail to register user");
  }
};

exports.login = async (req, res) => {
  try {
    //collect all information
    const { email, password } = req.body;

    //validate the date
    if (!(email, password)) {
      res.status(401).send("All fields are mandatory");
    }

    //check user in database
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).send("Need to register first");
    }

    //match the password & create token and send
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        {
          id: user._id,
          email,
        },
        "shhhhh",
        { expiresIn: "2h" }
      );
      user.password = undefined;
      // user.token = token;

      // const options = {
      //   expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
      // };

      // res.status(200).cookie("token", token, options).json({
      //   success: true,
      //   token,
      //   user,
      // });

      res.status(200).json({
        success: true,
        token,
        user,
      });
    } else {
      res.status(401).send("Email and password is incorrect");
    }
  } catch (error) {
    console.log("Fail to login");
    console.log(error);
  }
};

exports.dashboard = (req, res) => {
  console.log("Welcome to Dashboard");
  return res.send("Welcome to Dashboard");
};

exports.logout = (req, res) => {
  try {
    req.cookies = [];
  } catch (error) {
    console.log("Fail to expire token");
    console.log(error);
  }
};
