const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StrainSchema = Schema({
  name: String,
  price: [Number],
  strainImg: String,
  packageImg: String,
  description: String,
  effect: [Number],
  yield: [Number],
  genetic: Number,
  flowerTime: String,
  difficulty: Number,
  indica: Number,
  sativa: Number,
  ruderalis: Number,
  type: Number, // Sativa, Indica, or Hybrid
  env: String, // Indoor or Outdoor
  og: [String], // Original genetics
  pthc: [Number],
  pcbd: [Number],
  pcbn: [Number],
  country: [Number],
  sotiId: String
});

module.exports = StrainSchema;