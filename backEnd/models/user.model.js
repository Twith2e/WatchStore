const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  profileImage: {
    type: String,
    default: null,
  },
});

const saltround = 10;

userSchema.pre("save", async function (next) {
  try {
    const hashedPassword = bcrypt.hash(this.password, saltround);
    if (hashedPassword) {
      this.password = hashedPassword;
    }
    next();
  } catch (error) {
    console.log(error);
    next();
  }
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
