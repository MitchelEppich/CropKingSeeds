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

import Cart from "./cart";

const uri = "http://localhost:3000/graphql";

const imports = {
  ...Cart(uri)
};

const actionTypes = {
  SET_VISIBLE_SCREEN: "SET_VISIBLE_SCREEN",
  SET_CHECKOUT_SCREEN: "SET_CHECKOUT_SCREEN",
  SET_HOVER_INDEX: "SET_HOVER_INDEX",
  SET_GENE_HOVER_INDEX: "SET_GENE_HOVER_INDEX",
  NEXT_BANNER_SLIDE: "NEXT_BANNER_SLIDE",
  SET_STRAINS: "SET_STRAINS",
  SET_CONTEXT: "SET_CONTEXT"
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
    };
  },
  setGeneHoverIndex: index => {
    return {
      type: actionTypes.SET_GENE_HOVER_INDEX,
      index: index
    };
  },
  nextBannerSlide: () => {
    return {
      type: actionTypes.NEXT_BANNER_SLIDE
    };
  },
  getStrains: () => {
    return async dispatch => {
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = { query: query.allStrains };

      await makePromise(execute(link, operation))
        .then(data => {
            Promise.resolve(
              dispatch(actions.setStrains(data.data.allStrains))
            );
        })
        .catch(error => console.log(error));
    };
  },
  setStrains: strains => {
    return {
      type: actionTypes.SET_STRAINS,
      strains: strains
    };
  },
};

const query = {
  allStrains: gql` 
    query {
      allStrains {
        name
        price
        strainImg
        packageImg
        description
        effect
        genetic
        yield
        flowerTime
        difficulty
        type
        og
        pthc
        pcbd
        pcbn
        country
        sotiId
      }
  }`
};

const mutation = {};

export default {
  // TYPES
  ...actionTypes,
  // IMPORTS
  ...imports,
  // ACTIONS
  ...actions
};
