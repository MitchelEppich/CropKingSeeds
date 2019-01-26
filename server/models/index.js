const mongoose = require("mongoose");

const StrainSchema = require("./strain");
const OrderSchema = require("./order");
const EmailSchema = require("./email");

const Strain = mongoose.model("Strain", StrainSchema);
const Order = mongoose.model("Order", OrderSchema);
const Email = mongoose.model("Email", EmailSchema);

exports.Strain = Strain;
exports.Order = Order;
exports.Email = Email;
