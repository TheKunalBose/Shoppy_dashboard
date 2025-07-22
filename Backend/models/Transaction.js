const transactionSchema = new mongoose.Schema({
  amount: Number,
  type: String, // credit or debit
  date: Date,
}, { timestamps: true });
module.exports = mongoose.model('Transaction', transactionSchema);
