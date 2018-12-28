import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  cart: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_CART:
      return updateObject(state, { cart: {} });
    case actionTypes.MODIFY_CART:
      return updateObject(state, { cart: action.input });
    default:
      return state;
  }
};
