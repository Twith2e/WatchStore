const userModel = require("../models/user.model");
const { cloudinary } = require("../middleware/cloudinary");
const bcrypt = require("bcryptjs");
const Token = require("jsonwebtoken");
const { verifyToken } = require("../session/sessionservice");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

require("dotenv").config();

const register = async (req, res, next) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    if (!firstname || !lastname || !email || !password) {
      const error = new Error("Validation Error");
      error.name = "ValidationError";
      return next(error);
    } else {
      const existingUser = await userModel.findOne({ email: email });
      if (!existingUser) {
        try {
          const user = await userModel.create(req.body);
          if (user) {
            res
              .status(200)
              .send({ message: "User created successfully", status: true });
          }
        } catch (error) {
          return next(error);
        }
      } else {
        const error = new Error("User already exists");
        error.name = "MongoError";
        return next(error);
      }
    }
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res
        .status(400)
        .send({ message: "No field should be empty", status: false });
    } else {
      const user = await userModel.findOne({ email: email });
      if (!user) {
        res.status(404).send({ message: "User not found", status: false });
      } else {
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          res
            .status(401)
            .send({ message: "Invalid credentials", status: false });
        } else {
          const generatedToken = Token.sign(
            { email },
            `${process.env.JWT_SECRET_KEY}`,
            { expiresIn: "1d" }
          );
          if (generatedToken) {
            res.status(200).send({
              message: "User logged in successfully",
              status: true,
              token: generatedToken,
            });
          } else {
            const error = new Error("Token error");
            next(error);
          }
        }
      }
    }
  } catch (error) {
    next(error);
    res.status(500).send({ message: "Error", status: false });
  }
};

const verify = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const email = verifyToken(token);
    if (email) {
      res.status(200).send({ message: "Token verified", status: true, email });
    } else {
      throw new Error("Invalid token");
    }
  } catch (error) {
    next(error);
  }
};

const uploadImage = async (req, res, next) => {
  try {
    //GET USER EMAIL FROM TOKEN
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).send({ message: "Unauthorized", status: false });
    }
    const email = verifyToken(token);
    if (!email) {
      return res.status(401).send({ message: "Token expired", status: false });
    }

    //GET IMAGE FROM REQUEST BODY
    const image = req.body.image;
    if (!image) {
      return res
        .status(400)
        .send({ message: "Image is required", status: false });
    }

    //UPLOAD IMAGE TO CLOUDINARY
    const imageupload = await cloudinary.uploader.upload(image);

    //UPDATE USER PROFILE IMAGE
    const userProfile = await userModel.findOneAndUpdate(
      { email },
      { $set: { profileImage: imageupload.secure_url } }
    );

    //CHECK IF USER PROFILE IMAGE UPDATED
    if (userProfile) {
      res
        .status(200)
        .send({ message: "Image uploaded successfully", status: true });
    } else {
      return res
        .status(400)
        .send({ message: "Image upload failed", status: false });
    }
  } catch (error) {
    res.status(500).send({ message: "Error uploading product", status: false });
  }
};

const resetPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(404).send({ message: "User not found", status: false });
    }
    const resetToken = user.generateResetPasswordToken();
    await user.save({ validateBeforeSave: false });
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });
      if (!transporter) {
        throw new Error("Failed to create transporter");
      }
      try {
        let mailOptions = {
          from: `"Xtra Watch" <${process.env.EMAIL}>`,
          to: email,
          subject: "Confirm",
          html: `<p>Click on the link below to reset your password:</p>
                 <a href="http://localhost:5173/update-password/${resetToken}" style="padding: 10px 20px; 
                 background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;">
                 Reset Password</a>
                 <p>If you didn't request this, please ignore this email.</p>
                 <p>This link will expire in 10 minutes.</p>`,
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            res.status(400).send({ message: error.message, status: false });
            return console.log(error);
          }
          res
            .status(200)
            .send({ message: "Reset password token generated", status: true });
        });
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

const resetPasswordToken = async (req, res, next) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await userModel.findOneAndUpdate(
      {
        resetPasswordToken: hashedToken,
        resetPasswordTokenExpiry: { $gt: Date.now() },
      },
      {
        $set: {
          password,
          resetPasswordToken: null,
          resetPasswordTokenExpiry: null,
        },
      },
      { new: true }
    );
    if (!user) {
      return res.status(404).send({ message: "Invalid token", status: false });
    }
    res.status(200).send({ message: "Password updated", status: true });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  verify,
  uploadImage,
  resetPassword,
  resetPasswordToken,
};
