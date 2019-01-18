import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

const actionTypes = {
    SET_CURRENT_HISTORYOBJ: "SET_CURRENT_HISTORYOBJ"
};

const getActions = uri => {
    const objects = {
        setCurrentHistoryObj: index => {
            return {
                type: actionTypes.SET_CURRENT_HISTORYOBJ,
                index: index
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
