import express from 'express';
import { pool } from '../db.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Get all temperatures for a year
router.get('/year/:year', async (req, res) => {
  try {
    const { year } = req.params;
    const result = await pool.query(
      `SELECT * FROM temperatures 
       WHERE EXTRACT(YEAR FROM date) = $1 
       ORDER BY date ASC`,
      [year]
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Get temperatures error:', error);
    res.status(500).json({ error: 'Failed to fetch temperatures' });
  }
});

// Add temperature (protected)
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { date, temp6, temp12, temp18 } = req.body;
    
    const result = await pool.query(
      `INSERT INTO temperatures (date, temp_6, temp_12, temp_18) 
       VALUES ($1, $2, $3, $4) 
       ON CONFLICT (date) DO UPDATE 
       SET temp_6 = $2, temp_12 = $3, temp_18 = $4
       RETURNING *`,
      [date, temp6, temp12, temp18]
    );
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Add temperature error:', error);
    res.status(500).json({ error: 'Failed to add temperature' });
  }
});

// Delete temperature (protected)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await pool.query('DELETE FROM temperatures WHERE id = $1', [req.params.id]);
    res.json({ message: 'Temperature deleted' });
  } catch (error) {
    console.error('Delete temperature error:', error);
    res.status(500).json({ error: 'Failed to delete temperature' });
  }
});

export default router;
