const mongoose = require('mongoose');

const heaterJugSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  quantity: { type: Number, required: true },
  costCode: { type: String, required: true },
  costPrice: { type: Number, required: true },
  taggedPrice: { type: Number, required: true },
  sellingPrice: { type: Number, required: true }
});

const HeaterJug = mongoose.model('HeaterJug', heaterJugSchema);

module.exports = HeaterJug;
