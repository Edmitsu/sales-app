const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const AddProductDTO = require('../dtos/AddProductDTO');

// Rota para adicionar um produto ao carrinho
router.get('/add', (req, res) => {
    const { code, quantity } = req.query;
    const addProductDTO = new AddProductDTO(code, quantity);
    const result = productController.addProductToCart(cart, addProductDTO);
    res.json(result);
});

module.exports = router;
