import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  items: {
    // AFM10: {
    //   product: {
    //     country: "Spain and Netherlands",
    //     description: "This mixed pack of autoflowering feminized seeds is perfect for the indecisive grower. Not sure what autoflowering strain is right for you? Why not try them all? We’ve included all of our nine autoflowering strains all in one convenient mixed pack of 10 or 25 seeds. Autoflowers are great for novice growers because they are low maintenance and quick to harvest. Now you can try them all, indoor or out. The height of the plants will vary from Dwarf 18 inches to around 3ft or slightly taller. These strains all finish around the same time 7-8 weeks, so it’s great to grow the mix together or a few at a time. The levels of THC and CBD will cover the spectrum, from low to moderate to high. The resultant effects will vary but is mostly mellow indica. It’s the perfect opportunity for you to try all of Crop King Seeds autoflowering feminized strains in one order. We hope you enjoy watching your garden grow.",
    //     difficulty: "Easy",
    //     effect: [],
    //     env: "Indoors or Outdoors",
    //     flowerTime: "9 Weeks Max",
    //     genetic: "Mix",
    //     name: "Autoflower Cannabis Seeds Mix",
    //     og: [],
    //     packageImg: "../static/img/cks-package.png",
    //     pcbd: "0.1%-0.9%",
    //     pcbn: "0.3%-4.2%",
    //     price: [-1, 100, 200],
    //     pthc: "10.85%-24%",
    //     sotiId: "AFM",
    //     strainImg: "../static/img/cannabis-plant.png",
    //     type: "Indica",
    //     yield: (2)["100g Indoors", "250g Outdoors"],
    //     _id: "5c2675cf16232255bc1399a6"
    //   },
    //   quantity: 1
    // }
  },
  price: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_CART:
      return updateObject(state, { items: {} });
    case actionTypes.MODIFY_CART:
      return updateObject(state, { items: action.items, price: action.price });
    default:
      return state;
  }
};
