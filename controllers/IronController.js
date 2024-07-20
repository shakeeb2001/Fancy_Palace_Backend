const Iron = require('../models/Iron');

// Get all items
exports.getIronItems = async (req, res) => {
  try {
    const items = await Iron.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get item by code
exports.getIronItemByCode = async (req, res) => {
  try {
    const item = await Iron.findOne({ code: req.params.code });
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new item
exports.addIronItem = async (req, res) => {
  const newItem = new Iron({
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
exports.decreaseIronQuantity = async (req, res) => {
  try {
    const item = await Iron.findOne({ code: req.params.code });
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