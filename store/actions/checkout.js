/*******************************************/
/*User Actions for all user related
dispatch actions*/
/******************************************/

import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";
import Navigation from "./navigation";

import Cart from "./cart";

import moment from "moment";

const actionTypes = {
  MODIFY_ORDER_DETAILS: "MODIFY_ORDER_DETAILS",
  SET_ORDER_DETAILS: "SET_ORDER_DETAILS",
  GET_BITCOIN_DATA: "GET_BITCOIN_DATA",
  PROCESS_ORDER: "PROCESS_ORDER",
  SET_CURRENCY: "SET_CURRENCY",
  SET_SHIPPING_METHODS: "SET_SHIPPING_METHODS",
  APPLY_COUPON: "APPLY_COUPON",
  SET_ERROR: "SET_ERROR",
  GET_EXCHANGE_RATES: "GET_EXCHANGE_RATES"
};

let shippingMethods = [
  {
    type: "Regular Shipping (No Tracking)",
    tag: "Regular Shipping",
    description: "Approx. 10 to 15 business days depending on your location.",
    price: 10
  },
  {
    type: "Canada Post Express (With Tracking / No Signature Required)",
    tag: "Express Registered with Tracking",
    description: "Approx. 2 to 5 business days depending on your location.",
    price: 30
  },
  {
    type: "Regular Shipping (No Tracking)",
    tag: "Regular Shipping",
    description:
      "Approx. 7 to 14 business days within North America and up to 21 days overseas.",
    price: 10
  },
  {
    type: "Express Registered (With Tracking / Guaranteed Insurance Delivery)",
    tag: "Express Registered with Tracking",
    description:
      "Approx. 7 to 14 business days within North America and up to 21 days overseas.",
    note:
      "This option guarantees Delivery with a Reshipment if your order is redirected.",
    price: 30
  },
  {
    type: "Regular Shipping (No Tracking)",
    tag: "Regular Shipping",
    description: "Approx. 7 to 25 business days depending on your location.",
    price: 20
  },
  {
    type: "Regular Shipping (With Tracking / Stealth Shipping)",
    tag: "Regular Shipping",
    description: "Approx. 7 to 25 business days depending on your location.",
    note:
      "The Country you have selected is flagged for Unreliable Mail services and due to these obstacles your package will be shipped using our stealth shipment method.",
    price: 30
  }
];

