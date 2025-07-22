const Product = require('../models/Product');
const Customer = require('../models/Customer');
const Order = require('../models/Order');
const Transaction = require('../models/Transaction');

exports.getSummary = async (req, res) => {
  const products = await Product.countDocuments();
  const customers = await Customer.countDocuments();
  const orders = await Order.countDocuments();
  const earnings = await Transaction.aggregate([
    { $group: { _id: null, total: { $sum: '$amount' } } },
  ]);
  res.json({
    totalProducts: products,
    totalCustomers: customers,
    totalOrders: orders,
    totalEarnings: earnings[0]?.total || 0,
  });
};
