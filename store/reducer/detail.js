import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  typeColor: {
    sativa: "red-sativa",
    indica: "blue-indica",
    hybrid: "orange-hybrid"
  },
  geneColor: {
    autoflower: "purple-autoflower",
    feminized: "orange-feminized",
    regular: "green-regular",
    cbd: "green-cbd",
    dwarf: "blue-dwarf",
    mix: "orange-mix"
  },
  rateColor: {
    low: "orange",
    high: "green"
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
