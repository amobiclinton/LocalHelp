const express = require('express');
const { authMiddleware } = require('../middleware/auth');
const { pool } = require('../config/db');

const router = express.Router();

router.get('/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

  if (result.rows.length === 0) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(result.rows[0]);
});

module.exports = router;
