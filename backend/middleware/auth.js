const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  //verify the token
  try {
    const token = req.headers?.authorization;
    console.log(token, "from auth");
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
