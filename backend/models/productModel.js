const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter the product name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "please enter the product description"],
  },
  price: {
    type: Number,
    required: [true, "please enter the product Price"],
    maxlength: [8, "price can't not excced  8 Charater"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "please enter the product category"],
  },
  stock: {
    type: Number,
    default: 1,
    required: [true, "please enter the product Stock"],
    maxlength: [4, "Stock can not excced 4 "],
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Product", productSchema);
