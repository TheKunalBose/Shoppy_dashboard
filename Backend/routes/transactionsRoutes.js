// routes/transactionRoutes.js
const express = require('express');
const {
  getTransactions,
  getTransactionById,
  createTransaction,
  deleteTransaction,
} = require('../controllers/transactionController');

const router = express.Router();

router.route('/')
  .get(getTransactions)
  .post(createTransaction);

router.route('/:id')
  .get(getTransactionById)
  .delete(deleteTransaction);

module.exports = router;
