const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  // console.log(req.headers);

  //what if token is not there
  // if (!token) {
  //   res.status(401).send("Token is not there");
  // }

  //verify the token
  try {
    const token = req.headers.authorization;
    const decode = jwt.verify(token, "shhhhh");
    console.log(decode);
    next();
    // req.user = decode;
  } catch (error) {
    return res
      .status(401)
      .json({ status: false, message: error.message + "Invalid Token" });
  }
};

module.exports = auth;
