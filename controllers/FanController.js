const Fan = require('../models/Fan');

// Get all items
exports.getFanItems = async (req, res) => {
  try {
    const items = await Fan.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get item by code
exports.getFanItemByCode = async (req, res) => {
  try {
    const item = await Fan.findOne({ code: req.params.code });
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add new item
exports.addFanItem = async (req, res) => {
  const newItem = new Fan({
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
exports.decreaseFanItemQuantity = async (req, res) => {
  try {
    const item = await Fan.findOne({ code: req.params.code });
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
