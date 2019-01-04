/*******************************************/
/*User Actions for all user related
dispatch actions*/
/******************************************/

import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

const actionTypes = {
  QUICK_ADD_TO_CART_QTY: "QUICK_ADD_TO_CART_QTY",
  EXPAND_PRODUCT: "EXPAND_PRODUCT",
  TOGGLE_FILTER: "TOGGLE_FILTER",
  CLEAR_FILTERS: "CLEAR_FILTERS"
};

const getActions = uri => {
  const objects = {
    toggleFilter: input => {
      let _filter = { ...input.filter };
      delete input.filter;
      // Assuming only one filter at a time
      let _key = Object.keys(input)[0];
      let shouldRemove = (() => {
        if (_filter[_key] == input[_key]) {
          return true;
        }
      })();
      if (shouldRemove) {
        delete _filter[_key];
      } else {
        _filter = {
          ..._filter,
          ...input
        };
      }
      return {
        type: actionTypes.TOGGLE_FILTER,
        input: _filter
      };
    },
    clearFilters: () => {
      return {
        type: actionTypes.CLEAR_FILTERS
      };
    },
    quickAddToCartQty: input => {
      return {
        type: actionTypes.QUICK_ADD_TO_CART_QTY,
        input: input
      };
    },
    expandProduct: id => {
      return {
        type: actionTypes.EXPAND_PRODUCT,
        id: id
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
