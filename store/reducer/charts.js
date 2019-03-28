import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  chartTag: null,
  isReverse: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CHART_TAG:
      return updateObject(state, { chartTag: action.chartTag });
    case actionTypes.SET_REVERSE_ORDER:
      return updateObject(state, {
        isReverse: !state.isReverse
      });
    default:
      return state;
  }
};
