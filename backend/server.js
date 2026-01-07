import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import temperaturesRoutes from './routes/temperatures.js';
import articlesRoutes from './routes/articles.js';
import photosRoutes from './routes/photos.js';
import { initDatabase } from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize database
initDatabase().catch(err => {
  console.error('Failed to initialize database:', err);
  console.log('⚠️  Server will continue but database operations may fail');
});

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? [
        'https://frontend-production-d16d.up.railway.app',
        'https://web-po-as.vercel.app', 
        'https://web-po-as-git-main.vercel.app'
      ]
    : 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/temperatures', temperaturesRoutes);
app.use('/api/articles', articlesRoutes);
app.use('/api/photos', photosRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Meteostanice API is running' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Meteostanice API is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
