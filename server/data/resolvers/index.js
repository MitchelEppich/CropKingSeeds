const StrainResolvers = require("./strain");
const OrderResolvers = require("./order");

const nodemailer = require("nodemailer");
const path = require("path");
const Emailer = require("email-templates");
const emailTemplates = require("../emails");

const axios = require("axios");
const request = require("request-promise");

const {
  Email,
  News,
  BlockedIp,
  BlockedZip,
  Banners,
  Tax,
  DailyMessage
} = require("../../models");

const Strain = StrainResolvers.Strain;
const Order = OrderResolvers.Order;

const moment = require("moment");
const { toXML } = require("jstoxml");
const convert = require("xml-js");

const resolvers = {
  Query: {
    ...StrainResolvers.Query,
    ...OrderResolvers.Query,
    news: (_, { input }) => {
      return News.findOne(input);
    },
    allNews: async _ => {
      let news = (await News.find({})).sort((a, b) => {
        return moment(b.date).diff(a.date, "days");
      });
      return news;
    },
    allBlockedIps: async _ => {
      return (await BlockedIp.find({})).map(a => a.value);
    },
    allBlockedZips: async _ => {
      return (await BlockedZip.find({})).map(a => a.value);
    },
    allFeaturedNews: async _ => {
      let news = (await News.find({ featured: true })).sort((a, b) => {
        return moment(a.date).diff(b.date, "days");
      });
      return news;
    },
    getBanners: async _ => {
      return (await Banners.find({}))[0].value;
    },
    getBitcoinData: async (_, { input }) => {
      return await axios
        .get(
          `https://blockchain.info/tobtc?currency=${input.currency}&value=${
            input.value
          }`
        )
        .then(res => {
          return res.data;
        });
    },
    getExchangeRates: async _ => {
      return await axios
        .get("https://www.cksoti.com/checkexchangerate")
        .then(res => {
          res = JSON.parse(
            convert.xml2json(
              res.data
                .toLowerCase()
                .replace("<br/><?xml?>", "</Data>")
                .replace(
                  '<?xml version="1.0" encoding="utf-8"?>',
                  '<?xml version="1.0" encoding="utf-8"?><Data>'
                ),
              { compact: true, spaces: 4 }
            )
          )["Data"];

          let exchange = {};
          for (let rate of Object.keys(res)) {
            if (!rate.includes("rate")) continue;
            let _rate = rate.replace("rate", "");
            let convert = res[rate]._text.split(" ")[0].slice(1);

            if (_rate == "usd") convert = 1;
            if (_rate == "cdn") {
              _rate = "cad";
              // convert = (1 + parseFloat(convert)).toFixed(4);
            }

            exchange[_rate] = { convert, symbol: "$" };
          }

          return JSON.stringify(exchange);
        });
    },
    getTrustPilotRating: async _ => {
      var options = {
        method: "GET",
        uri: "https://ca.trustpilot.com/review/cropkingseeds.com"
      };
      let searchTerm = '"ratingValue":"';
      let page = (await request(options)).replace(/ /g, "").replace(/\n/g, "");
      let indexOf = page.indexOf(searchTerm);
      let value = indexOf + searchTerm.length;
      return parseFloat(page.slice(value).split('"')[0]);
    },
    getTaxes: async _ => {
      let taxes = await Tax.find({});
      let _taxes = {};

      for (let tax of taxes) {
        tax = tax.toObject();
        let state = tax.state;
        delete tax.state;
        delete tax._id;
        _taxes[state] = { ...tax };
      }

      // console.log(_taxes);

      return JSON.stringify(_taxes);
    },
    getDailyMessage: async _ => {
      let temp = await DailyMessage.find({});
      if (temp.length != 0) return temp[0].message;
      return null;
    }
  },
  Strain,
  Mutation: {
    ...StrainResolvers.Mutation,
    ...OrderResolvers.Mutation,
    createNewsEntry: async (_, { input }) => {
      let newsEntry = new News({
        ...input
      });

      newsEntry.save();

      return newsEntry;
    },
    subscribeToNewsletter: async (_, { input }) => {
      let email = new Email({
        ...input
      });

      email.save();

      return input.email + " has been subscribed to the newsletter!";
    },
    sendEmail: async (_, { input }) => {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "growreel.noreply@gmail.com",
          pass: "etydthavvvnkdqxf"
        }
      });
      let mailOptions;
      switch (input.type) {
        case "contact":
          mailOptions = emailTemplates.contact({
            ...input
          });
          var options = {
            method: "POST",
            uri: "https://www.google.com/recaptcha/api/siteverify",
            formData: {
              secret: "6LdVgJIUAAAAAAinDAgg0p2N2v3KuIIK7wDlpMhh",
              response: input.response
            },
            headers: {
              "content-type": "application/x-www-form-urlencoded"
            }
          };
          request(options)
            .then(function(parsedBody) {
              // POST succeeded...
              transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  // Do nothing
                }
              });
            })
            .catch(function(err) {
              // POST failed...
              console.log(err);
            });
          break;
        case "confirmation":
          const email = new Emailer({
            message: {
              from: "info@cropkingseeds.com"
            },
            // uncomment below to send emails in development/test env:
            // send: true,
            transport: transporter,
            webResources: {
              //
              // this is the relative directory to your CSS/image assets
              // and its default path is `build/`:
              //
              // e.g. if you have the following in the `<head`> of your template:
              // `<link rel="stylesheet" href="style.css" data-inline="data-inline">`
              // then this assumes that the file `build/style.css` exists
              //
              // relativeTo: path.resolve("build")
              //
              // but you might want to change it to something like:
              relativeTo: path.join(__dirname, "../emails", "mars")
              // (so that you can re-use CSS/images that are used in your web-app)
              //
            }
          });
          email
            .send({
              template: path.join(__dirname, "../emails", "mars"),
              message: {
                to: "adamsmithvci@gmail.com"
              },
              locals: {
                ...input
              }
            })
            .then(console.log)
            .catch(console.error);
          // mailOptions = emailTemplates.confirmation({
          // });
          // transporter.sendMail(mailOptions, (error, info) => {
          //   if (error) {
          //     // Do nothing
          //   }
          // });
          break;
      }
    },
    processPayment: async (_, { input }) => {
      let { pivotal, bambora } = await getProcessorUsage();
      let _amount = parseFloat(input.amount);
      let response;

      if (
        input.country.toLowerCase() == "canada" &&
        (bambora.limit == -1 || bambora.available - _amount > 0)
      )
        response = await processBambora(input);
      else if (pivotal.limit == -1 || pivotal.available - _amount > 0)
        response = await processPivotal(input);

      return response;
    }
  }
};

