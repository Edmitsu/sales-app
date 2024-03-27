const mongoose = require('mongoose');
const Cart = require('../database/schemas/cartModel');
const Product = require('../database/schemas/productModel');
const AddProductDTO = require('../dtos/AddProductDTO');

const addProductToCart = async (cart, addProductDTO) => {
    try {
        const { code, quantity } = addProductDTO;

        // Verifica se o produto existe no banco de dados pelo código
        const product = await Product.findOne( {code} );
        if (!product) {
            return { error: 'Product not found' };
        }

        // Verifica se a quantidade é um número
        if (isNaN(quantity)) {
            return { error: 'Quantity must be a number' };
        }
        console.log('Product:', product);
        // Adiciona o produto ao carrinho
        if (product._id) {
            cart.items.push({ product: product.code, quantity });
        } else {
            return { error: 'Product ID not found' };
        }
        // Salva as alterações no carrinho
        await cart.save();

        return { message: 'Product added to the cart with success!', cart };
    } catch (error) {
        console.error(error);
        return { error: 'Error adding product to cart' };
    }
};

module.exports = { addProductToCart };
