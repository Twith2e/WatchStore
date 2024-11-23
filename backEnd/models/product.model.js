const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
    image: {
      type: String,
      trim: true,
      required: true,
    },
    summary: {
      type: String,
      trim: true,
      required: true,
    },
    discount: {
      type: Number,
      trim: true,
      required: true,
    },
    description: [
      {
        heading: {
          type: String,
          trim: true,
          required: true,
        },
        paragraph: {
          type: String,
          trim: true,
          required: true,
        },
      },
    ],
    tags: {
      type: String,
      required: true,
      trim: true,
    },
    brand: {
      type: String,
      trim: true,
      required: true,
    },
    category: {
      type: String,
      trim: true,
      required: true,
    },
    sku: {
      type: String,
      trim: true,
      required: true,
    },
    year: {
      type: Number,
      required: true,
      trim: true,
    },
    weight: {
      type: Number,
      trim: true,
      required: true,
    },
    manual: {
      type: String,
      trim: true,
      required: true,
    },
    length: {
      type: Number,
      trim: true,
      required: true,
    },
    width: {
      type: Number,
      trim: true,
      required: true,
    },
    height: {
      type: Number,
      trim: true,
      required: true,
    },
    unit: {
      type: String,
      trim: true,
      required: true,
    },
    refundable: {
      type: Boolean,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
