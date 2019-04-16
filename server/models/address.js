const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AddressSchema = Schema({
  value: String
});

module.exports = AddressSchema;
