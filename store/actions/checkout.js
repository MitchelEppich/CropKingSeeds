/*******************************************/
/*User Actions for all user related
dispatch actions*/
/******************************************/

import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";
import Navigation from "./navigation";

const actionTypes = {
  MODIFY_ORDER_DETAILS: "MODIFY_ORDER_DETAILS",
  SET_ORDER_DETAILS: "SET_ORDER_DETAILS",
  GET_BITCOIN_DATA: "GET_BITCOIN_DATA"
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

      console.log(_requestUpdateOfGroup);

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
