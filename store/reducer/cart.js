import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  items: {},
  price: 0,
  potentialQuantity: 1,
  discount: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_CART:
      return updateObject(state, { items: {} });
    case actionTypes.MODIFY_POTENTIAL_QUANTITY:
      return updateObject(state, {
        potentialQuantity: action.input
      });
    case actionTypes.MODIFY_CART:
      return updateObject(state, {
        items: action.items,
        price: action.price,
        discount: action.discount
      });
    default:
      return state;
  }
};
