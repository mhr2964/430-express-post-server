const express = require('express');
const db = require('../db.js');

const router = express.Router();

// // just 3 quotes for now
// const data = db.getAllQuotes();

router.get('/', (req, res) => {
  const { id } = req.query;
  res.json(db.getQuoteById(id));
});

router.get('/random', (req, res) => {
  res.json(db.randomQuote());
});

router.get('/recent', (req, res) => {
  res.json(db.recentQuote());
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(db.getQuoteById(id));
});

module.exports = router;
