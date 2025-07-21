const express = require('express');
const router = express.Router();
const {
  getProducts,
  createProduct,
} = require('../Controllers/productController');

router.route('/').get(getProducts).post(createProduct);

module.exports = router;