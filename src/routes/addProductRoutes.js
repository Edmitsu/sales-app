const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const AddProductDTO = require('../dtos/AddProductDTO');
const Cart = require('../database/schemas/cartModel');

router.get('/add', async (req, res) => {
    const { code, quantity } = req.query;

    try {
        // Verifica se o carrinho já existe ou cria um novo
        let cart = await Cart.findOne();
        if (!cart) {
            cart = new Cart();
        }

        // Cria um DTO para adicionar o produto ao carrinho
        const addProductDTO = new AddProductDTO(code, quantity);

        // Chama o controlador para adicionar o produto ao carrinho
        const result = await productController.addProductToCart(cart, addProductDTO);

        // Verifica se result é definido e possui a propriedade 'error'
        if (result && result.error) {
            return res.status(400).json(result); // Retorna um erro 400 se 'result' tiver a propriedade 'error'
        }

        // Se a operação foi bem-sucedida, salva o carrinho
        await cart.save();
        
        res.json(result); // Retorna o resultado da operação
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
