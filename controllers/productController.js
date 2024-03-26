const products = require('../products');

const addProductToCart = (cart, code, quantity) => {
    if (!products[code]) {
        return { error: 'Product not found' };
    }

    if (!cart[code]) {
        cart[code] = {
            name: products[code].name,
            price: products[code].price,
            quantity: parseInt(quantity)
        };
    } else {
        cart[code].quantity += parseInt(quantity);
    }

    return { message: 'Product added to the cart with success!', cart };
};

module.exports = { addProductToCart };
