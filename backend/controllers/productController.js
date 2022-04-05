const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");

//Create Prodcut

exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  //const { name, description, price, category, images } = req.body;
  const product = await Product.create(req.body);

  return res.status(200).json({
    success: true,
    product,
  });
});

// exports.createProduct = async (req, res, next) => {
//   try {
//     //const { name, description, price, category, images } = req.body;
//     const product = await Product.create(req.body);

//     return res.status(200).json({
//       success: true,
//       product,
//     });
//   } catch (err) {
//     if (err.name === "ValidationError") {
//       const messages = Object.values(err.errors).map((val) => val.message);

//       return res.status(400).json({
//         success: false,
//         error: messages,
//       });
//     } else {
//       return res.status(500).json({
//         success: false,
//         error: "Server Error",
//       });
//     }
//   }
// };

//GET_all _product
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 5;
  const productCount = await Product.countDocuments();
  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const products = await apiFeature.query;
  res.status(200).json({
    success: true,
    products,
  });
});

//GET Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({
    success: true,
    product,
    productCount,
  });
});

// @desc    Delete Product
// @route   DELETE /api/v1/products/:id
// @access  Public
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product Remove SuccessFully",
  });
});

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  return res.status(200).json({
    success: true,
    product,
  });
});
