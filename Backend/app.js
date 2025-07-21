const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Error Handler
app.use(errorHandler);

module.exports = app;