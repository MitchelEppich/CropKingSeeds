const mongoose = require("mongoose");

const StrainSchema = require("./strain");

const Strain = mongoose.model("Strain", StrainSchema);

exports.Strain = Strain;
