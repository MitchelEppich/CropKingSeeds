const mongoose = require("mongoose");

const StrainSchema = require("./strain");
const OrderSchema = require("./order");

const Strain = mongoose.model("Strain", StrainSchema);
const Order = mongoose.model("Order", OrderSchema);

exports.Strain = Strain;
exports.Order = Order;
