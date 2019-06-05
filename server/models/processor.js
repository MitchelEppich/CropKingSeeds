const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProcessorSchema = Schema({
  name: String,
  active: Boolean
});

module.exports = ProcessorSchema;
