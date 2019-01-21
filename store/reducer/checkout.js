import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  orderDetails: {},
  bitcoinData: {},
  orderOutput: {},
  availableCurrency: {
    usd: { convert: 1, symbol: "$" },
    cad: { convert: 1.32714, symbol: "$" }
    // eur: { convert: 0.872076, symbol: "€" }
    // aud: { convert: 1.38933, symbol: "$" }
  },
  shippingMethods: [],
  viewCurrency: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SHIPPING_METHODS:
      return updateObject(state, { shippingMethods: action.input });
    case actionTypes.MODIFY_ORDER_DETAILS:
      return updateObject(state, { orderDetails: action.input });
    case actionTypes.SET_ORDER_DETAILS:
      return updateObject(state, { orderDetails: action.input });
    case actionTypes.GET_BITCOIN_DATA:
      return updateObject(state, { bitcoinData: action.input });
    case actionTypes.PROCESS_ORDER:
      return updateObject(state, { orderOutput: action.input });
    case actionTypes.SET_CURRENCY:
      return updateObject(state, { viewCurrency: action.input });
    default:
      return state;
  }
};