let processBambora = async input => {
  let content = {
    merchant_id: "225812615",
    order_number: "100000000",
    amount: parseFloat(input.amount),
    payment_method: "card",
    card: {
      name: input.cardHolderName,
      number: input.cardNumber,
      expiry_month: input.cardExpiry.slice(0, 2),
      expiry_year: input.cardExpiry.slice(2),
      cvd: input.cvv
    }
  };

  let beanstream = require("beanstream-node")(
    "225812615",
    "32f630b674F24A73941Ee23b9237874A"
  );

  let res = await beanstream.payments.makePayment(content).catch(error => {
    return error;
  });

  return {
    transactionId: res.reference,
    status: res.message,
    approvalCode: res.code,
    response: res.status,
    processor: "Bambora FD",
    descriptor: "Vancoast Seeds"
  };
};

let processPivotal = async input => {
  let ORDERID = input.orderId;
  let TERMINALID = "7366001";
  let AMOUNT = input.amount;
  let DATETIME = moment().format("DD-MM-YYYY:HH:mm:ss:000");
  let CARDNUMBER = input.cardNumber;
  let CARDTYPE = input.cardType;
  let CARDEXPIRY = input.cardExpiry;
  let CARDHOLDERNAME = input.cardHolderName;
  let CVV = input.cvv;
  let HASH = encodeMD5(TERMINALID + ORDERID + AMOUNT + DATETIME + "54775477");
  let CURRENCY = "CAD";
  let TERMINALTYPE = 2;
  let TRANSACTIONTYPE = 7;

  // Build content
  let content = {
    PAYMENT: {
      ORDERID,
      TERMINALID,
      AMOUNT,
      DATETIME,
      CARDNUMBER,
      CARDTYPE,
      CARDEXPIRY,
      CARDHOLDERNAME,
      HASH,
      CURRENCY,
      TERMINALTYPE,
      TRANSACTIONTYPE,
      CVV
    }
  };

  let $res = await axios({
    method: "post",
    headers: {
      "Content-Type": "text/xml"
    },
    url: "https://payments.globalone.me/merchant/xmlpayment",
    data: toXML(content)
  });

  let res = JSON.parse(
    convert.xml2json($res.data, { compact: true, spaces: 4 })
  )["PAYMENTRESPONSE"];

  return {
    transactionId: res.UNIQUEREF._text,
    status: res.RESPONSECODE._text == "A" ? "APPROVED" : "DECLINED",
    approvalCode: res.APPROVALCODE._text || "",
    response: res.RESPONSETEXT._text,
    processor: "Pivotal 3 VT",
    descriptor: "King Merch"
  };
};

