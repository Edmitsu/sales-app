const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

productSchema.pre('save', async function(next) {
    try {
        const existingProduct = await this.constructor.findOne({ code: this.code });
        if (existingProduct) {
            throw new Error('Já existe um produto com este código');
        }
        next();
    } catch (error) {
        next(error);
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
