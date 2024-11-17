const userModel = require("../models/user.model");
const { cloudinary } = require("../middleware/cloudinary");
const bcrypt = require("bcryptjs");
const Token = require("jsonwebtoken");
const { verifyToken } = require("../session/sessionservice");
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
    next(error);
  }
};

module.exports = { register, login, verify, uploadImage };
