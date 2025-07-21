const express = require('express');
const app = express();

const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middleware/errorHandler');

// Body parser middleware
app.use(express.json());

// Root route for sanity check
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Product Routes
app.use('/api/products', productRoutes);

// Error Handler Middleware
app.use(errorHandler);

module.exports = app;
