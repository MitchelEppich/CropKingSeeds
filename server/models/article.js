const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = Schema({
  body: String,
  title: String,
  subtitle: String,
  relatedStrains: [String],
  relatedArticles: [String],
  author: String,
  createdAt: { type: Date, default: new Date() },
  category: String,
  tags: [String]
});

module.exports = ArticleSchema;
