const Ricecooker = require('../models/Ricecoocker');

// Get all items
exports.getRicecookerItems = async (req, res) => {
  try {
    const Ricecooker = await Ricecooker.find();
    res.json(Ricecooker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get item by code
exports.getRicecookerItemByCode = async (req, res) => {
  try {
    const Ricecooker = await Ricecooker.findOne({ code: req.params.code });
    if (!Ricecooker) return res.status(404).json({ message: 'Item not found' });
    res.json(Ricecooker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addRicecookerItem = async (req, res) => {
  const newItem = new Ricecooker({
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
exports.decreaseRicecookerQuantity = async (req, res) => {
  try {
    const item = await Ricecooker.findOne({ code: req.params.code });
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
