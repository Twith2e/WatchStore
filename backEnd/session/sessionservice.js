const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      throw new Error("Invalid token");
    }
    const { email } = decoded;
    return email;
  } catch (error) {
    if (error.message === "Invalid token") {
      throw new Error("Invalid token");
    } else if (error.name === "TokenExpiredError") {
      throw new Error("Token expired");
    } else if (error.name === "JsonWebTokenError") {
      throw new Error(error);
    } else if (error.name === "NotBeforeError") {
      throw new Error("Token not yet active");
    } else {
      throw new Error("Token verification failed");
    }
  }
};

module.exports = { verifyToken };
