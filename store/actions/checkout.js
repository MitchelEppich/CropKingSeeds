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
  MODIFY_ORDER_DETAILS: "MODIFY_ORDER_DETAILS"
};

const getActions = uri => {
  const objects = {
    modifyOrderDetails: input => {
      let _orderDetails = input.orderDetails;
      let _group = input.group;
      let _key = input.key;
      let _value = input.value;
      let _tag = input.tag;

      if (_group != null) {
        if (_orderDetails[_group] == null) _orderDetails[_group] = {};
        _orderDetails[_group][_key] = _value;
      } else _orderDetails[_key] = { value: _value, tag: _tag };

      console.log(_orderDetails);

      return {
        type: actionTypes.MODIFY_ORDER_DETAILS,
        input: _orderDetails
      };
    }
  };

  return { ...objects };
};
const query = {};

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
