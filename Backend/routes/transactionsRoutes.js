import express from 'express';
import {
  getTransactions,
  getTransactionById,
  createTransaction,
  deleteTransaction,
} from '../controllers/transactionController.js';

const router = express.Router();

router.route('/')
  .get(getTransactions)
  .post(createTransaction);

router.route('/:id')
  .get(getTransactionById)
  .delete(deleteTransaction);

export default router;