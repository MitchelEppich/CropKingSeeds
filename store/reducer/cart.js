import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  items: {},
  price: 0,
  potentialQuantity: 1,
  cartPosition: null,
  discount: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_CART:
      return updateObject(state, { items: {} });
    case actionTypes.RECALL_CART:
      return updateObject(state, {
        items: action.items,
        price: action.price,
        discount: action.discount
      });
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
    case actionTypes.PURGE_CART:
      return updateObject(state, {
        items: {},
        price: 0,
        discount: null
      });
    case actionTypes.SET_CART_POSITION:
      return updateObject(state, {
        cartPosition: action.posObj
      });
    default:
      return state;
  }
};
