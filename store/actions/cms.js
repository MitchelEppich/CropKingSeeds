import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

const actionTypes = {
  TOGGLE_NEW_ARTICLE: "TOGGLE_NEW_ARTICLE",
  APPEND_PAGE: "APPEND_PAGE",
  REMOVE_PAGE: "REMOVE_PAGE",
  NEXT_PAGE: "NEXT_PAGE",
  BACK_PAGE: "BACK_PAGE"
};

const getActions = uri => {
  const objects = {
    toggleNewArticle: () => {
      return { type: actionTypes.TOGGLE_NEW_ARTICLE };
    },
    appendPage: option => {
      return { type: actionTypes.APPEND_PAGE, option: option };
    },
    removePage: option => {
      return { type: actionTypes.REMOVE_PAGE, option: option };
    },
    nextPage: () => {
      return { type: actionTypes.NEXT_PAGE };
    },
    backPage: () => {
      return { type: actionTypes.BACK_PAGE };
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
