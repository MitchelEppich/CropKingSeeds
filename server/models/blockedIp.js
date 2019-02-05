const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlockedIpSchema = Schema({
  value: String
});

module.exports = BlockedIpSchema;
