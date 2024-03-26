const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const cartController = require('../controllers/cartController');

let cart = {};
// Rota para adicionar um produto ao carrinho
router.get('/add/:code/:quantity', (req, res) => {
    const { code, quantity } = req.params;
    const result = productController.addProductToCart(cart, code, quantity);
    res.json(result);
});

// Rota para obter todos os produtos no carrinho, incluindo o valor total
router.get('/cart', (req, res) => {
    const result = cartController.calculateCartTotal(cart);
    res.json(result);
});

// Rota para remover um produto do carrinho
router.get('/remove/:code', (req, res) => {
    const { code } = req.params;
    const result = cartController.removeProductFromCart(cart, code);
    res.json(result);
});

// Rota para limpar o carrinho
router.get('/clear-cart', (req, res) => {
    cart = {};
    res.json({ message: 'Cart cleared with success' });
});

module.exports = router;
