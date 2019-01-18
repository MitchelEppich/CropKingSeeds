const { Order } = require("../../models");

// const { orderFilters } = require("./functions");

// const { PubSub, withFilter } = require("graphql-subscriptions");

// const pubsub = new PubSub();

const axios = require("axios");
const moment = require("moment");

const resolvers = {
  Query: {
    order: (_, { input }) => {
      return Order.findOne(input);
    },
    allOrders: (_, {}) => {
      return Order.find({});
    },
    getNewOrderId: async (_, {}) => {
      return (await Order.find({}))[0].orderId + 1
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
    processOrder: async (_, {input}) => {
      let _input = JSON.parse(input.content)

      let res = (await axios({
        method: "post",
        headers: {
          "Content-Type" : "application/x-www-form-urlencoded"
        },
        url: "https://www.cksoti.com/save-order-customer-details",
        data: toUrlEncoded(_input)
      })).data

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
      })
    }
  }
};

const toUrlEncoded = obj =>
  Object.keys(obj)
    .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]))
    .join("&");

module.exports = resolvers;
