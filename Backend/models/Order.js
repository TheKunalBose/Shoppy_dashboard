const orderSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
      quantity: Number,
    },
  ],
  totalAmount: Number,
  status: { type: String, default: 'Pending' },
}, { timestamps: true });
module.exports = mongoose.model('Order', orderSchema);
