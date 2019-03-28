import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";
import { statesUS } from "../../static/data/states";

const actionTypes = {
  SET_CHART_TAG: "SET_CHART_TAG",
  SET_REVERSE_ORDER: "SET_REVERSE_ORDER"
};

const getActions = uri => {
  const objects = {
    setChartTag: chartTag => {
      return {
        type: actionTypes.SET_CHART_TAG,
        chartTag: chartTag
      };
    },
    toggleIsReversed: input => {
      return {
        type: actionTypes.SET_REVERSE_ORDER,
        input: input
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
