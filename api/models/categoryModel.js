let mongoose = require('mongoose')

let schema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String},
  image: String
})

module.exports =  mongoose.model('Category', schema)
