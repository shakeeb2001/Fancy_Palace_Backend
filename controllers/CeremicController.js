const Ceremic = require('../models/Ceremic');

// Get all items
exports.getCeremicItems = async (req, res) => {
  try {
    const items = await Ceremic.find();
    res.json(items);
  } catch (error) {
    console.error('Error fetching items:', error.message);
    res.status(500).json({ message: error.message });
  }
};

// Get item by code
exports.getCeremicItemByCode = async (req, res) => {
  try {
    const item = await Ceremic.findOne({ code: req.params.code });
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (error) {
    console.error('Error fetching item by code:', error.message);
    res.status(500).json({ message: error.message });
  }
};

// Add new item
exports.addCeremicItem = async (req, res) => {
  const newItem = new Ceremic({
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
    console.error('Error adding item:', error.message);
    res.status(400).json({ message: error.message });
  }
};

// Decrease item quantity
exports.decreaseCeremicItemQuantity = async (req, res) => {
  try {
    const item = await Ceremic.findOne({ code: req.params.code });
    if (!item) return res.status(404).json({ message: 'Item not found' });

    if (item.quantity > 0) {
      item.quantity -= 1;
      await item.save();
    }
    res.json(item);
  } catch (error) {
    console.error('Error decreasing item quantity:', error.message);
    res.status(500).json({ message: error.message });
  }
};

// Delete item by code
exports.deleteCeremicItem = async (req, res) => {
  try {
    const item = await Ceremic.findOneAndDelete({ code: req.params.code });
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error('Error deleting item:', error.message);
    res.status(500).json({ message: error.message });
  }
};

// Update item by code
exports.updateCeremicItem = async (req, res) => {
  try {
    const updatedItem = await Ceremic.findOneAndUpdate(
      { code: req.params.code },
      req.body,
      { new: true }
    );
    if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
    res.json(updatedItem);
  } catch (error) {
    console.error('Error updating item:', error.message);
    res.status(500).json({ message: error.message });
  }
};
