const MetalPlastic = require('../models/MetalPlastic');

// Get all items
exports.getMetalPlasticItems = async (req, res) => {
  try {
    const items = await MetalPlastic.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get item by code
exports.getMetalPlasticItemByCode = async (req, res) => {
  try {
    const item = await MetalPlastic.findOne({ code: req.params.code });
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add new item
exports.addMetalPlasticItem = async (req, res) => {
  const newItem = new MetalPlastic({
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
exports.decreaseMetalPlasticQuantity = async (req, res) => {
  try {
    const item = await MetalPlastic.findOne({ code: req.params.code });
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
