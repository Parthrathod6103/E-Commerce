const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");

router.route("/product").get(getAllProducts);
router.route("/products/new").post(createProduct);
router
  .route("/product/:id")
  .delete(deleteProduct)
  .put(updateProduct)
  .get(getProductDetails);
module.exports = router;
