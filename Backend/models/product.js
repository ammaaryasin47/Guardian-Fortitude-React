const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  specs: { type: Object, default: {} } 
}, { timestamps: true });

// This line is what allows .deleteMany() to work:
module.exports = mongoose.model('Product', productSchema);