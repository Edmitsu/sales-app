const Product = require("./schemas/productModel");

const createProducts = async () => {
    try {
        const productsToCreate = [
            { code: '001', name: 'Rice', price: 10.5 },
            { code: '002', name: 'Beans', price: 8.0 },
            { code: '003', name: 'Spaghetti', price: 5.0 },
            // Adicione mais produtos conforme necessário
        ];

        for (const productData of productsToCreate) {
            const existingProduct = await Product.findOne({ code: productData.code });
            if (!existingProduct) {
                await Product.create(productData);
                console.log(`Produto '${productData.name}' criado com sucesso`);
            } else {
                console.log(`Produto '${productData.name}' já existe no banco de dados`);
            }
        }
        console.log("Banco de dados Populado!");
    } catch (error) {
        console.error('Erro ao criar produtos:', error);
    }
};

module.exports = createProducts;
