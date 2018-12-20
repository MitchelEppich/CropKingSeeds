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

const actionTypes = {};

const actions = {};

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
