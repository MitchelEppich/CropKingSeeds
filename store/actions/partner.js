/*******************************************/
/*User Actions for all user related
dispatch actions*/
/******************************************/

import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

const actionTypes = {
  GET_PARTNERS: "GET_PARTNERS"
};

const getActions = uri => {
  const objects = {
    getPartners: () => {
      return dispatch => {
        const link = new HttpLink({ uri, fetch: fetch });
        const operation = {
          query: query.getPartners
        };

        makePromise(execute(link, operation))
          .then(data => {
            let partners = data.data.getPartners;

            dispatch({
              type: actionTypes.GET_PARTNERS,
              input: partners
            });
          })
          .catch(error => console.log(error));
      };
    }
  };

  return { ...objects };
};
const query = {
  getPartners: gql`
    query {
      getPartners {
        name
        tag
        imgUrl
        url
      }
    }
  `
};

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
