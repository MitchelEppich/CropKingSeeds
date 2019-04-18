const { Order, Strain } = require("../../models");

const { orderFilters, decompress, compress } = require("./functions");

const StrainResolver = require("./strain");

// const { PubSub, withFilter } = require("graphql-subscriptions");

// const pubsub = new PubSub();

const axios = require("axios");
const moment = require("moment");
const convert = require("xml-js");

const request = require("request-promise");

const resolvers = {
  Query: {
    order: (_, { input }) => {
      return Order.findOne(input);
    },
    isRepeatCustomer: async (_, { input }) => {
      let order = await Order.findOne(input);
      if (order == null) return false;
      return true;
    },
    allOrders: async (_, { filter }) => {
      let query = filter ? { $or: orderFilters(filter) } : {};
      return Order.find(query);
    },
    getRandomWinnerBetweenDates: async (_, { input }) => {
      let _start =
        input.startDate == "today"
          ? moment().format("YYYY-MM-DD")
          : input.startDate;
      let _end =
        input.endDate == "today"
          ? moment().format("YYYY-MM-DD")
          : input.endDate;

      let order = await Order.aggregate([
        {
          $match: {
            orderDate: {
              $gte: moment(_start, "YYYY-MM-DD").format("YY-MM-DD HH:mm:ss"),
              $lt: moment(_end, "YYYY-MM-DD").format("YY-MM-DD HH:mm:ss")
            }
          }
        }
      ]);

      return order[parseInt(Math.round(Math.random() * order.length))];
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

      let company = res.Company._text;

      // Check if code is for CKS
      if (company != "cropkingseeds.com")
        return { error: "Invalid Code Entered" };

      let active = res.Active._text;

      // Check if code is active
      if (!active) return { error: "Coupon has Expired" };

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

      // Check if code is before date
      if (startDate != null && moment().diff(startDate, "days") < 0)
        return {
          error: "Coupon is valid on " + moment(startDate).format("LL")
        };

      // Check if code is within set date
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

      let itemName = res.DiscountItemName._text;
      let itemId = (async () => {
        if (itemName == null) return undefined;

        return (await StrainResolver.Query.allStrains(null, {
          filter: { OR: [{ nameContains: itemName }] }
        }))[0].sotiId;
      })();

      return {
        code: res.PromoCode._text,
        type,
        amount,
        minimumOrder,
        usage,
        itemId,
        itemName
      };
    }
  },
  Order: {},
  Subscription: {},
  Mutation: {
    postToProcessOrder: async (_, { input }) => {
      return request.post(
        {
          url: "https://www.cksoti.com/posttoprocessorder/",
          form: {
            websitename: "cropkingseeds.com",
            ordernumber: `${input.orderId}`
          }
        },
        function(err, httpResponse, body) {
          if (err) {
            return console.error("ERROR:", err);
          }
          return body;
        }
      );
    },
    postToAddNoteToOrder: async (_, { input }) => {
      return request.post(
        {
          url: "https://www.cksoti.com/posttoaddnotesonorder/",
          form: {
            websitename: "cropkingseeds.com",
            ordernumber: input.orderId,
            transactionid: input.transactionId,
            status: input.status
          }
        },
        function(err, httpResponse, body) {
          if (err) {
            return console.error("ERROR:", err);
          }
          return body;
        }
      );
    },
    acquireOrderId: async _ => {
      let order = new Order();
      await order.save();
      let aggr = await Order.find({})
        .sort({ _id: -1 })
        .limit(20);
      let orderId = null;
      let found = false;
      let from = 0;
      for (let entry of aggr) {
        if (found) from++;
        if (entry.orderId != null && entry.orderId != entry._id) {
          orderId = entry.orderId + from;
          order.orderId = orderId;
          order.save();
          break;
        }
        if (entry._id.toString() == order._id.toString()) found = true;
      }

      if (orderId == null) {
        return order._id;
      }

      return orderId;
    },
    createOrder: async (_, { input }) => {
      let order;
      // Check if orderId has already been acquired
      order = (await Order.find({ orderId: input.orderId }))[0];

      // If it exist, remove as it is just a placeholder
      if (order != null) order.remove();

      // Create a new object
      order = new Order({
        ...input
      });

      order.save();
      return order.toObject();
    },
    processOrder: async (_, { input }) => {
      let _input = JSON.parse(input.content);
      let profile = _input.profile;

      let res = (await axios({
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: "https://www.cksoti.com/save-order-customer-details",
        data: toUrlEncoded(_input)
      })).data;

      buildRelation(_input.productlist);

      let orderAmount = _input.Order_Amt;
      let orderId = _input.Order_ID;
      let coupon = _input.Coupon;
      let total = _input.Total;

      let $mo = await getMoProfileSoti(orderId);

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
          orderId,
          transactionId: _input.Transaction_ID,
          productList: _input.productlist,
          tax: _input.tax,
          provTax: _input.prov_tax,
          provTaxType: _input.prov_tax_type,
          currency: _input.Currency,
          coupon,
          ccPaidAmount: _input.credit_paid_amount,
          orderAmount,
          total,
          processor: _input.Payment_Method,
          ccType: _input.Typeofcard,
          orderDate: _input.Order_Date,
          ip: _input.CardHolderIp,
          paymentMethod: _input.Payment_Method,
          paymentStatus: _input.credit_card_remark
        }
      });

      let affiliateUrl;
      if (profile != null) {
        affiliateUrl = `https://affiliates.cropkingseeds.com/sale.php?profile=${profile}&idev_saleamt=${total ||
          ""}&idev_ordernum=${orderId || ""}&coupon_code=${coupon || ""}`;
      }

      return {
        affiliateUrl,
        mo: JSON.stringify($mo)
      };
    }
  }
};

