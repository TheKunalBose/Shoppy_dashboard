import express from 'express';
import {
  getSummary,
  getRevenueStats,
  getExpenseStats,
  getPieChartData,
} from '../controllers/analyticsController.js';

const router = express.Router();

router.get('/summary', getSummary);           // Total revenue, orders, etc.
router.get('/revenue', getRevenueStats);      // For line chart
router.get('/expenses', getExpenseStats);     // For sparkline
router.get('/pie', getPieChartData);          // Pie chart breakdown

export default router;