let getProcessorUsage = async () => {
  // Bambora
  let bambora = JSON.parse(
    convert.xml2json(
      (await request({
        method: "GET",
        uri: "https://www.cksoti.com/getprocessorusage/bambora"
      }))
        .toLowerCase()
        .replace("<br/><?xml?>", "</Data>")
        .replace(
          '<?xml version="1.0" encoding="utf-8"?>',
          '<?xml version="1.0" encoding="utf-8"?><Data>'
        ),
      { compact: true, spaces: 4 }
    )
  )["Data"];
  bambora = {
    current: parseFloat(bambora.currentamount._text.replace(/[,$]/g, "")) || -1,
    available:
      parseFloat(bambora.availableamount._text.replace(/[,$]/g, "")) || -1,
    limit:
      parseFloat(bambora.amountlimitperday._text.replace(/[,$]/g, "")) || -1
  };

  // Pivotal
  let pivotal = JSON.parse(
    convert.xml2json(
      (await request({
        method: "GET",
        uri: "https://www.cksoti.com/getprocessorusage/pivotalkingmerch"
      }))
        .toLowerCase()
        .replace("<br/><?xml?>", "</Data>")
        .replace(
          '<?xml version="1.0" encoding="utf-8"?>',
          '<?xml version="1.0" encoding="utf-8"?><Data>'
        ),
      { compact: true, spaces: 4 }
    )
  )["Data"];
  pivotal = {
    current: parseFloat(pivotal.currentamount._text.replace(/[,$]/g, "")) || -1,
    available:
      parseFloat(pivotal.availableamount._text.replace(/[,$]/g, "")) || -1,
    limit:
      parseFloat(pivotal.amountlimitperday._text.replace(/[,$]/g, "")) || -1
  };

  return { pivotal, bambora };
};

