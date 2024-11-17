const express = require("express");
const app = express();
const cors = require("cors");
const connect = require("./config/mongodb.connection");
const errorHandler = require("./middleware/errorHandler");
const userRouter = require("./routes/user.routes");
require("dotenv").config();

//MIDDLEWARES
app.use(express.json());
app.use(cors({ origin: "*" }));

//ROUTES
app.use("/user", userRouter);

app.use(errorHandler);

const url = process.env.MONGODB_URI;
connect(url);

const port = 5000;
app.listen(port, () => {
  console.log("Server is live on port " + port);
});