const getActions = uri => {
  const objects = {
    setError: input => {
      return { type: actionTypes.SET_ERROR, input: input.value };
    },
    setShippingMethods: input => {
      let _country = input.country;
      let _state = input.state;

      let _cartTotal = input.cartTotal;
      let _freeShippingThreshold = input.freeShippingThreshold;

      let _methods = [];
      switch (_country) {
        case "Canada":
          _methods.push(shippingMethods[0], shippingMethods[1]);
          break;
        case "United States":
          if (["Florida", "Tennessee", "Georgia"].includes(_state)) {
            _methods.push(shippingMethods[3]);
          } else {
            _methods.push(shippingMethods[2], shippingMethods[3]);
          }
          break;
        case "New Zealand":
        case "Australia":
          _methods.push(shippingMethods[4]);
          break;
        default:
          _methods.push(shippingMethods[5]);
      }

      if (_cartTotal >= _freeShippingThreshold) {
        if (_methods.length == 2) _methods = [{ ..._methods[1] }];
        _methods[0].price = 0;
      }

      return { type: actionTypes.SET_SHIPPING_METHODS, input: _methods };
    },
    modifyOrderDetails: input => {
      let _orderDetails = input.orderDetails;
      let _group = input.group;
      let _key = input.key;
      let _value = input.value;
      let _tag = input.tag;
      let _requestUpdateOfGroup = input.requestUpdateOfGroup;

      if (
        _requestUpdateOfGroup != null &&
        _orderDetails[_requestUpdateOfGroup.group] != null &&
        _requestUpdateOfGroup.value
      ) {
        if (_requestUpdateOfGroup.group == "payment" && _group == "shipping") {
          if (
            _orderDetails["billing"] != null &&
            !_orderDetails["billing"].readOnly
          )
            _orderDetails["billing"] = {
              ..._orderDetails["shipping"],
              readOnly: true
            };
          _orderDetails[_requestUpdateOfGroup.group]["updateRequested"] = true;
        } else
          _orderDetails[_requestUpdateOfGroup.group]["updateRequested"] = true;
      }

      if (_group != null) {
        if (_orderDetails[_group] == null) _orderDetails[_group] = {};
        _orderDetails[_group][_key] =
          _tag == null ? _value : { value: _value, tag: _tag };

        if (_key == "country" && _orderDetails[_group].state != null) {
          _orderDetails[_group].state = undefined;
        }
        _orderDetails[_group].updatedAt = new Date();
      } else if (_tag != null)
        _orderDetails[_key] = { value: _value, tag: _tag };
      else _orderDetails[_key] = _value;

      return { type: actionTypes.MODIFY_ORDER_DETAILS, input: _orderDetails };
    },
    setOrderDetails: input => {
      return { type: actionTypes.SET_ORDER_DETAILS, input: input.orderDetails };
    },
    applyCoupon: input => {
      return async dispatch => {
        let _items = { ...input.items };
        let _orderDetails = { ...input.orderDetails };
        delete input.items;
        delete input.orderDetails;

        let _action = input.action;
        delete input.action;

        let _coupon;

        switch (_action) {
          case "APPEND":
            const link = new HttpLink({ uri, fetch: fetch });
            const operation = {
              query: query.getCoupon,
              variables: { ...input }
            };
            _coupon = (await makePromise(execute(link, operation))).data
              .getCoupon;
            _orderDetails.coupon = _coupon;
            break;
          case "REMOVE":
            delete _orderDetails.coupon;
            _coupon = input.coupon;
            break;
        }

        // Send Coupon to Cart for logic
        let CartActions = Cart(uri);
        dispatch(
          CartActions.refreshCart({
            items: _items,
            itemId: _coupon.itemId,
            coupon: _action == "REMOVE" ? null : _coupon
          })
        );

        dispatch({
          type: actionTypes.APPLY_COUPON,
          input: _orderDetails
        });
      };
    },
    getBitcoinData: input => {
      return async dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });
        const operation = {
          query: query.getBitcoinData,
          variables: { ...input }
        };

        await makePromise(execute(link, operation))
          .then(data => {
            let _rate = data.data.getBitcoinData;
            dispatch({
              type: actionTypes.GET_BITCOIN_DATA,
              input: {
                currency: input.currency,
                value: input.value,
                rate: _rate
              }
            });
          })
          .catch(error => console.log(error));
      };
    },
    getExchangeRates: input => {
      return async dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });
        const operation = {
          query: query.getExchangeRates
        };

        await makePromise(execute(link, operation))
          .then(data => {
            let _rates = JSON.parse(data.data.getExchangeRates);
            dispatch({
              type: actionTypes.GET_EXCHANGE_RATES,
              input: _rates
            });
          })
          .catch(error => console.log(error));
      };
    },
    setCurrency: input => {
      return { type: actionTypes.SET_CURRENCY, input: input.currency };
    },
    processOrder: input => {
      return async dispatch => {
        dispatch({ type: actionTypes.PROCESS_ORDER });
        let _orderDetails = { ...input.orderDetails };
        let _paymentMethod = _orderDetails.payment.method.value;

        console.log(buildOrderPost(_orderDetails));

        // Set Order ID
        let orderId = await getNewOrderId(uri);
        _orderDetails.payment.orderId = { value: orderId, tag: "Order_ID" };

        console.log(orderId);

        // Process Payment
        let ccResponse = await (async () => {
          if (_paymentMethod == "Credit Card") {
            let _orderAmount = _orderDetails.payment.cartTotal.value;
            if (_orderAmount <= 300)
              return await processPayment(_orderDetails.payment, uri);
            return { status: "Missing" };
          }
          return null;
        })();

        console.log(ccResponse);

        // Process Order
        let response = await processOrder(_orderDetails, ccResponse, uri);

        console.log(response);
        // if (_paymentMethod == "Credit Card" && _orderAmount <= 300) {
        //   // Get New Order ID
        //   getNewOrderId(uri).then(res => {
        //     _orderDetails.payment.orderId = { value: res, tag: "Order_ID" };
        //     // Process Credit Card
        //     processPayment(_orderDetails.payment, uri).then(res => {
        //       // Process Order
        //       processOrder(_orderDetails, res, uri);
        //     });
        //   });
        // } else {
        //   // Get New Order ID
        //   getNewOrderId(uri).then(res => {
        //     _orderDetails.payment.orderId = { value: res, tag: "Order_ID" };
        //     console.log(res);
        //     // Process Order
        //     processOrder(_orderDetails, res, uri).then(res => {
        //       console.log(res);
        //     });
        //   });
        // }
      };
    }
  };

  return { ...objects };
};
const query = {
  getNewOrderId: gql`
    query {
      getNewOrderId
    }
  `,
  getBitcoinData: gql`
    query($value: String, $currency: String) {
      getBitcoinData(input: { value: $value, currency: $currency })
    }
  `,
  getExchangeRates: gql`
    {
      getExchangeRates
    }
  `,
  getCoupon: gql`
    query($coupon: String) {
      getCoupon(coupon: $coupon) {
        error
        code
        type
        amount
        minimumOrder
        usage
        itemName
        itemId
      }
    }
  `
};

