const express = require('express');
const connectDB = require('./db/db.js');
const routes = require('./routes/routes.js');
const products = require('./products');

const app = express();
const PORT = process.env.PORT || 3001;

connectDB();
/* app.use('/api', apiRoutes); */

app.use('/', routes);

app.use((req, res, next) => {
    res.status(404).send('Rota não encontrada');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
