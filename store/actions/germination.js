/*******************************************/
/*User Actions for all user related
dispatch actions*/
/******************************************/

import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

const actionTypes = {
    CHANGE_STEP: "CHANGE_STEP"
};

const getActions = uri => {
    const objects = {
        changeStep: changeObj => {
            let newStep =
                changeObj._currentStep + changeObj._incrOrDecr >= 0 &&
                changeObj._currentStep + changeObj._incrOrDecr < changeObj._totalSteps
                    ? changeObj._currentStep + changeObj._incrOrDecr
                    : changeObj._currentStep;
            if (changeObj._incrOrDecr === 0) {
                newStep = changeObj._currentStep;
            }
            return {
                type: actionTypes.CHANGE_STEP,
                step: newStep
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
