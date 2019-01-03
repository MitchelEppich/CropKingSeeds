import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  orderDetails: {},
  bitcoinData: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MODIFY_ORDER_DETAILS:
      return updateObject(state, { orderDetails: action.input });
    case actionTypes.SET_ORDER_DETAILS:
      return updateObject(state, { orderDetails: action.input });
    case actionTypes.GET_BITCOIN_DATA:
      return updateObject(state, { bitcoinData: action.input });
    default:
      return state;
  }
};
