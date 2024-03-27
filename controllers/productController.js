const products = require('../products');
const addProductDTO = require('../dtos/AddProductDTO')

const addProductToCart = (cart, addProductDTO) => {
    const { code, quantity } = addProductDTO;

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
