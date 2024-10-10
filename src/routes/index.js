const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/bye', (req, res) => {
  res.send('Bye');
});

module.exports = router;
