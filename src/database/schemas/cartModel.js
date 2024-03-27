const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    items: [{
        type: Schema.Types.ObjectId, 
        ref: 'CartItem' 
    }]
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
