// routes/analyticsRoutes.js
const express = require('express');
const {
  getSummary,
  getRevenueStats,
  getExpenseStats,
  getPieChartData,
} = require('../controllers/analyticsController');

const router = express.Router();

router.get('/summary', getSummary);           // Total revenue, orders, etc.
router.get('/revenue', getRevenueStats);      // For line chart
router.get('/expenses', getExpenseStats);     // For sparkline
router.get('/pie', getPieChartData);          // Pie chart breakdown

module.exports = router;
