import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
    currentArticle: {
        name: "articleSample"
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
