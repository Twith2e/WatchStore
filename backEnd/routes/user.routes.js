const express = require("express");
const router = express.Router();
const {
  register,
  login,
  verify,
  uploadImage,
} = require("../controllers/user.controllers");

router.post("/register", register);
router.post("/login", login);
router.get("/verify-token", verify);
router.post("/upload-image", uploadImage);

module.exports = router;
