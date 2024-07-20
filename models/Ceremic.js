const mongoose = require('mongoose');

const ceremicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  quantity: { type: Number, required: true },
  costCode: { type: String, required: true },
  costPrice: { type: Number, required: true },
  taggedPrice: { type: Number, required: true },
  sellingPrice: { type: Number, required: true }
});

const Ceremic = mongoose.model('Ceremic', ceremicSchema);

module.exports = Ceremic;
