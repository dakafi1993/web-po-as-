import express from 'express';
import { pool } from '../db.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Get all articles
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM articles ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Get articles error:', error);
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
});

// Get article by slug
router.get('/:slug', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM articles WHERE slug = $1',
      [req.params.slug]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Article not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Get article error:', error);
    res.status(500).json({ error: 'Failed to fetch article' });
  }
});

// Create article (protected)
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { title, content, author } = req.body;
    
    // Generate slug
    const slug = title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    const result = await pool.query(
      `INSERT INTO articles (title, slug, content, author) 
       VALUES ($1, $2, $3, $4) 
       RETURNING *`,
      [title, slug, content, author]
    );
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Create article error:', error);
    res.status(500).json({ error: 'Failed to create article' });
  }
});

// Update article (protected)
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { title, content } = req.body;
    
    const result = await pool.query(
      `UPDATE articles 
       SET title = $1, content = $2, updated_at = NOW() 
       WHERE id = $3 
       RETURNING *`,
      [title, content, req.params.id]
    );
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Update article error:', error);
    res.status(500).json({ error: 'Failed to update article' });
  }
});

// Delete article (protected)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await pool.query('DELETE FROM articles WHERE id = $1', [req.params.id]);
    res.json({ message: 'Article deleted' });
  } catch (error) {
    console.error('Delete article error:', error);
    res.status(500).json({ error: 'Failed to delete article' });
  }
});

export default router;
