/*******************************************/
/*User Actions for all user related
dispatch actions*/
/******************************************/

import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";
import Navigation from "./navigation";

import moment from "moment";

const actionTypes = {
  MODIFY_ORDER_DETAILS: "MODIFY_ORDER_DETAILS",
  SET_ORDER_DETAILS: "SET_ORDER_DETAILS",
  GET_BITCOIN_DATA: "GET_BITCOIN_DATA",
  PROCESS_ORDER: "PROCESS_ORDER",
  SET_CURRENCY: "SET_CURRENCY"
};

const getActions = uri => {
  const objects = {
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
          _orderDetails["billing"] = _orderDetails["shipping"];
          _orderDetails[_requestUpdateOfGroup.group]["updateRequested"] = true;
        } else
          _orderDetails[_requestUpdateOfGroup.group]["updateRequested"] = true;
      }

      if (_group != null) {
        if (_orderDetails[_group] == null) _orderDetails[_group] = {};
        _orderDetails[_group][_key] =
          _tag == null ? _value : { value: _value, tag: _tag };
        _orderDetails[_group].updatedAt = new Date();
      } else _orderDetails[_key] = { value: _value, tag: _tag };

      return { type: actionTypes.MODIFY_ORDER_DETAILS, input: _orderDetails };
    },
    setOrderDetails: input => {
      return {
        type: actionTypes.SET_ORDER_DETAILS,
        input: input.orderDetails
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
    setCurrency: input => {
      return {
        type: actionTypes.SET_CURRENCY,
        input: input.currency
      };
    },
    processOrder: input => {
      return async dispatch => {
        dispatch({
          type: actionTypes.PROCESS_ORDER
        });
        let _orderDetails = { ...input.orderDetails };
        let orderPost = {
          Website_From: "cropkingseeds.com",
          CardHolderIp: _orderDetails.CardHolderIp,
          Order_Date: moment().format("YY-MM-DD HH:mm:ss"),
          Order_ID: 10000000
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
        delete _orderDetails.CardHolderIp;
        for (let key of Object.keys(_orderDetails)) {
          if (key == "undefined") continue;
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
            if (obj.value == null) continue;
            if (obj.tag.includes(" ")) {
              let _obj = obj.value.split(" ");
              for (let item of obj.tag.split(" ")) {
                orderPost[prefix + item] = _obj.shift();
              }
            } else {
              let suffix = prefix == "Ship" && obj.tag == "Address" ? "1" : "";
              let _key = obj.tag + suffix;
              if (prefix == "Bill" && _key == "Postal_Zip_Code")
                _key = "PostalZipCode";
              orderPost[prefix + _key] = obj.value;
            }
            // console.log({ [obj.tag]: obj.value });
          }
        }
        console.log(orderPost);
        return Promise("Test");
        // const link = new HttpLink({ uri, fetch: fetch });
        // const operation = { query: query.getBitcoinData, variables: { ...input } };

        // await makePromise(execute(link, operation))
        //   .then(data => {
        //     let _rate = data.data.getBitcoinData;
        //     dispatch({
        //       type: actionTypes.GET_BITCOIN_DATA,
        //       input: {
        //         currency: input.currency,
        //         value: input.value,
        //         rate: _rate
        //       }
        //     });
        //   })
        //   .catch(error => console.log(error));
      };
    }
  };

  return { ...objects };
};
const query = {
  getBitcoinData: gql`
    query($value: String, $currency: String) {
      getBitcoinData(input: { value: $value, currency: $currency })
    }
  `
};

const mutation = {};

let getCardType = number => {
  let ccType;
  let re = new RegExp("^4");
  if (number.match(re) != null) {
    ccType = "Visa";
  } else {
    ccType = "Mastercard";
  }
  return ccType;
};

const toUrlEncoded = obj =>
  Object.keys(obj)
    .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]))
    .join("&");

export default uri => {
  const actions = getActions(uri);
  return {
    // TYPES
    ...actionTypes,
    // ACTIONS
    ...actions
  };
};
