const errorHandler = (error, req, res, next) => {
  if (error.name === "MongoError") {
    if (error.code === 11000) {
      return res
        .status(500)
        .send({ message: "User already exists", status: false });
    }
  } else if (error.name === "ValidationError") {
    return res.status(500).send({
      message: "Please fill all fields",
      status: false,
    });
  } else if (error.name === "MongoAuthenticationError") {
    return res
      .status(401)
      .send({ message: "Invalid credentials", status: false });
  } else if (error.name === "MongoTimeoutError") {
    return res.status(504).send({
      message: "Network is slow, please try again later",
      status: false,
    });
  } else if (error.name === "JsonWebTokenError") {
    return res.status(401).send({ message: "Invalid token", status: false });
  } else if (error.name === "TokenExpiredError") {
    return res.status(401).send({ message: "Token expired", status: false });
  } else if (error.message === "Invalid token") {
    return res.status(401).send({ message: "Invalid token", status: false });
  } else if (error.message === "Token verification failed") {
    return res
      .status(401)
      .send({ message: "Token verification failed", status: false });
  } else if (error.name === "NotBeforeError") {
    return res
      .status(401)
      .send({ message: "Token not yet active", status: false });
  } else {
    return res
      .status(500)
      .send({ message: "Internal Server Error", status: false });
  }
};

module.exports = errorHandler;
