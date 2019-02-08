const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BannersSchema = Schema({
  value: [String]
});

module.exports = BannersSchema;
