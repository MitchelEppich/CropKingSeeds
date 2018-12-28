import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  focusProduct: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FOCUS_PRODUCT:
      return updateObject(state, { focusProduct: action.input });
    default:
      return state;
  }
};
