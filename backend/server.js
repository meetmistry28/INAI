const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/db');

// Import routes
const authRoutes = require('./routes/auth.routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running and healthy' });
});

// Test database connection
app.get('/api/test-db', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()');
    res.json({
      status: 'success',
      message: 'Successfully connected to the database',
      timestamp: result.rows[0].now
    });
  } catch (err) {
    console.error('Database connection error:', err);
    res.status(500).json({
      status: 'error',
      message: 'Failed to connect to the database',
      error: err.message
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
