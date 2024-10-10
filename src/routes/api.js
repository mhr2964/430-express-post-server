const express = require('express');

const router = express.Router();

const getTimeString = () => {
  const d = new Date();
  const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  return dateString;
};

router.get('/helloJSON', (req, res) => {
  res.json({ message: 'Hello There!' });
});

router.get('/timeJSON', (req, res) => {
  res.json({ time: getTimeString() });
});

module.exports = router;
