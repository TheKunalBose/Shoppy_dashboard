const Transaction = require('../models/Transaction');
exports.getTransactions = async (req, res) => {
  const transactions = await Transaction.find();
  res.json(transactions);
};
exports.createTransaction = async (req, res) => {
  const transaction = new Transaction(req.body);
  await transaction.save();
  res.json(transaction);
};
exports.deleteTransaction = async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.json({ message: 'Transaction deleted' });
};