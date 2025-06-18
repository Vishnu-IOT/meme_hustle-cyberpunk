 const express = require('express');
const router = express.Router();
const {
  createMeme, voteMeme, bidOnMeme, getLeaderboard, generateCaptionAndVibe, getAllMemes
} = require('../controllers/memes');

router.post('/', createMeme);
router.post('/:id/vote', voteMeme);
router.post('/:id/bid', bidOnMeme);
router.get('/leaderboard', getLeaderboard);
router.post('/:id/caption', generateCaptionAndVibe);
router.get('/', getAllMemes);


module.exports = router;

