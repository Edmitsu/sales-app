const mongoose = require('mongoose');
const uuid = require('uuid');

const productSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid.v4 
  },
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  quantityInStock: {
    type: Number,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
