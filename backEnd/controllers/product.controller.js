const productModel = require("../models/product.model");
const cloudinary = require("cloudinary");

const addDescription = async (req, res, next) => {
  try {
    const { image, ...rest } = req.body;
    const imageupload = await cloudinary.uploader.upload(image);
    const product = {
      ...rest,
      image: imageupload.secure_url,
    };
    const productDetails = await productModel.create(product);
    if (productDetails) {
      return res
        .status(200)
        .send({ message: "Product added successfully", status: true });
    } else {
      return res
        .status(400)
        .send({ message: "Product not added", status: false });
    }
  } catch (error) {
    // next(error);
    console.log(error);
  }
};

module.exports = { addDescription };
