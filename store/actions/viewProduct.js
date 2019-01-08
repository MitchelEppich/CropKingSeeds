import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

const actionTypes = {
  SET_CURRENT_IMAGE: "SET_CURRENT_IMAGE",
  TOGGLE_FULL_DESCRIPTION: "TOGGLE_FULL_DESCRIPTION",
  SET_NEW_RATING: "SET_NEW_RATING",
  SET_CURRENT_PRODUCT: "SET_CURRENT_PRODUCT"
};

const getActions = uri => {
  const objects = {
    setCurrentProduct: input => {
      let _product = input.product;
      return {
        type: actionTypes.SET_CURRENT_PRODUCT,
        input: {
          ..._product,
          images: [_product.strainImg, _product.packageImg]
        }
      };
    },
    setCurrentImage: index => {
      return {
        type: actionTypes.SET_CURRENT_IMAGE,
        index: index
      };
    },
    toggleFullDescription: () => {
      return {
        type: actionTypes.TOGGLE_FULL_DESCRIPTION
      };
    },
    setNewRating: index => {
      return { type: actionTypes.SET_NEW_RATING, index: index };
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
