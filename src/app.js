require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db.js');

const authRoutes = require('./routes/auth.routes');
const taskRoutes = require('./routes/task.routes');  // <-- ADD THIS

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/v1/auth', authRoutes);   // Auth Routes
app.use('/api/v1/tasks', taskRoutes);  // Task CRUD Routes

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// Global Error Handler (fallback)
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ message: 'Server error' });
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
