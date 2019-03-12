/*******************************************/
/*main reducer with miscellaneous state
 management.
 This reducer imports all other reducers and
  combines them to be exported to the store*/
/******************************************/

import actionTypes from "../actions";
import { combineReducers } from "redux";
import { updateObject } from "../utility";

import CheckoutReducer from "./checkout";
import CartReducer from "./cart";
import NavigationReducer from "./navigation";
import ShopReducer from "./shop";
import PartnerReducer from "./partner";
import ViewProductReducer from "./viewProduct";
import DetailReducer from "./detail";
import AboutReducer from "./about";
import GerminationReducer from "./germination";
import FaqReducer from "./faq";
import ArticleReducer from "./article";
import CmsReducer from "./cms";

const initialState = {
  visibleScreen: [], // When [] show main screen
  strains: null,
  compareStrains: null,
  hoverId: null,
  geneHoverIndex: null,
  stepsCheckout: 1,
  showDifferentAddress: false,
  ageVerification: null,
  // checkoutScreen: "productsScreen",
  activeBannerSlide: 5,
  notification: null, //"Crop King Seeds will be at High Times Cannabis Cup Sept. 13-16 2019",
  bannerSlidePositions: [
    { transform: " translateX(-100%)" },
    { transform: " translateX(0)", transition: "1s all ease-in-out" },
    { transform: " translateX(100%)", transition: "1s all ease-in-out" }
  ],
  mediaSize: "xl",
  newsletterEmail: null,
  subscribedToNewsletter: false,
  emailSent: false,
  featuredStrains: null,
  relatedStrains: null,
  searchValue: null,
  suggestions: [],
  highlightedSuggestion: null,
  currentEventObj: 0,
  currentEventUpdatedAt: new Date(),
  featuredNews: [],
  news: {},
  featureCount: 1,
  showMobileMenu: null,
  CFURL: "http://dcfgweqx7od72.cloudfront.net",
  newsTimeout: null,
  newCustomer: null,
  eyesShouldMove: false,
  compareSearchValue: "",
  taxes: null,
  contactSubject: "Shipping / Delivery"
};

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VISIBLE_SCREEN:
      let _clearAll = action.clearAll;
      if (_clearAll) {
        return updateObject(state, { visibleScreen: [] });
      }
      let _group = action.group;
      let screens = state.visibleScreen;
      let { $input, screenIndex } = (() => {
        let $input;
        if (_group == null) {
          $input = action.input;
          return {
            $input,
            screenIndex: screens.indexOf($input)
          };
        } else {
          $input = _group + "::" + action.input;
          return {
            $input,
            screenIndex: screens.findIndex(a => {
              return a.includes(_group);
            })
          };
        }
      })();

      if (screenIndex > -1) {
        let _ = screens[screenIndex];
        screens.splice(screenIndex, 1);
        if ($input == _)
          return updateObject(state, { visibleScreen: [...screens] });
      }

      return updateObject(state, {
        visibleScreen: [...state.visibleScreen, $input]
      });

    case actionTypes.IS_REPEAT_CUSTOMER:
      return updateObject(state, {
        newCustomer: action.input
      });
    case actionTypes.GET_TAXES:
      return updateObject(state, {
        taxes: action.input
      });
    case actionTypes.SET_EYES_SHOULD_MOVE:
      return updateObject(state, {
        eyesShouldMove: action.input
      });
    case actionTypes.COMPARE_STRAIN:
      return updateObject(state, {
        compareStrains: action.compareStrains
      });
    case actionTypes.SET_COMPARE_SEARCH:
      return updateObject(state, {
        compareSearchValue: action.input
      });
    case actionTypes.SET_HOVER_ID:
      return updateObject(state, {
        hoverId: action.turnOn ? action.id : null
      });
    case actionTypes.SET_NEWS_STEPPER:
      return updateObject(state, {
        newsTimeout: action.input
      });
    case actionTypes.GET_BANNERS:
      return updateObject(state, {
        banners: action.input,
        bannerSlidePositions: action.positions
      });
    case actionTypes.GET_FEATURED_NEWS:
      return updateObject(state, {
        featuredNews: action.input
      });
    case actionTypes.GET_ALL_NEWS:
      return updateObject(state, {
        news: action.input
      });
    case actionTypes.SET_CURRENT_EVENT:
      return updateObject(state, {
        currentEventObj: action.index,
        currentEventUpdatedAt: new Date()
      });
    case actionTypes.SET_EMAIL:
      return updateObject(state, { newsletterEmail: action.input });
    case actionTypes.SEND_EMAIL:
      return updateObject(state, { emailSent: true });
    case actionTypes.REFRESH_EMAIL_FORM:
      return updateObject(state, { emailSent: false });
    case actionTypes.SUBSCRIBE_TO_NEWSLETTER:
      return updateObject(state, { subscribedToNewsletter: true });
    case actionTypes.SET_MEDIA_SIZE:
      return updateObject(state, { mediaSize: action.input });
    case actionTypes.TOGGLE_STEPS_CHECKOUT:
      return updateObject(state, { stepsCheckout: action.input });
    case actionTypes.SET_AGE_VERIFICATION:
      return updateObject(state, { ageVerification: action.input });
    case actionTypes.RECALL_AGE_VERIFICATION:
      return updateObject(state, { ageVerification: action.input });
    case actionTypes.SHOW_DIFFERENT_ADDRESS:
      return updateObject(state, {
        showDifferentAddress: !state.showDifferentAddress
      });
    case actionTypes.SET_CONTEXT:
      return updateObject(state, { context: action.input });
    case actionTypes.SET_GENE_HOVER_INDEX:
      return updateObject(state, {
        geneHoverIndex:
          state.geneHoverIndex == action.index ? null : action.index
      });
    case actionTypes.CHANGE_BANNER_SLIDE:
      return updateObject(state, { activeBannerSlide: action.index });
    case actionTypes.SET_STRAINS:
      return updateObject(state, { strains: [...action.strains] });
    case actionTypes.SET_STRAIN:
      let _strains = state.strains;
      let index = _strains.findIndex(strain => {
        return strain.sotiId == action.strain.sotiId;
      });
      _strains[index] = {
        ..._strains[index],
        ...action.strain
      };
      return updateObject(state, { strains: [..._strains] });
    case actionTypes.GET_FEATURED_LIST:
      return updateObject(state, { featuredStrains: [...action.input] });
    case actionTypes.GET_RELATED_LIST:
      return updateObject(state, { relatedStrains: [...action.input] });
    case actionTypes.SET_SEARCH:
      return updateObject(state, { searchValue: action.value });
    case actionTypes.SET_SUGGESTIONS:
      return updateObject(state, { suggestions: action.suggestions });
    case actionTypes.SET_HIGHLIGHTED_SUGGESTION:
      return updateObject(state, { highlightedSuggestion: action.index });

    case actionTypes.SHOW_MORE_FEATURES:
      return updateObject(state, { featureCount: action.count });
    case actionTypes.TOGGLE_MOBILE_MENU:
      return updateObject(state, {
        showMobileMenu: !state.showMobileMenu
      });
    case actionTypes.SET_SUBJECT:
      return updateObject(state, {
        contactSubject: action.subject
      });

    default:
      return state;
  }
};

export default combineReducers({
  misc: indexReducer,
  nav: NavigationReducer,
  cart: CartReducer,
  checkout: CheckoutReducer,
  shop: ShopReducer,
  partner: PartnerReducer,
  viewProduct: ViewProductReducer,
  detail: DetailReducer,
  germination: GerminationReducer,
  about: AboutReducer,
  faq: FaqReducer,
  article: ArticleReducer,
  cms: CmsReducer
});
