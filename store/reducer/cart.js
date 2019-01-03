import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  items: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_CART:
      return updateObject(state, { items: {} });
    case actionTypes.MODIFY_CART:
      return updateObject(state, { items: action.input });
    default:
      return state;
  }
};