const mutation = {
  processOrder: gql`
    mutation($content: String) {
      processOrder(input: { content: $content }) {
        _id
        billAddress
        billApartment
        billCity
        billCountry
        billEmail
        billFullName
        billPhone
        billPostalZip
        billState
        shipAddress
        shipApartment
        shipCity
        shipCountry
        shipEmail
        shipFullName
        shipPhone
        shipPostalZip
        shipState
        shipCost
        shipDetail
        orderId
        transactionId
        productList
        tax
        provTax
        provTaxType
        currency
        coupon
        paymentMethod
        paymentStatus
      }
    }
  `,
  processPayment: gql`
    mutation(
      $orderId: String
      $amount: String
      $cardNumber: String
      $cardType: String
      $cardExpiry: String
      $cardHolderName: String
      $cvv: String
    ) {
      processPayment(
        input: {
          orderId: $orderId
          amount: $amount
          cardNumber: $cardNumber
          cardType: $cardType
          cardExpiry: $cardExpiry
          cardHolderName: $cardHolderName
          cvv: $cvv
        }
      ) {
        transactionId
        status
        approvalCode
        response
        processor
      }
    }
  `
};

let processOrder = async (orderDetails, res, uri) => {
  return await new Promise(async (resolve, reject) => {
    let _orderPost = {
      ...buildOrderPost(orderDetails)
    };

    if (res != null) {
      _orderPost.credit_card_remark = res.status;
      _orderPost.Descriptor = res.processor;
      _orderPost.Transaction_ID = res.transactionId;
    }

    // if (_orderPost.BillCountry == "Canada") {
    //   let currency = orderDetails.currency["cad"];
    //   // We need to convert to canadian
    //   for (let tag of ["Order_Amt", "Shipping", "Total"]) {
    //     _orderPost[tag] = (_orderPost[tag] * currency.convert).toFixed(2);
    //   }
    // }

    const link = new HttpLink({ uri, fetch: fetch });
    const operation = {
      query: mutation.processOrder,
      variables: { content: JSON.stringify(_orderPost) }
    };

    resolve(
      await makePromise(execute(link, operation))
        .then(async data => {
          return data.data.processOrder;
        })
        .catch(error => console.log(error))
    );
  });
};
let processPayment = async (paymentDetails, uri) => {
  return await new Promise(async (resolve, reject) => {
    let paymentPost = {
      orderId: paymentDetails.orderId.value + "-KMH-1",
      amount: paymentDetails.orderTotal.value.toFixed(2),
      cardNumber: paymentDetails.cardNumber.value,
      cardType: paymentDetails.type.value,
      cardExpiry: `${paymentDetails.ccExpireMonth.value}${
        paymentDetails.ccExpireYear.value
      }`,
      cardHolderName: paymentDetails.cardHolder,
      cvv: paymentDetails.cvv.value
    };

    const link = new HttpLink({ uri, fetch: fetch });
    const operation = {
      query: mutation.processPayment,
      variables: { ...paymentPost }
    };

    resolve(
      await makePromise(execute(link, operation))
        .then(async data => {
          return data.data.processPayment;
        })
        .catch(error => console.log(error))
    );
  });
};
let getNewOrderId = async uri => {
  return await new Promise(async (resolve, reject) => {
    const link = new HttpLink({ uri, fetch: fetch });
    const operation = {
      query: query.getNewOrderId
    };

    resolve(
      await makePromise(execute(link, operation))
        .then(async data => {
          return data.data.getNewOrderId;
        })
        .catch(error => console.log(error))
    );
  });
};

