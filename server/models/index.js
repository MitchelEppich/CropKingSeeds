const mongoose = require("mongoose");

const StrainSchema = require("./strain");
const OrderSchema = require("./order");
const EmailSchema = require("./email");
const NewsSchema = require("./news");
const BlockedIpSchema = require("./blockedIp");
const BlockedZipSchema = require("./blockedZip");
const BannersSchema = require("./banners");

const Strain = mongoose.model("Strain", StrainSchema);
const Order = mongoose.model("Order", OrderSchema);
const Email = mongoose.model("Email", EmailSchema);
const News = mongoose.model("News", NewsSchema);
const BlockedIp = mongoose.model("BlockedIp", BlockedIpSchema);
const BlockedZip = mongoose.model("BlockedZip", BlockedZipSchema);
const Banners = mongoose.model("Banners", BannersSchema);

exports.Strain = Strain;
exports.Order = Order;
exports.Email = Email;
exports.News = News;
exports.BlockedIp = BlockedIp;
exports.BlockedZip = BlockedZip;
exports.Banners = Banners;
