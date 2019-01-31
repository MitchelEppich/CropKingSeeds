import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  orderDetails: {},
  bitcoinData: {},
  orderOutput: {},
  availableCurrency: {
    usd: { convert: 1, symbol: "$" }
  },
  shippingMethods: [],
  viewCurrency: null,
  noCreditZip: [
    "t9e5s6",
    "h1l4w8",
    "h7b1e5",
    "h7v2y5",
    "m6k1t7",
    "j8p0k9",
    "j1m1m1",
    "j7c4t4",
    "j7e4v6",
    "92173",
    "61759",
    "h8r1m6"
  ],
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SHIPPING_METHODS:
      return updateObject(state, { shippingMethods: action.input });
    case actionTypes.SET_ERROR:
      return updateObject(state, { error: action.input });
    case actionTypes.MODIFY_ORDER_DETAILS:
      return updateObject(state, { orderDetails: action.input });
    case actionTypes.APPLY_COUPON:
      return updateObject(state, { orderDetails: action.input });
    case actionTypes.SET_ORDER_DETAILS:
      return updateObject(state, { orderDetails: action.input });
    case actionTypes.GET_BITCOIN_DATA:
      return updateObject(state, { bitcoinData: action.input });
    case actionTypes.PROCESS_ORDER:
      return updateObject(state, { orderOutput: action.input });
    case actionTypes.SET_CURRENCY:
      return updateObject(state, { viewCurrency: action.input });
    case actionTypes.GET_EXCHANGE_RATES:
      return updateObject(state, { availableCurrency: action.input });
    default:
      return state;
  }
};
