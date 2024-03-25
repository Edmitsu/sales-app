const express = require('express');
const router = express.Router();
const Product = require('../schemas/Product');

// Rota para obter todos os produtos
router.get('/', async (req, res) => {
  try {
    const produtos = await Product.find();
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Rota para obter um produto pelo ID
router.get('/:id', async (req, res) => {
  try {
    const produto = await Product.findById(req.params.id);
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.json(produto);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Rota para criar um novo produto
router.post('/', async (req, res) => {
  const produto = new Product({
    name: req.body.name,
    code: req.body.code,
    price: req.body.price,
    quantityInStock: req.body.quantityInStock
  });

  try {
    const novoProduto = await produto.save();
    res.status(201).json(novoProduto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Rota para atualizar um produto pelo ID
router.put('/:id', async (req, res) => {
  try {
    const produto = await Product.findById(req.params.id);
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    produto.name = req.body.name;
    produto.code = req.body.code;
    produto.price = req.body.price;
    produto.quantityInStock = req.body.quantityInStock;

    const produtoAtualizado = await produto.save();
    res.json(produtoAtualizado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Rota para excluir um produto pelo ID
router.delete('/:id', async (req, res) => {
  try {
    const produto = await Product.findById(req.params.id);
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    await produto.remove();
    res.json({ message: 'Produto excluído com sucesso' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
