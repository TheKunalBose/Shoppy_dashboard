// controllers/productController.js
const Product = require('../models/productModel');

// @desc    Get all products
exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

// @desc    Add a product
exports.createProduct = async (req, res, next) => {
  try {
    const { name, price, description } = req.body;
    const product = await Product.create({ name, price, description });
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
};