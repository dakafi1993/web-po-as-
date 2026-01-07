import express from 'express';
import { pool } from '../db.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Get page content by path
router.get('/:path(*)', async (req, res) => {
  try {
    const path = '/' + req.params.path;
    const result = await pool.query(
      'SELECT * FROM pages WHERE path = $1',
      [path]
    );
    
    if (result.rows.length === 0) {
      return res.json({ path, content: '', title: '' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Get page error:', error);
    res.status(500).json({ error: 'Failed to fetch page' });
  }
});

// Update page content (protected)
router.put('/:path(*)', authMiddleware, async (req, res) => {
  try {
    const path = '/' + req.params.path;
    const { content, title } = req.body;
    
    const result = await pool.query(
      `INSERT INTO pages (path, title, content, updated_at) 
       VALUES ($1, $2, $3, NOW())
       ON CONFLICT (path) 
       DO UPDATE SET content = $3, title = $2, updated_at = NOW()
       RETURNING *`,
      [path, title, content]
    );
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Update page error:', error);
    res.status(500).json({ error: 'Failed to update page' });
  }
});

export default router;
