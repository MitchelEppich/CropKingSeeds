import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  filters: [
    // { name: "Sleepy" },
    // { name: "Happy" },
    // { name: "Relaxing" },
    // { name: "Medical" },
    // { name: "Fast Flowering" },
    // { name: "High THC:" },
    // { name: "Low THC" },
    // { name: "High CBD" },
    // { name: "Low CBD:" },
    // { name: "Only CBD" },
    // { name: "High Yield" },
    // { name: "Low Yield" },
    { name: "1:1 Ratio" },
    { name: "2:1 Ratio" },
    { name: "20:1 Ratio" }
  ],
  activeFilter: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
