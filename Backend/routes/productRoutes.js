const express = require('express');
const router = express.Router();
const { getAllProducts, createProduct } = require('../Controllers/productController');

router.route('/')
  .get(getAllProducts)
  .post(createProduct);

module.exports = router;