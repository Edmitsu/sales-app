const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// Conectando ao MongoDB
mongoose.connect('mongodb://localhost:27017')
  .then(() => console.log('Conexão com MongoDB estabelecida'))
  .catch(err => console.error('Erro ao conectar com MongoDB:', err));

// Definindo uma rota de exemplo
app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
