const calculateCartTotal = (cart) => {
    let total = 0;
    const productsInCart = [];

    for (const code in cart) {
        const product = cart[code];
        const subtotal = product.price * product.quantity;
        total += subtotal;
        productsInCart.push({
            code,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            subtotal
        });
    }

    return { products: productsInCart, total };
};

const removeProductFromCart = (cart, code) => {
    if (!cart[code]) {
        return { error: 'Product not found' };
    }

    delete cart[code];

    return { message: 'Product removed from the cart with success', cart };
};

module.exports = { calculateCartTotal, removeProductFromCart };
