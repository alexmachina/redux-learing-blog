const mongoose = require('mongoose')

let schema = new mongoose.Schema({
  title: {type: String, required: true},
  body: {type: String, required: true},
  author: {type: mongoose.Schema.Types.ObjectId, ref:'User'}
})

module.exports = mongoose.model('Post', schema)
