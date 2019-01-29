import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  activeFilters: {},
  quickAddToCartQty: 0,
  showFilters: true,
  sort: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.QUICK_ADD_TO_CART_QTY:
      return updateObject(state, {
        quickAddToCartQty: action.input
      });
    case actionTypes.TOGGLE_FILTER:
      return updateObject(state, {
        activeFilters: action.input
      });
    case actionTypes.CLEAR_FILTERS:
      return updateObject(state, {
        activeFilters: {}
      });
    case actionTypes.TOGGLE_SHOW_FILTERS:
      return updateObject(state, {
        showFilters: action.bool
      });
    case actionTypes.SET_SORT:
      return updateObject(state, {
        sort: action.input
      });
    default:
      return state;
  }
};
