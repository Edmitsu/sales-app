const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017');
    console.log('Conexão com MongoDB estabelecida');
  } catch (error) {
    console.error('Erro ao conectar com MongoDB:', error);
  }
};

module.exports = connectDB;
