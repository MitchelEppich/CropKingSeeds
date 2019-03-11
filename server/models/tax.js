const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TaxSchema = Schema({
  gst: Number,
  qst: Number,
  rst: Number,
  pst: Number,
  hst: Number,
  type: String,
  ageLegal: Number,
  state: String
});

module.exports = TaxSchema;
