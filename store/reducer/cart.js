import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  cart: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.POST_ORDER:
    //     return updateObject(state, {});
    default:
      return state;
  }
};
