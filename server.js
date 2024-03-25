const express = require('express');
const connectDB = require('./db/db.js');
const apiRoutes = require('./routes/routes.js');

const app = express();
const PORT = process.env.PORT || 3001;

connectDB();
app.use('/api', apiRoutes);

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
