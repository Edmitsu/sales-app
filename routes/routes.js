const express = require('express');
const router = express.Router();

// Importe suas rotas específicas aqui
const productsRouter = require('./products');
const carrinhoRouter = require('./carts.js');

// Rota de boas-vindas
router.get('/', (req, res) => {
  res.send('API está funcionando!');
});

// Rotas para produtos
router.use('/products', productsRouter);

// Rotas para o carrinho de compras
router.use('/carrinho', carrinhoRouter);

module.exports = router;
