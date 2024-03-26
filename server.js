const express = require('express');
const connectDB = require('./db/db.js');
const routes = require('./routes/routes.js');
const products = require('./products');

const app = express();
const PORT = process.env.PORT || 3001;

connectDB();
/* app.use('/api', apiRoutes); */

let cart = {};

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
