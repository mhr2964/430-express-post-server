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

const generateNewId = () => crypto.randomUUID();

const hoots = [{
  id: generateNewId(),
  content: "Let's Rock!",
  createdAt: new Date(),
}];

const getHootById = (id) => {
  const hoot = hoots.find((h) => h.id === id);
  return hoot;
};

router.get('/hoots', (req, res) => {
  res.json(hoots);
});

router.get('/hoots/:id([0-9,a-z,A-Z,-]{36})', (req, res) => {
  res.json(getHootById(req.params.id));
});

router.post('/addHoot', (req, res) => {
  const content = req.body && req.body.content
    ? req.body.content
    : 'No req.body or req.body.content found!';

  const hoot = {
    id: generateNewId(),
    content,
    createdAt: new Date(),
  };

  hoots.push(hoot);

  res.status(201).json(hoot);
});

const deleteHootById = (id) => {
  const hoot = getHootById(id);
  if (!hoot) return null;
  const index = hoots.indexOf(hoot);
  hoots.splice(index, 1);
  return hoot;
};

router.delete('/deleteHoot/:id([0-9,a-z,A-Z,-]{36})', (req, res) => {
  const hoot = deleteHootById(req.params.id);
  if (!hoot) {
    const error = `id: '${req.params.id}' not found`;
    res.status(404).send({ error });
  } else {
    res.json(hoot);
  }
});

router.put('/updateHoot/:id([0-9,a-z,A-Z,-]{36})', (req, res) => {
  const hoot = getHootById(req.params.id);
  if (!hoot) {
    const error = `id: '${req.params.id}' not found`;
    res.status(404).send({ error });
  } else {
    const content = req.body && req.body.content
      ? req.body.content
      : 'No req.body or req.body.content found!';
    hoot.content = content;
    hoot.updatedAt = new Date();
    res.json(hoot);
  }
});

module.exports = router;
