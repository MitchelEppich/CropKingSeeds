/*******************************************/
/*Index Actions for all miscellaneous related
dispatch actions. All other actiontypes are
imported into this file, to then be exported
for the reducers and corresponding pages.*/
/******************************************/

import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

const uri = "http://localhost:3000/graphql";

const imports = {};

const actionTypes = {
  SET_VISIBLE_SCREEN: "SET_VISIBLE_SCREEN",
  SET_CHECKOUT_SCREEN: "SET_CHECKOUT_SCREEN",
  SET_HOVER_INDEX: "SET_HOVER_INDEX",
  SET_GENE_HOVER_INDEX: "SET_GENE_HOVER_INDEX",
  SET_CONTEXT: "SET_CONTEXT",
};

const actions = {
  setVisibleScreen: input => {
    return {
      type: actionTypes.SET_VISIBLE_SCREEN,
      input: input
    };
  },
  setCheckoutScreen: input => {
    return {
      type: actionTypes.SET_CHECKOUT_SCREEN,
      input: input
    };
  },
  setContext: input => {
    return { type: actionTypes.SET_CONTEXT, input: input };
  },
  setHoverIndex: (index) => {
    return {
      type: actionTypes.SET_HOVER_INDEX,
      index: index
    }
  },
  setGeneHoverIndex: index => {
    return {
      type: actionTypes.SET_GENE_HOVER_INDEX,
      index: index
    }
  }
};

const query = {};

const mutation = {};

export default {
  // TYPES
  ...actionTypes,
  // IMPORTS
  ...imports,
  // ACTIONS
  ...actions
};
