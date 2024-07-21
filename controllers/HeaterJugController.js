const HeaterJug = require('../models/Heaterjug');

// Get all items
exports.getHeaterJugItems = async (req, res) => {
  try {
    const items = await HeaterJug.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get item by code
exports.getHeaterJugByCode = async (req, res) => {
  try {
    const item = await HeaterJug.findOne({ code: req.params.code });
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new item
exports.addHeaterJugItem = async (req, res) => {
  const newItem = new HeaterJug({
    name: req.body.name,
    code: req.body.code,
    quantity: req.body.quantity,
    costCode: req.body.costCode,
    costPrice: req.body.costPrice,
    taggedPrice: req.body.taggedPrice,
    sellingPrice: req.body.sellingPrice
  });

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Decrease item quantity
exports.decreaseHeaterJugQuantity = async (req, res) => {
  try {
    const item = await HeaterJug.findOne({ code: req.params.code });
    if (!item) return res.status(404).json({ message: 'Item not found' });
    if (item.quantity > 0) {
      item.quantity -= 1;
      await item.save();
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
