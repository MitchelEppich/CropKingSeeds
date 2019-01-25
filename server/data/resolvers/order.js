const { Order } = require("../../models");

const { orderFilters } = require("./functions");

// const { PubSub, withFilter } = require("graphql-subscriptions");

// const pubsub = new PubSub();

const axios = require("axios");
const moment = require("moment");
const convert = require("xml-js");

const resolvers = {
  Query: {
    order: (_, { input }) => {
      return Order.findOne(input);
    },
    allOrders: (_, { filter }) => {
      let query = filter ? { $or: orderFilters(filter) } : {};
      return Order.find(query);
    },
    getNewOrderId: async (_, {}) => {
      return (await Order.find({}))[0].orderId + 1;
    },
    getCoupon: async (_, input) => {
      // Get coupon details
      let res = (await axios({
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "https://www.cksoti.com/posttocheckpromocode",
        data: toUrlEncoded(input)
      })).data;

      res = JSON.parse(
        convert.xml2json(
          res
            .replace("<br/><?xml?>", "</Data>")
            .replace(
              '<?xml version="1.0" encoding="utf-8"?>',
              '<?xml version="1.0" encoding="utf-8"?><Data>'
            ),
          { compact: true, spaces: 4 }
        )
      )["Data"];

      // Check if code exists
      if (res.NoCode._text == "1") return { error: "Invalid Code Entered" };

      let { startDate, endDate } = (() => {
        let _ = res.DateValidity._text;

        if (_ != null) {
          let _break = _.split(" ");
          return {
            startDate: moment(_break[2], "MMM/DD/YY"),
            endDate: moment(_break[5], "MMM/DD/YY")
          };
        }
        return {};
      })();

      // Check if code is stil active
      if (
        startDate != null &&
        endDate != null &&
        !moment().isBetween(startDate, endDate)
      )
        return { error: "Coupon has Expired" };

      let usageLimit = (() => {
        let _ = res.CouponUsageLimit._text;
        if (_ == null) return -1;
        if (_.includes("usage Only")) return parseInt(_[0]);
        return -1;
      })();

      // Check if user has used code before
      if (usageLimit != -1) {
        let res = await resolvers.Query.allOrders(null, {
          filter: {
            OR: [{ coupon: input.coupon.toLowerCase(), ip: input.ip }]
          }
        });
        if (res.length >= usageLimit)
          return { error: "Coupon Usage Limit Reached of " + usageLimit };
      }

      let minimumOrder = (() => {
        let _ = res.MinimumOrderAmount._text;
        if (_ == null) return -1;
        if (_.includes("$")) return parseInt(_.replace("$", ""));
        return -1;
      })();
      let usage = (() => {
        let _ = res.DiscountFor._text;
        if (_ == null) return "";
        switch (_) {
          case "Only one item":
            return "item";
          case "Grand Total Discount":
            return "all";
          case "Total Item Only":
            return "items";
          default:
            return "";
        }
      })();

      let { type, amount } = (() => {
        let _ = res.PromoType._text;
        let $ = res.PromoCharge._text;
        if (_ == null || $ == null) return {};
        switch (_) {
          case "Percentage":
            return { type: "%", amount: $.replace("%", "") };
          case "Amount":
            return { type: "$", amount: $.replace("$", "") };
          default:
            return {};
        }
      })();

      return {
        code: res.PromoCode._text,
        type,
        amount,
        minimumOrder,
        usage,
        itemName: res.DiscountItemName._text
      };
    }
  },
  Order: {},
  Subscription: {},
  Mutation: {
    createOrder: (_, { input }) => {
      let order = new Order({
        ...input
      });
      console.log(input, order);
      order.save();
      return order.toObject();
    },
    processOrder: async (_, { input }) => {
      let _input = JSON.parse(input.content);

      let res = (await axios({
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "https://www.cksoti.com/save-order-customer-details",
        data: toUrlEncoded(_input)
      })).data;

      resolvers.Mutation.createOrder(null, {
        input: {
          billAddress: _input.BillAddress,
          billApartment: _input.BillAppartment,
          billCity: _input.BillCity,
          billCountry: _input.BillCountry,
          billEmail: _input.BillEmail,
          billFullName: `${_input.BillFirstName} ${_input.BillLastName}`,
          billPhone: _input.BillPhone,
          billPostalZip: _input.BillPostalZipCode,
          billState: _input.BillState,
          shipAddress: _input.ShipAddress1,
          shipApartment: _input.ShipAppartment,
          shipCity: _input.ShipCity,
          shipCountry: _input.ShipCountry,
          shipEmail: _input.ShipEmail,
          shipFullName: `${_input.ShipFirstName} ${_input.ShipLastName}`,
          shipPhone: _input.ShipPhoneNum,
          shipPostalZip: _input.ShipPostal_Zip_Code,
          shipState: _input.ShipState,
          shipCost: _input.Shipping,
          shipDetail: _input.Shipped_Type,
          orderId: _input.Order_ID,
          transactionId: _input.Transaction_ID,
          productList: _input.productlist,
          tax: _input.tax,
          provTax: _input.prov_tax,
          provTaxType: _input.prov_tax_type,
          currency: _input.Currency,
          coupon: _input.Coupon,
          paymentMethod: _input.Payment_Method,
          paymentStatus: _input.credit_card_remark
        }
      });
    }
  }
};

const toUrlEncoded = obj =>
  Object.keys(obj)
    .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]))
    .join("&");

module.exports = resolvers;
