import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  items: {
    AFR5: {
      product: {
        country: [0],
        description:
          "This classic original landrace strain gets its name from its origins. First discovered high in the mountainous regions of Afghanistan, this euphoric and relaxing Indica strain is perfect for cloning, cross breeding and large volume production.These are regular Afghani cannabis seeds. What 'regular' means is that all of these seeds are a mixture of both male and female. When they are grown, the males have to be separated so that they do not pollinate the females. If they are left together and pollinate, you'll have a bunch of seeds produced with no flowers made. So if your growing marijuana for producing flower to be used, its important to separate the plants once they start growing. An easy way to tell the difference between male and female plants is when the plants start to flower the males will produce pre flowers that are 'ball' shaped and the females will produce pre flowers that are 'pistil' shaped. Above average in THC, this well known classic is a must have for experienced or new growers.",
        difficulty: 2,
        effect: [],
        flowerTime: "9 Weeks",
        genetic: null,
        name: "Afghani Regular Cannabis Seeds",
        og: [],
        packageImg: "../static/img/cks-package.png",
        pcbd: [0.99],
        pcbn: [0.24],
        price: [40, 70, 120],
        pthc: [19.18],
        sotiId: "AFR",
        strainImg: "../static/img/cannabis-plant.png",
        type: 1,
        yield: [500, 300]
      },
      quantity: 1
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
