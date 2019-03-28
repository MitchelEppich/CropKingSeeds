const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dailyMessageSchema = Schema({
  message: String
});

module.exports = dailyMessageSchema;
