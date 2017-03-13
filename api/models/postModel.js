const mongoose = require('mongoose')

let schema = new mongoose.Schema({
  category: {type: mongoose.Schema.Types.ObjectId, ref:'Category', required: true},
  title: {type: String, required: true},
  body: {type: String, required: true},
  date: {type: Date, required: true},
  tags: [String]
})

module.exports = mongoose.model('Post', schema)
