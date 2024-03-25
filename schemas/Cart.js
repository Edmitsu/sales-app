const mongoose = require('mongoose');
const uuid = require('uuid');

const cartItemSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid.v4
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const cartSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid.v4 
  },
  items: [cartItemSchema],
  total: {
    type: Number,
    default: 0
  }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
