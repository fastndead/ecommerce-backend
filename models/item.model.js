var mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
  name: String,
  category: String,
  rating: Number,
  price: Number,
  image: String
}, { collection: 'items' });

module.exports = mongoose.models.Items || mongoose.model('Items', itemsSchema);