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
  visibleScreen: [], // When [] show main screen
  products: [
    {
      _id : "5be22670c766994440c43c29",
      price : [ 
          45, 
          65, 
          95
      ],
      name : "Rock Candy",
      "plantIcon" : "",
      "packageIcon" : "",
      "description" : "This extremely relaxing strain is great after a long day, producing a strong euphoria that slowly slips you into a deep sleep. Great for all growers, this easy-to-grow strain will make your grow room smell of citrus fruit. The buds have a fluffy soft look, with a thick layer of sugary white trichomes.",
      "floweringTime" : "7-9 weeks",
      "effects" : "Happy, euphoric",
      "thc" : "15-19%",
      "type" : "80% Indica / 20% Sativa",
      "difficulty" : "Easy",
      "indOut" : "Indoor/Outdoor",
      "color" : "#8bd5d4",
      "autoflower" : false,
      "sotiCode" : "RCF"
    },
    {
      _id : "5be22670c766994440c43c29",
      price : [ 
          45, 
          65, 
          95
      ],
      name : "Rock Candy",
      "plantIcon" : "",
      "packageIcon" : "",
      "description" : "This extremely relaxing strain is great after a long day, producing a strong euphoria that slowly slips you into a deep sleep. Great for all growers, this easy-to-grow strain will make your grow room smell of citrus fruit. The buds have a fluffy soft look, with a thick layer of sugary white trichomes.",
      "floweringTime" : "7-9 weeks",
      "effects" : "Happy, euphoric",
      "thc" : "15-19%",
      "type" : "80% Indica / 20% Sativa",
      "difficulty" : "Easy",
      "indOut" : "Indoor/Outdoor",
      "color" : "#8bd5d4",
      "autoflower" : false,
      "sotiCode" : "RCF"
    },
    {
      _id : "5be22670c766994440c43c29",
      price : [ 
          45, 
          65, 
          95
      ],
      name : "Rock Candy",
      "plantIcon" : "",
      "packageIcon" : "",
      "description" : "This extremely relaxing strain is great after a long day, producing a strong euphoria that slowly slips you into a deep sleep. Great for all growers, this easy-to-grow strain will make your grow room smell of citrus fruit. The buds have a fluffy soft look, with a thick layer of sugary white trichomes.",
      "floweringTime" : "7-9 weeks",
      "effects" : "Happy, euphoric",
      "thc" : "15-19%",
      "type" : "80% Indica / 20% Sativa",
      "difficulty" : "Easy",
      "indOut" : "Indoor/Outdoor",
      "color" : "#8bd5d4",
      "autoflower" : false,
      "sotiCode" : "RCF"
    },
    {
      _id : "5be22670c766994440c43c29",
      price : [ 
          45, 
          65, 
          95
      ],
      name : "Rock Candy",
      "plantIcon" : "",
      "packageIcon" : "",
      "description" : "This extremely relaxing strain is great after a long day, producing a strong euphoria that slowly slips you into a deep sleep. Great for all growers, this easy-to-grow strain will make your grow room smell of citrus fruit. The buds have a fluffy soft look, with a thick layer of sugary white trichomes.",
      "floweringTime" : "7-9 weeks",
      "effects" : "Happy, euphoric",
      "thc" : "15-19%",
      "type" : "80% Indica / 20% Sativa",
      "difficulty" : "Easy",
      "indOut" : "Indoor/Outdoor",
      "color" : "#8bd5d4",
      "autoflower" : false,
      "sotiCode" : "RCF"
    },
    {
      _id : "5be22670c766994440c43c29",
      price : [ 
          45, 
          65, 
          95
      ],
      name : "Rock Candy",
      "plantIcon" : "",
      "packageIcon" : "",
      "description" : "This extremely relaxing strain is great after a long day, producing a strong euphoria that slowly slips you into a deep sleep. Great for all growers, this easy-to-grow strain will make your grow room smell of citrus fruit. The buds have a fluffy soft look, with a thick layer of sugary white trichomes.",
      "floweringTime" : "7-9 weeks",
      "effects" : "Happy, euphoric",
      "thc" : "15-19%",
      "type" : "80% Indica / 20% Sativa",
      "difficulty" : "Easy",
      "indOut" : "Indoor/Outdoor",
      "color" : "#8bd5d4",
      "autoflower" : false,
      "sotiCode" : "RCF"
    },
    {
      _id : "5be22670c766994440c43c29",
      price : [ 
          45, 
          65, 
          95
      ],
      name : "Rock Candy",
      "plantIcon" : "",
      "packageIcon" : "",
      "description" : "This extremely relaxing strain is great after a long day, producing a strong euphoria that slowly slips you into a deep sleep. Great for all growers, this easy-to-grow strain will make your grow room smell of citrus fruit. The buds have a fluffy soft look, with a thick layer of sugary white trichomes.",
      "floweringTime" : "7-9 weeks",
      "effects" : "Happy, euphoric",
      "thc" : "15-19%",
      "type" : "80% Indica / 20% Sativa",
      "difficulty" : "Easy",
      "indOut" : "Indoor/Outdoor",
      "color" : "#8bd5d4",
      "autoflower" : false,
      "sotiCode" : "RCF"
    },
    {
      _id : "5be22670c766994440c43c29",
      price : [ 
          45, 
          65, 
          95
      ],
      name : "Rock Candy",
      "plantIcon" : "",
      "packageIcon" : "",
      "description" : "This extremely relaxing strain is great after a long day, producing a strong euphoria that slowly slips you into a deep sleep. Great for all growers, this easy-to-grow strain will make your grow room smell of citrus fruit. The buds have a fluffy soft look, with a thick layer of sugary white trichomes.",
      "floweringTime" : "7-9 weeks",
      "effects" : "Happy, euphoric",
      "thc" : "15-19%",
      "type" : "80% Indica / 20% Sativa",
      "difficulty" : "Easy",
      "indOut" : "Indoor/Outdoor",
      "color" : "#8bd5d4",
      "autoflower" : false,
      "sotiCode" : "RCF"
    },
    {
      _id : "5be22670c766994440c43c29",
      price : [ 
          45, 
          65, 
          95
      ],
      name : "Rock Candy",
      "plantIcon" : "",
      "packageIcon" : "",
      "description" : "This extremely relaxing strain is great after a long day, producing a strong euphoria that slowly slips you into a deep sleep. Great for all growers, this easy-to-grow strain will make your grow room smell of citrus fruit. The buds have a fluffy soft look, with a thick layer of sugary white trichomes.",
      "floweringTime" : "7-9 weeks",
      "effects" : "Happy, euphoric",
      "thc" : "15-19%",
      "type" : "80% Indica / 20% Sativa",
      "difficulty" : "Easy",
      "indOut" : "Indoor/Outdoor",
      "color" : "#8bd5d4",
      "autoflower" : false,
      "sotiCode" : "RCF"
    },
    {
      _id : "5be22670c766994440c43c29",
      price : [ 
          45, 
          65, 
          95
      ],
      name : "Rock Candy",
      "plantIcon" : "",
      "packageIcon" : "",
      "description" : "This extremely relaxing strain is great after a long day, producing a strong euphoria that slowly slips you into a deep sleep. Great for all growers, this easy-to-grow strain will make your grow room smell of citrus fruit. The buds have a fluffy soft look, with a thick layer of sugary white trichomes.",
      "floweringTime" : "7-9 weeks",
      "effects" : "Happy, euphoric",
      "thc" : "15-19%",
      "type" : "80% Indica / 20% Sativa",
      "difficulty" : "Easy",
      "indOut" : "Indoor/Outdoor",
      "color" : "#8bd5d4",
      "autoflower" : false,
      "sotiCode" : "RCF"
    },
  
  ]
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

// export default indexReducer;
export default combineReducers({
  misc: indexReducer
});
