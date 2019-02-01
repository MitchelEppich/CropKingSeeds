import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

const actionTypes = {
    TOGGLE_FAQ_QUESTION: "TOGGLE_FAQ_QUESTION",
    SET_FAQ_SEARCH: "SET_FAQ_SEARCH"
};

const getActions = uri => {
    const objects = {
        toggleFAQQuestion: index => {
            return {
                type: actionTypes.TOGGLE_FAQ_QUESTION,
                index: index
            };
        },
        setFaqSearch: value => {
            return {
                type: actionTypes.SET_FAQ_SEARCH,
                value: value
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
