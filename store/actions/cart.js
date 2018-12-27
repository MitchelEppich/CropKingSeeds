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
  CLEAR_CART: "CLEAR_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  ADD_TO_CART: "ADD_TO_CART",
  UPDATE_CART: "UPDATE_CART"
};

const getActions = uri => {
  const objects = {
    clearCart: () => {
      return {
        type: actionTypes.CLEAR_CART
      };
    },
    updateCart: input => {
      let _cart = input.cart;
      let _action = input.action;

      let _productIdentifier = input.productIdentifier;
      let _product = input.product;

      switch (_action) {
        case "REMOVE":
          _cart = _cart.filter(a => {
            if (a.productIdentifier == _productIdentifier) return false;
            return true;
          });
          break;
        case "ADD":
        case "UPDATE":
          _cart[_productIdentifier] = { _product };
          break;
        default:
      }

      return {
        type: actionTypes.UPDATE_CART,
        input: _cart
      };
    }
  };

  return { ...objects };
};
const query = {};

const mutation = {};

export default uri => {
  const actions = getActions(uri);
  return {
    // TYPES
    ...actionTypes,
    // ACTIONS
    ...actions
  };
};
