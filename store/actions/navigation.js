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
  FOCUS_PRODUCT: "FOCUS_PRODUCT"
};

const getActions = uri => {
  const objects = {
    focusProduct: input => {
      let _product = input.product;

      return {
        type: actionTypes.FOCUS_PRODUCT,
        input: _product
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
