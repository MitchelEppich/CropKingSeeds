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
  error: {},
  freeShippingThreshold: 300,
  ccResponse: null,
  foundProfiles: [],
  profileID: null,
  processing: false,
  idevCookie: null,
  affiliateUrl: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SHIPPING_METHODS:
      return updateObject(state, {
        shippingMethods: action.methods,
        orderDetails: action.orderDetails
      });
    case actionTypes.STORE_ORDER_DETAILS:
      return updateObject(state, {});
    case actionTypes.PURGE_LOCAL_PROFILE:
      return updateObject(state, { profileID: null });
    case actionTypes.CHECK_FOR_LOCAL_PROFILE:
      return updateObject(state, { foundProfiles: action.input });
    case actionTypes.LOAD_LOCAL_PROFILE:
      return updateObject(state, {
        orderDetails: action.input,
        foundProfiles: [],
        profileID: action.id
      });
    case actionTypes.GET_BLOCKED_IPS:
      return updateObject(state, { blockedIps: action.input });
    case actionTypes.GET_BLOCKED_ZIPS:
      return updateObject(state, { noCreditZip: action.input });
    case actionTypes.ACQUIRE_ORDER_ID:
      return updateObject(state, {
        orderDetails: action.input,
        profileID: null
      });
    case actionTypes.SET_ERROR:
      return updateObject(state, { error: action.input });
    case actionTypes.MODIFY_ORDER_DETAILS:
      return updateObject(state, {
        orderDetails: action.input,
        profileID: null
      });
    case actionTypes.PURGE_ORDER_DETAILS:
      return updateObject(state, {
        orderDetails: action.input,
        profileID: null
      });
    case actionTypes.CLEAR_ORDER_DETAILS:
      return updateObject(state, {
        orderDetails: action.input,
        profileID: null
      });
    case actionTypes.APPLY_COUPON:
      return updateObject(state, {
        orderDetails: action.input,
        profileID: null
      });
    case actionTypes.SET_ORDER_DETAILS:
      return updateObject(state, {
        orderDetails: action.input,
        profileID: null
      });
    case actionTypes.RECALL_ORDER_DETAILS:
      return updateObject(state, {
        orderDetails: action.input,
        profileID: null
      });
    case actionTypes.GET_BITCOIN_DATA:
      return updateObject(state, { bitcoinData: action.input });
    case actionTypes.PROCESS_ORDER:
      return updateObject(state, {
        ccResponse: action.ccResponse,
        affiliateUrl: action.url,
        moneyGramName: action.moneyGramName
      });
    case actionTypes.SET_CURRENCY:
      return updateObject(state, { viewCurrency: action.input });
    case actionTypes.GET_EXCHANGE_RATES:
      return updateObject(state, { availableCurrency: action.input });
    case actionTypes.TOGGLE_PROCESSING:
      return updateObject(state, { processing: action.processing });
    case actionTypes.GET_COOKIE:
      return updateObject(state, { idevCookie: action.idevCookie });
    default:
      return state;
  }
};
