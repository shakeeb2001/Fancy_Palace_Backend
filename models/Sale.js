const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  totalAmount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Sale', saleSchema);
