var mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  email: String,
  phone: String,
  selectedItems: [String],
}, { collection: 'orders' });

module.exports = mongoose.models.Order || mongoose.model('Order', orderSchema);