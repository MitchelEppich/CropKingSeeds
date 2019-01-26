const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EmailSchema = Schema({
  email: String
});

module.exports = EmailSchema;
