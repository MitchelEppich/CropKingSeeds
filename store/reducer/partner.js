import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  partners: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PARTNERS:
      return updateObject(state, { partners: action.input });
    default:
      return state;
  }
};
