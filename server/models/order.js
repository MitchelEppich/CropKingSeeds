const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = Schema({
  billAddress: String,
  billApartment: String,
  billCity: String,
  billCountry: String,
  billEmail: String,
  billFullName: String,
  billPhone: String,
  billPostalZip: String,
  billState: String,
  shipAddress: String,
  shipApartment: String,
  shipCity: String,
  shipCountry: String,
  shipEmail: String,
  shipFullName: String,
  shipPhone: String,
  shipPostalZip: String,
  shipState: String,
  shipCost: Number,
  shipDetail: String,
  orderId: Number,
  transactionId: String,
  productList: String,
  tax: Number,
  provTax: Number,
  provTaxType: String,
  currency: String,
  coupon: String,
  ccPaidAmount: Number,
  orderAmount: Number,
  total: Number,
  processor: String,
  ccType: String,
  orderDate: String,
  paymentMethod: String,
  paymentStatus: String,
  ip: String,
  archive: String
});

module.exports = OrderSchema;
