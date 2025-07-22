const Order = require('../models/Order');
exports.getOrders = async (req, res) => {
  const orders = await Order.find().populate('customerId').populate('products.productId');
  res.json(orders);
};
exports.createOrder = async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json(order);
};
exports.updateOrder = async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(order);
};
exports.deleteOrder = async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ message: 'Order deleted' });
};
