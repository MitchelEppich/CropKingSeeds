const mongoose = require("mongoose");

const StrainSchema = require("./strain");
const OrderSchema = require("./order");
const EmailSchema = require("./email");
const NewsSchema = require("./news");
const BlockedIpSchema = require("./blockedIp");
const BlockedZipSchema = require("./blockedZip");
const BannersSchema = require("./banners");
const TaxSchema = require("./tax");
const DailyMessageSchema = require("./dailyMessage");
const AddressSchema = require("./address");
const PartnerSchema = require("./partner");

const Strain = mongoose.model("Strain", StrainSchema);
const Order = mongoose.model("Order", OrderSchema);
const Email = mongoose.model("Email", EmailSchema);
const News = mongoose.model("News", NewsSchema);
const BlockedIp = mongoose.model("BlockedIp", BlockedIpSchema);
const BlockedZip = mongoose.model("BlockedZip", BlockedZipSchema);
const Banners = mongoose.model("Banners", BannersSchema);
const Tax = mongoose.model("Tax", TaxSchema);
const DailyMessage = mongoose.model("DailyMessage", DailyMessageSchema);
const Address = mongoose.model("Address", AddressSchema);
const Partner = mongoose.model("Partner", PartnerSchema);

exports.Strain = Strain;
exports.Order = Order;
exports.Email = Email;
exports.News = News;
exports.BlockedIp = BlockedIp;
exports.BlockedZip = BlockedZip;
exports.Banners = Banners;
exports.Tax = Tax;
exports.DailyMessage = DailyMessage;
exports.Address = Address;
exports.Partner = Partner;
