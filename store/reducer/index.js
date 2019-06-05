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
import ArticlesReducer from "./articles";
import CmsReducer from "./cms";
import WikiReducer from "./wiki";
import CompareReducer from "./compare";
import ChartsReducer from "./charts";

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
  activeBannerSlide: 1,
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
  featuredNews: [],
  news: {},
  featureCount: 1,
  showMobileMenu: null,
  showHeaderMessage: null,
  showCartMenu: false,
  CFURL: "https://dcfgweqx7od72.cloudfront.net",
  newCustomer: null,
  eyesShouldMove: false,
  compareSearchValue: "",
  taxes: null,
  contactSubject: "Shipping / Delivery",
  poorFps: null,
  fpsAvg: 0,
  lowGPUMode: null,
  dailyMessageShown: false,
  dailyMessage: null,
  dailyMessageTimer: null,
  muted: true,
  metaDescriptions: {
    shop:
      "Shop our various cannabis seed strains here at Crop King Seeds. We carry autoflower, feminized, regular and cbd seed types. Check out our high thc strains like Gelato Feminized (27% thc) or browse our high CBD's like CB Diesel (20% cbd).",
    "shop?autoflower":
      "Buy Auto Flowering Feminized Marijuana Seeds. Auto-flowering marijuana seeds are produced when a sativa, indica, or both are crossed to a ruderalis variety.",
    "shop?regular":
      "Buy Regular Marijuana Seeds - When marijuana seeds are classified as regular it means that the seeds when germinated can produce either male or female plants. It is expected that a batch of regular seeds can have about 50% male and 50% female so the tendency to have male together with female plants is about even. However, the sex of marijuana plants cannot be determined with certainty until they start to flower.",
    "shop?feminized":
      "Buy Feminized Marijuana Seeds - Feminized marijuana seeds are the result of a scientific process meant to produce only female seeds. The process involves forcing female plants to produce pollen sacs which are then used to pollinate other female marijuana plants. When a female plant is forced to produce pollen sacs, it can be expected that the pollen coming out of it will have female genes and when matched with another female, then it will have the natural tendency to produce only female seeds.",
    "shop?cbd":
      "Buy High CBD / Medical Marijuana Seeds - CBD, or cannabidiol, is the second most abundant active ingredient in cannabis after THC. It is a strong anti-oxidant, non-psychoactive and has a wide range of medical applications. CBDs have anti-psychotic and anti-tumor properties. They work to prolong the effects of THC while simultaneously providing relief from anxiety, muscle spasms and seizures.",
    about:
      "We are progressively growing both as a company and worldwide. With almost 40 strains available, 24 hour customer service, and our trusted satisfaction guarantee, Crop King Seeds continues to be a leader in the expanding cannabis industry.",
    affiliates:
      "GROW YOUR BUSINESS WITH CROP KING SEEDS - Are you ready to earn some money? Full affiliate support available so you can be apart of Crop King Seeds fast growth in the cannabis industry.",
    contact:
      "We provide full support worldwide to address any questions or comments you may have. Please view our FAQ Page to see if we have answered your question(s) already!",
    faq:
      "Can't find the answer to your question? Feel free to Contact Us, we are ready 24/7 Worldwide to assist you with any question you may have.",
    germination:
      "Learn how to germinate your cannabis seeds. By following these steps we guarantee a germination rate of over 80% on our marijuana seeds.",
    news:
      "These are the next events Crop King Seeds will be attending and or sponsoring. We hope to see you there!",
    partners:
      "Do you have a business or service that can help our valued growers? If your company has the same high standards as Crop King Seeds, then contact us to put your information in the list below.",
    privacy:
      "The following Privacy Policy governs how Crop King Seeds collects, uses, maintains and discloses (which we don’t) information collected from users (each, a “User”) of the www.cropkingseeds.com website (“Site”). The following privacy policy applies to the Site and all products offered by Crop King Seeds.",
    wiki:
      "Hello! Welcome to the new and improved Crop King Seeds.There are many new features and improvements that have been introduced to our site that we hope you’ll enjoy.These documents are meant as a reference guide for understanding and learning how to use the new site efficiently.",
    checkout:
      "Sorry, your cart is empty! Looks like you have no seeds in your shopping cart. Check back after more shopping for cannabis seeds. Go to the Shop Page and check out all our marijuana seeds."
  },
  sotiError: null,
  mo: null,
  processors: null
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
    case actionTypes.GET_MO:
      return updateObject(state, {
        mo: action.input
      });
    case actionTypes.GET_PROCESSORS:
      return updateObject(state, {
        processors: action.input
      });
    case actionTypes.SET_SOTI_ERROR:
      return updateObject(state, {
        sotiError: action.input
      });
    case actionTypes.GET_DAILY_MESSAGE:
      return updateObject(state, {
        dailyMessage: action.input
      });
    case actionTypes.GET_TAXES:
      return updateObject(state, {
        taxes: action.input
      });
    case actionTypes.TOGGLE_MUTE:
      return updateObject(state, {
        muted: !state.muted
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
    case actionTypes.TOGGLE_CART_MENU:
      return updateObject(state, {
        showCartMenu: action.isCartMenuVisible
      });
    case actionTypes.SET_SUBJECT:
      return updateObject(state, {
        contactSubject: action.subject
      });
    case actionTypes.CALCULATE_FPS_AVG:
      return updateObject(state, {
        fpsAvg: action.avg,
        poorFps: action.poorFps
      });
    case actionTypes.DISABLE_FPS_CALC:
      return updateObject(state, {
        poorFPS: false
      });
    case actionTypes.TOGGLE_LOW_GPU_MODE:
      return updateObject(state, {
        lowGPUMode: action.lowGPUMode
      });
    case actionTypes.TOGGLE_HEADER_MESSAGE:
      return updateObject(state, {
        showHeaderMessage: action.input,
        dailyMessageShown: state.dailyMessageShown || action.shown,
        dailyMessageTimer: action.time
      });
    case actionTypes.RECALL_GPU_MODE:
      return updateObject(state, {
        lowGPUMode: action.lowGPUMode
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
  articles: ArticlesReducer,
  cms: CmsReducer,
  wiki: WikiReducer,
  compare: CompareReducer,
  charts: ChartsReducer
});
