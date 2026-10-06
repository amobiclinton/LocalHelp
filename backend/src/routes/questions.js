const express = require('express');
const { authMiddleware } = require('../middleware/auth');
const { pool } = require('../config/db');

const router = express.Router();

router.get('/nearby', authMiddleware, async (req, res) => {
  try {
    const { lat, lng, radiusKm = 5 } = req.query;

    if (!lat || !lng) {
      return res.status(400).json({ message: 'lat and lng are required' });
    }

    const query = `
      SELECT q.*, u.full_name AS author_name
      FROM questions q
      JOIN users u ON u.id = q.user_id
      WHERE ST_DWithin(
        q.location::geography,
        ST_SetSRID(ST_MakePoint($1, $2), 4326)::geography,
        $3 * 1000
      )
      ORDER BY q.created_at DESC
      LIMIT 20;
    `;

    const result = await pool.query(query, [lng, lat, radiusKm]);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Could not load nearby questions' });
  }
});

router.post('/', authMiddleware, async (req, res) => {
  try {
    const { title, description, category, latitude, longitude, locationName } = req.body;

    if (!title || !description || !category) {
      return res.status(400).json({ message: 'Title, description and category are required' });
    }

    const result = await pool.query(
      `INSERT INTO questions (user_id, title, description, category, latitude, longitude, location_name, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
       RETURNING *;`,
      [req.user.userId, title, description, category, latitude || 9.03, longitude || 7.5, locationName || 'Karu']
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Could not create question' });
  }
});

router.get('/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('SELECT * FROM questions WHERE id = $1', [id]);

  if (result.rows.length === 0) {
    return res.status(404).json({ message: 'Question not found' });
  }

  res.json(result.rows[0]);
});

module.exports = router;
