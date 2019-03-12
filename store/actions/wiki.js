import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

const actionTypes = {
  OPEN_MENU_OPTION: "OPEN_MENU_OPTION"
};

const getActions = uri => {
  const objects = {
    openMenuOption: optionsObj => {
      let newOption = optionsObj.newOption;
      let currentOptions = optionsObj.currentOptions;
      currentOptions = currentOptions.includes(newOption)
        ? currentOptions.filter(i => i !== newOption)
        : [...currentOptions, newOption];
      return {
        type: actionTypes.OPEN_MENU_OPTION,
        currentOptions: currentOptions
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
