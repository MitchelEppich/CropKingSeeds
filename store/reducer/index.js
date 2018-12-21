/*******************************************/
/*main reducer with miscellaneous state
 management.
 This reducer imports all other reducers and
  combines them to be exported to the store*/
/******************************************/

import actionTypes from "../actions";
import { combineReducers } from "redux";
import { updateObject } from "../utility";

const initialState = {
  visibleScreen: [] // When [] show main screen
};

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VISIBLE_SCREEN:
      return updateObject(state, {
        visibleScreen: action.input
      });
    default:
      return state;
  }
};

export default indexReducer;
// export default combineReducers({
// });
