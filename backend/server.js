import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import temperaturesRoutes from './routes/temperatures.js';
import articlesRoutes from './routes/articles.js';
import photosRoutes from './routes/photos.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/temperatures', temperaturesRoutes);
app.use('/api/articles', articlesRoutes);
app.use('/api/photos', photosRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Meteostanice API is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
