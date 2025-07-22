// routes/productRoutes.js
const express = require('express');
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../Controllers/productController');

const router = express.Router();

router.route('/')
  .get(getProducts)       // GET all products
  .post(createProduct);   // POST new product

router.route('/:id')
  .get(getProductById)    // GET single product
  .put(updateProduct)     // PUT update product
  .delete(deleteProduct); // DELETE product

module.exports = router;
