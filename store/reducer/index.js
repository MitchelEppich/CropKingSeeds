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
  visibleScreen: ["dogs"], // When [] show main screen
  strains: null,
  hoverIndex: null,
  geneHoverIndex: null,
  activeBannerSlide: 6,
  bannerSlides: [
    {
      color: "blue",
      style: {
        backgroundImage: "url(../static/img/banner1.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }
    },{
      color: "orange",
      style: {
        // backgroundImage: "url(../static/img/banner2.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }
    },{
      color: "white",
      style: {
        // backgroundImage: "url(../static/img/banner3.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }
    }
  ],
  bannerSlidePositions: [
    { 'transform': ' translateX(-500%)', 'display': 'none', transition: "all 0.5s ease-in-out"},
    { 'transform': ' translateX(-40%)', 'display': 'none', transition: "all 0.5s ease-in-out"},
    { 'transform': ' translateX(-200%)', transition: "all 0.5s ease-in-out" },
    { 'transform': ' translateX(0)', transition: "all 0.5s ease-in-out" },
    { 'transform': ' translateX(200%)', transition: "all 0.5s ease-in-out" },
    { 'transform': ' translateX(400%)', 'display': 'none', transition: "all 0.5s ease-in-out"},
    { 'transform': ' translateX(500%)', 'display': 'none', transition: "all 0.5s ease-in-out"},
    // { 'transform': 'translateX(-100%)' , transition: "all 0.5s ease-in-out"},
    // { 'transform': 'translateX(0)', transition: "all 0.5s ease-in-out" },
    // { 'transform': 'translateX(100%)', transition: "all 0.5s ease-in-out"},
    // { 'transform': 'translateX(200%)', display: "none", transition: "all 0.5s ease-in-out"  },
    // { 'transform': 'translateX(-200%)', display: "none", transition: "all 0.5s ease-in-out"  },
],
};

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VISIBLE_SCREEN:
      let screenIndex = state.visibleScreen.indexOf(action.input);
      let screens = state.visibleScreen;
      if (screenIndex > -1) {
        screens.splice(screenIndex, 1);
        return updateObject(state, {
          visibleScreen: [...screens]
        });
      } else {
        return updateObject(state, {
          visibleScreen: [...state.visibleScreen, action.input]
        });
      }
    case actionTypes.SET_HOVER_INDEX:
      return updateObject(state, {
        hoverIndex: state.hoverIndex == action.index ? null : action.index
      });
    case actionTypes.SET_GENE_HOVER_INDEX:
      return updateObject(state, {
        geneHoverIndex:  state.geneHoverIndex == action.index ? null : action.index
      });
    case actionTypes.NEXT_BANNER_SLIDE:
      let slideIndex = state.activeBannerSlide
      let slidesLength = state.bannerSlidePositions.length;
      if (slideIndex === slidesLength) {
        slideIndex = -1;
      }
      ++slideIndex;
      return updateObject(state, {
        activeBannerSlide: slideIndex
      });
    case actionTypes.SET_STRAINS:
      return updateObject(state, {
        strains: [...action.strains]
      });
    default:
      return state;
  }
};

export default combineReducers({
  misc: indexReducer
});
