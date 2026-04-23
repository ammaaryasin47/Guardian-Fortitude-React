const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // References your User model
    required: true
  },
  paymentId: {
    type: String,
    required: true,
    unique: true // Ensure one payment = one order
  },
  // This array allows multiple products in one "row" (document)
  products: [
  {
    productId: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      default: 1
    },
    priceAtPurchase: {
      type: Number,
      required: true
    }
  }
],
  totalAmount: {
    type: Number,
    required: true
  },
 status: {
    type: String,
    enum: ['Pending', 'Processing', 'Deployed', 'Delivered', 'Cancelled'],
    default: 'Pending'
  }
}, { timestamps: true });



module.exports = mongoose.model('Order', OrderSchema);