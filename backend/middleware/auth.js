const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  console.log(req.cookies);
  const { token } = req.cookies;

  //what if token is not there
  if (!token) {
    res.status(401).send("Token is not there");
  }

  //verify the token
  try {
    const decode = jwt.verify(token, "shhhhh");
    req.user = decode;
  } catch (error) {
    res.status(403).send("Token is invalid");
  }
  return next();
};

module.exports = auth;
