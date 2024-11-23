const express = require("express");
const router = express.Router();
const {
  register,
  login,
  verify,
  uploadImage,
  resetPassword,
  resetPasswordToken,
} = require("../controllers/user.controller");
const { Validate } = require("../middleware/validation");
const { userValidation } = require("../middleware/userValidation");

router.post("/register", Validate(userValidation), register);
router.post("/login", login);
router.get("/verify-token", verify);
router.post("/upload-image", uploadImage);
router.post("/reset-password", resetPassword);
router.post("/update-password/:token", resetPasswordToken);

module.exports = router;
