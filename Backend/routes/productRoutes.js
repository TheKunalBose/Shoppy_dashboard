import express from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';

const router = express.Router();

router.route('/')
  .get(getProducts)       // GET all products
  .post(createProduct);   // POST new product

router.route('/:id')
  .get(getProductById)    // GET single product
  .put(updateProduct)     // PUT update product
  .delete(deleteProduct); // DELETE product

export default router;