const { v2: cloudinary } = require("cloudinary");
require("dotenv").config();

cloudinary.config({
  cloud_name: "deqdpks1f",
  api_key: "122744827363997",
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = { cloudinary };
