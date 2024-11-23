const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

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
  resetPasswordToken: {
    type: String,
    default: null,
  },
  resetPasswordTokenExpiry: {
    type: Date,
    default: null,
  },
});

const saltround = 10;

userSchema.pre("save", async function (next) {
  try {
    const hashedPassword = await bcrypt.hash(this.password, saltround);
    if (hashedPassword) {
      this.password = hashedPassword;
    }
    next();
  } catch (error) {
    console.log(error);
    next();
  }
});

userSchema.pre("findOneAndUpdate", async function (next) {
  try {
    const update = this.getUpdate();
    if (update.$set && update.$set.password) {
      update.$set.password = await bcrypt.hash(update.$set.password, saltround);
    }
    next();
  } catch (error) {
    console.log(error);
    next();
  }
});

userSchema.methods.generateResetPasswordToken = function () {
  // Generate a random token
  const resetToken = crypto.randomBytes(32).toString("hex");
  // Hash the token and set it to the resetPasswordToken field
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  // Set the expiry date to 10 minutes from now
  this.resetPasswordTokenExpiry = Date.now() + 600000;

  return resetToken;
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
