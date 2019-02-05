const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NewsSchema = Schema({
  imgUrl: String,
  body: String,
  title: String,
  date: String,
  url: String,
  imageUrl: String,
  location: String,
  sponsored: Boolean,
  locationUrl: String,
  category: String,
  featured: Boolean
});

module.exports = NewsSchema;
