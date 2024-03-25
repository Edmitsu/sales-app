const express = require('express');
const router = express.Router();
const Cart = require('../schemas/Cart');

// Rota para adicionar um item ao carrinho
router.post('/', async (req, res) => {
  const { productId, quantity, price } = req.body;

  try {
    let cart = await Cart.findOne({ _id: req.session.cartId });

    if (!cart) {
      cart = new Cart({ _id: req.session.cartId });
    }

    const existingItemIndex = cart.items.findIndex(item => item.product.toString() === productId);

    if (existingItemIndex !== -1) {
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity, price });
    }

    cart.total += price * quantity;

    await cart.save();

    res.status(201).json(cart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
