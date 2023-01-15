const mongoose = require('mongoose');

const favoriteWordSchema = new mongoose.Schema({
  term: {
    type: String,
    required: true
  },
  definitions: {
    type: Array,
    required: true
  },
  difficulty: {
    type: Number,
    required: false
  }
}, { timestamps: true })

module.exports = mongoose.model('favoriteWord', favoriteWordSchema);