const express = require('express');
const { authMiddleware } = require('../middleware/auth');
const { pool } = require('../config/db');

const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
  try {
    const { questionId, text, voiceUrl, photoUrl, mapUrl } = req.body;

    if (!questionId || (!text && !voiceUrl && !photoUrl && !mapUrl)) {
      return res.status(400).json({ message: 'Reply content is required' });
    }

    const result = await pool.query(
      `INSERT INTO replies (question_id, user_id, text, voice_url, photo_url, map_url, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, NOW())
       RETURNING *;`,
      [questionId, req.user.userId, text || null, voiceUrl || null, photoUrl || null, mapUrl || null]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Could not create reply' });
  }
});

router.get('/:questionId', authMiddleware, async (req, res) => {
  const { questionId } = req.params;
  const result = await pool.query(
    `SELECT r.*, u.full_name AS author_name
     FROM replies r
     JOIN users u ON u.id = r.user_id
     WHERE r.question_id = $1
     ORDER BY r.created_at DESC`,
    [questionId]
  );

  res.json(result.rows);
});

module.exports = router;
