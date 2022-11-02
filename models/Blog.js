const mongoose = require('mongoose')
const Schema = mongoose.Schema

//set up blog schema
const blogSchema = new Schema({
  title: String,
  body: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Blog', blogSchema)
