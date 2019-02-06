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
  noCreditZip: [],
  blockedIps: [],
  error: false,
  freeShippingThreshold: 300,
  ccResponse: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SHIPPING_METHODS:
      return updateObject(state, {
        shippingMethods: action.methods,
        orderDetails: action.orderDetails
      });
    case actionTypes.GET_BLOCKED_IPS:
      return updateObject(state, { blockedIps: action.input });
    case actionTypes.GET_BLOCKED_ZIPS:
      return updateObject(state, { noCreditZip: action.input });
    case actionTypes.ACQUIRE_ORDER_ID:
      return updateObject(state, { orderDetails: action.input });
    case actionTypes.SET_ERROR:
      return updateObject(state, { error: action.input });
    case actionTypes.MODIFY_ORDER_DETAILS:
      return updateObject(state, { orderDetails: action.input });
    case actionTypes.PURGE_ORDER_DETAILS:
      return updateObject(state, { orderDetails: action.input });
    case actionTypes.APPLY_COUPON:
      return updateObject(state, { orderDetails: action.input });
    case actionTypes.SET_ORDER_DETAILS:
      return updateObject(state, { orderDetails: action.input });
    case actionTypes.RECALL_ORDER_DETAILS:
      return updateObject(state, { orderDetails: action.input });
    case actionTypes.GET_BITCOIN_DATA:
      return updateObject(state, { bitcoinData: action.input });
    case actionTypes.PROCESS_ORDER:
      return updateObject(state, { ccResponse: action.ccResponse });
    case actionTypes.SET_CURRENCY:
      return updateObject(state, { viewCurrency: action.input });
    case actionTypes.GET_EXCHANGE_RATES:
      return updateObject(state, { availableCurrency: action.input });
    default:
      return state;
  }
};
