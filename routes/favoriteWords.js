const express = require('express');

const {
    getFavoriteWords,
    createFavoriteWord,
    deleteFavoriteWord
} = require('../controllers/favoriteWordController');

const router = express.Router();

// GET all favorite words
router.get('/', getFavoriteWords);

// POST a new favorite word 
router.post('/', createFavoriteWord);

// DELETE a favorite word
router.delete('/:id', deleteFavoriteWord);

module.exports = router