let buildOrderPost = orderDetails => {
  let _orderDetails = orderDetails;
  let orderPost = {
    Website_From: "cropkingseeds.com",
    Order_Date: moment().format("YY-MM-DD HH:mm:ss")
  };
  if (_orderDetails.payment.ccExpireMonth != null) {
    let _month = _orderDetails.payment.ccExpireMonth.value;
    let _year = _orderDetails.payment.ccExpireYear.value;
    _orderDetails.payment.expiryDate = {
      value: `${_year}-${_month}`,
      tag: "Expiry_Date"
    };
    delete _orderDetails.payment.ccExpireMonth;
    delete _orderDetails.payment.ccExpireYear;
  }
  delete _orderDetails.cardHolderIp;
  for (let key of Object.keys(_orderDetails)) {
    if (key == "undefined" || key == "coupon" || key == "currency") continue;
    let prefix = (() => {
      switch (key) {
        case "shipping":
          return "Ship";
        case "billing":
          return "Bill";
        default:
          return "";
      }
    })();

    for (let _key of Object.keys(_orderDetails[key])) {
      if (_key == "undefined") continue;
      let obj = _orderDetails[key][_key];
      if (obj == null || obj.value == null) continue;
      if (obj.tag != null && obj.tag.includes(" ")) {
        let _obj = obj.value.split(" ");
        for (let item of obj.tag.split(" ")) {
          orderPost[prefix + item] = _obj.shift();
        }
      } else {
        let suffix = prefix == "Ship" && obj.tag == "Address" ? "1" : "";
        let _key = obj.tag + suffix;
        if (prefix == "Bill" && _key == "Postal_Zip_Code")
          _key = "PostalZipCode";
        if (prefix == "Bill" && _key == "PhoneNum") _key = "Phone";
        let $key =
          (["Shipped_Type", "Shipping"].includes(_key) ? "" : prefix) + _key;
        let $value = obj.value;
        if (_key == "prov_tax" || _key == "tax")
          $value *=
            _orderDetails.payment.cartTotal.value +
            _orderDetails.payment.shippingFee.value;
        if ($key == "Order_ID") $value = parseInt($value);
        orderPost[$key] = $value;
      }
    }
  }
  return orderPost;
};

export default uri => {
  const actions = getActions(uri);
  return {
    // TYPES
    ...actionTypes,
    // ACTIONS
    ...actions
  };
};
