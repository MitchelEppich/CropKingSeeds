const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlockedZipSchema = Schema({
  value: String
});

module.exports = BlockedZipSchema;
