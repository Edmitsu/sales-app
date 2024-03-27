const express = require('express');
const router = express.Router();
const addProductRoutes = require('./addProductRoutes');
const cartRoutes = require('./cartRoutes');

router.use('/products', addProductRoutes);
router.use('/cart', cartRoutes);

module.exports = router;