let buildRelation = list => {
  let _products = list.split(",").map(a => {
    return {
      id: a.substring(0, 3),
      quantity: a.substring(3, 5).trim()
    };
  });
  _products.map(async _strain => {
    let strain = await Strain.findOne({ sotiId: _strain.id });
    let _soldQuantity = [...strain.soldQuantity];
    _soldQuantity[["5", "10", "25"].indexOf(_strain.quantity)] += 1;
    strain.soldQuantity = [..._soldQuantity];
    let relation;
    if (strain.relationData.length == 0) relation = "";
    else
      relation = decompress(strain.relationData)
        .trim()
        .split(" ");
    for (let _id of _products.map(a => a.id)) {
      if (_id == _strain.id) continue;
      let index = relation.findIndex(a => {
        return a.includes(_id);
      });
      if (index == -1) relation.push(`${_id}!1`);
      else {
        let _ = relation[index].split("!")[1];
        _ = parseInt(_) + 1;
        relation[index] = `${_id}!${_}`;
      }
    }
    strain.relationData = compress(
      relation
        .sort((a, b) => {
          return parseInt(b.slice(4)) - parseInt(a.slice(4));
        })
        .join(" ")
    );
    strain.save();
  });
};

const getMoProfileSoti = async orderId => {
  var options = {
    method: "POST",
    uri: "https://www.cksoti.com/posttoassignemgreceiver",
    formData: {
      ordernumber: orderId,
      companyname: "cropkingseeds.com"
    },
    headers: {
      "content-type": "multipart/form-data"
    }
  };
  let res = await request(options);

  let $res = JSON.parse(
    convert.xml2json(
      res
        .replace("<?xml?>", "</Data>")
        .replace(
          '<?xml version="1.0" encoding="utf-8"?>',
          '<?xml version="1.0" encoding="utf-8"?><Data>'
        )
        .replace("<ErrorCode>0<ErrorCode>", ""),
      { compact: true, spaces: 4 }
    )
  )["Data"];

  let _wa = $res.Address._text
    .toLowerCase()
    .replace("canada", "canada,")
    .toUpperCase()
    .split(",");

  return {
    name: $res.FullName._text.toUpperCase(),
    phone: $res.PhoneNumber._text,
    address: _wa[0].trim(),
    city: _wa[1].trim(),
    province: _wa[2].trim(),
    country: _wa[3].trim(),
    postal: _wa[4].trim()
  };
};

const toUrlEncoded = obj =>
  Object.keys(obj)
    .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]))
    .join("&");

module.exports = resolvers;
