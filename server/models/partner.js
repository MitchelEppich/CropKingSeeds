const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PartnerSchema = Schema({
  imgUrl: String,
  name: String,
  tag: String,
  url: String
});

module.exports = PartnerSchema;
