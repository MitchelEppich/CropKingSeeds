import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  items: {
    AFM25: {
      _id: "524j2626l1j61j",
      name: "Auto Fem mix",
      
    }
  }
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
