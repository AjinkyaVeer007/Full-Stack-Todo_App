const User = require("../model/user.login");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

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

    const token = jwt.sign(
      {
        id: user._id,
        email,
      },
      "shhhhh",
      { expiresIn: "2h" }
    );

    user.token = token;

    // don't want to send password
    user.password = undefined;

    res.status(401).json(user);
  } catch (error) {
    console.log(error);
    console.log("Fail to register user");
  }
};

exports.login = async (req, res) => {};
