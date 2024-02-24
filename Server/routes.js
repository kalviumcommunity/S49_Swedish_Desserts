const express = require('express');
const router = express.Router();

let food = [
  { id: 1, dessertname: 'Red velvet cake', type: 'cake' },
  { id: 2, dessertname: 'Tiramisu Cake', type: 'cake' }
];

// Read
router.get('/routes', (req, res) => {
  res.json(food);
});

router.get('/routes/:id', (req, res) => {
  const foodId = parseInt(req.params.id);
  const item = food.find(item => item.id === foodId);
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }
  res.json(item);
});

// Create
router.post('/routes', (req, res) => {
  const { dessertname, type } = req.body;
  if (!dessertname || !type) {
    return res.status(400).json({ message: 'dessertname and type are required' });
  }
  const newItem = {
    id: food.length + 1,
    dessertname: dessertname,
    type: type
  };
  food.push(newItem);
  res.status(201).json(newItem);
});

// Update
router.put('/routes/:id', (req, res) => {
  const foodId = parseInt(req.params.id);
  const itemIndex = food.findIndex(item => item.id === foodId);
  if (itemIndex === -1) {
    return res.status(404).json({ message: 'Item not found' });
  }
  const { dessertname, type } = req.body;
  if (!dessertname || !type) {
    return res.status(400).json({ message: 'dessertname and type are required' });
  }
  food[itemIndex].dessertname = dessertname;
  food[itemIndex].type = type;
  res.json(food[itemIndex]);
});

// Delete
router.delete('/routes/:id', (req, res) => {
  const foodId = parseInt(req.params.id);
  food = food.filter(item => item.id !== foodId);
  res.json({ message: 'Item deleted successfully' });
});

module.exports = router;