let encodeMD5 = function(d) {
  result = M(V(Y(X(d), 8 * d.length)));
  return result.toLowerCase();
};
function M(d) {
  for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++)
    (_ = d.charCodeAt(r)), (f += m.charAt((_ >>> 4) & 15) + m.charAt(15 & _));
  return f;
}
function X(d) {
  for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++) _[m] = 0;
  for (m = 0; m < 8 * d.length; m += 8)
    _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32;
  return _;
}
function V(d) {
  for (var _ = "", m = 0; m < 32 * d.length; m += 8)
    _ += String.fromCharCode((d[m >> 5] >>> m % 32) & 255);
  return _;
}
function Y(d, _) {
  (d[_ >> 5] |= 128 << _ % 32), (d[14 + (((_ + 64) >>> 9) << 4)] = _);
  for (
    var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0;
    n < d.length;
    n += 16
  ) {
    var h = m,
      t = f,
      g = r,
      e = i;
    (f = md5_ii(
      (f = md5_ii(
        (f = md5_ii(
          (f = md5_ii(
            (f = md5_hh(
              (f = md5_hh(
                (f = md5_hh(
                  (f = md5_hh(
                    (f = md5_gg(
                      (f = md5_gg(
                        (f = md5_gg(
                          (f = md5_gg(
                            (f = md5_ff(
                              (f = md5_ff(
                                (f = md5_ff(
                                  (f = md5_ff(
                                    f,
                                    (r = md5_ff(
                                      r,
                                      (i = md5_ff(
                                        i,
                                        (m = md5_ff(
                                          m,
                                          f,
                                          r,
                                          i,
                                          d[n + 0],
                                          7,
                                          -680876936
                                        )),
                                        f,
                                        r,
                                        d[n + 1],
                                        12,
                                        -389564586
                                      )),
                                      m,
                                      f,
                                      d[n + 2],
                                      17,
                                      606105819
                                    )),
                                    i,
                                    m,
                                    d[n + 3],
                                    22,
                                    -1044525330
                                  )),
                                  (r = md5_ff(
                                    r,
                                    (i = md5_ff(
                                      i,
                                      (m = md5_ff(
                                        m,
                                        f,
                                        r,
                                        i,
                                        d[n + 4],
                                        7,
                                        -176418897
                                      )),
                                      f,
                                      r,
                                      d[n + 5],
                                      12,
                                      1200080426
                                    )),
                                    m,
                                    f,
                                    d[n + 6],
                                    17,
                                    -1473231341
                                  )),
                                  i,
                                  m,
                                  d[n + 7],
                                  22,
                                  -45705983
                                )),
                                (r = md5_ff(
                                  r,
                                  (i = md5_ff(
                                    i,
                                    (m = md5_ff(
                                      m,
                                      f,
                                      r,
                                      i,
                                      d[n + 8],
                                      7,
                                      1770035416
                                    )),
                                    f,
                                    r,
                                    d[n + 9],
                                    12,
                                    -1958414417
                                  )),
                                  m,
                                  f,
                                  d[n + 10],
                                  17,
                                  -42063
                                )),
                                i,
                                m,
                                d[n + 11],
                                22,
                                -1990404162
                              )),
                              (r = md5_ff(
                                r,
                                (i = md5_ff(
                                  i,
                                  (m = md5_ff(
                                    m,
                                    f,
                                    r,
                                    i,
                                    d[n + 12],
                                    7,
                                    1804603682
                                  )),
                                  f,
                                  r,
                                  d[n + 13],
                                  12,
                                  -40341101
                                )),
                                m,
                                f,
                                d[n + 14],
                                17,
                                -1502002290
                              )),
                              i,
                              m,
                              d[n + 15],
                              22,
                              1236535329
                            )),
                            (r = md5_gg(
                              r,
                              (i = md5_gg(
                                i,
                                (m = md5_gg(
                                  m,
                                  f,
                                  r,
                                  i,
                                  d[n + 1],
                                  5,
                                  -165796510
                                )),
                                f,
                                r,
                                d[n + 6],
                                9,
                                -1069501632
                              )),
                              m,
                              f,
                              d[n + 11],
                              14,
                              643717713
                            )),
                            i,
                            m,
                            d[n + 0],
                            20,
                            -373897302
                          )),
                          (r = md5_gg(
                            r,
                            (i = md5_gg(
                              i,
                              (m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691)),
                              f,
                              r,
                              d[n + 10],
                              9,
                              38016083
                            )),
                            m,
                            f,
                            d[n + 15],
                            14,
                            -660478335
                          )),
                          i,
                          m,
                          d[n + 4],
                          20,
                          -405537848
                        )),
                        (r = md5_gg(
                          r,
                          (i = md5_gg(
                            i,
                            (m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438)),
                            f,
                            r,
                            d[n + 14],
                            9,
                            -1019803690
                          )),
                          m,
                          f,
                          d[n + 3],
                          14,
                          -187363961
                        )),
                        i,
                        m,
                        d[n + 8],
                        20,
                        1163531501
                      )),
                      (r = md5_gg(
                        r,
                        (i = md5_gg(
                          i,
                          (m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467)),
                          f,
                          r,
                          d[n + 2],
                          9,
                          -51403784
                        )),
                        m,
                        f,
                        d[n + 7],
                        14,
                        1735328473
                      )),
                      i,
                      m,
                      d[n + 12],
                      20,
                      -1926607734
                    )),
                    (r = md5_hh(
                      r,
                      (i = md5_hh(
                        i,
                        (m = md5_hh(m, f, r, i, d[n + 5], 4, -378558)),
                        f,
                        r,
                        d[n + 8],
                        11,
                        -2022574463
                      )),
                      m,
                      f,
                      d[n + 11],
                      16,
                      1839030562
                    )),
                    i,
                    m,
                    d[n + 14],
                    23,
                    -35309556
                  )),
                  (r = md5_hh(
                    r,
                    (i = md5_hh(
                      i,
                      (m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060)),
                      f,
                      r,
                      d[n + 4],
                      11,
                      1272893353
                    )),
                    m,
                    f,
                    d[n + 7],
                    16,
                    -155497632
                  )),
                  i,
                  m,
                  d[n + 10],
                  23,
                  -1094730640
                )),
                (r = md5_hh(
                  r,
                  (i = md5_hh(
                    i,
                    (m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174)),
                    f,
                    r,
                    d[n + 0],
                    11,
                    -358537222
                  )),
                  m,
                  f,
                  d[n + 3],
                  16,
                  -722521979
                )),
                i,
                m,
                d[n + 6],
                23,
                76029189
              )),
              (r = md5_hh(
                r,
                (i = md5_hh(
                  i,
                  (m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487)),
                  f,
                  r,
                  d[n + 12],
                  11,
                  -421815835
                )),
                m,
                f,
                d[n + 15],
                16,
                530742520
              )),
              i,
              m,
              d[n + 2],
              23,
              -995338651
            )),
            (r = md5_ii(
              r,
              (i = md5_ii(
                i,
                (m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844)),
                f,
                r,
                d[n + 7],
                10,
                1126891415
              )),
              m,
              f,
              d[n + 14],
              15,
              -1416354905
            )),
            i,
            m,
            d[n + 5],
            21,
            -57434055
          )),
          (r = md5_ii(
            r,
            (i = md5_ii(
              i,
              (m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571)),
              f,
              r,
              d[n + 3],
              10,
              -1894986606
            )),
            m,
            f,
            d[n + 10],
            15,
            -1051523
          )),
          i,
          m,
          d[n + 1],
          21,
          -2054922799
        )),
        (r = md5_ii(
          r,
          (i = md5_ii(
            i,
            (m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359)),
            f,
            r,
            d[n + 15],
            10,
            -30611744
          )),
          m,
          f,
          d[n + 6],
          15,
          -1560198380
        )),
        i,
        m,
        d[n + 13],
        21,
        1309151649
      )),
      (r = md5_ii(
        r,
        (i = md5_ii(
          i,
          (m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070)),
          f,
          r,
          d[n + 11],
          10,
          -1120210379
        )),
        m,
        f,
        d[n + 2],
        15,
        718787259
      )),
      i,
      m,
      d[n + 9],
      21,
      -343485551
    )),
      (m = safe_add(m, h)),
      (f = safe_add(f, t)),
      (r = safe_add(r, g)),
      (i = safe_add(i, e));
  }
  return Array(m, f, r, i);
}
function md5_cmn(d, _, m, f, r, i) {
  return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m);
}
function md5_ff(d, _, m, f, r, i, n) {
  return md5_cmn((_ & m) | (~_ & f), d, _, r, i, n);
}
function md5_gg(d, _, m, f, r, i, n) {
  return md5_cmn((_ & f) | (m & ~f), d, _, r, i, n);
}
function md5_hh(d, _, m, f, r, i, n) {
  return md5_cmn(_ ^ m ^ f, d, _, r, i, n);
}
function md5_ii(d, _, m, f, r, i, n) {
  return md5_cmn(m ^ (_ | ~f), d, _, r, i, n);
}
function safe_add(d, _) {
  var m = (65535 & d) + (65535 & _);
  return (((d >> 16) + (_ >> 16) + (m >> 16)) << 16) | (65535 & m);
}
function bit_rol(d, _) {
  return (d << _) | (d >>> (32 - _));
}

module.exports = resolvers;
