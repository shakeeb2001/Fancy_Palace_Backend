const Gascooker = require('../models/Gascooker');

// Get all items
exports.getGascookerItems = async (req, res) => {
  try {
    const items = await Gascooker.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get item by code
exports.getGascookerItemByCode = async (req, res) => {
  try {
    const item = await Gascooker.findOne({ code: req.params.code });
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add new item
exports.addGascookerItem = async (req, res) => {
  const newItem = new Gascooker({
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
exports.decreaseGascookerItemQuantity = async (req, res) => {
  try {
    const item = await Gascooker.findOne({ code: req.params.code });
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

// Delete item by code
exports.deleteGascookerItem = async (req, res) => {
  try {
    const item = await Gascooker.findOneAndDelete({ code: req.params.code });
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update item by code
exports.updateGascookerItem = async (req, res) => {
  try {
    const updatedItem = await Gascooker.findOneAndUpdate(
      { code: req.params.code },
      req.body,
      { new: true }
    );
    if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
