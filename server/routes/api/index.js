let express = require("express");

let coinpaymentsRoutes = require("./coinpayments");

let router = express.Router();

router.use("/coinpayments", coinpaymentsRoutes);

module.exports = router;
