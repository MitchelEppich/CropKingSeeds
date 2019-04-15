/*******************************************/
/*Index Actions for all miscellaneous related
dispatch actions. All other actiontypes are
imported into this file, to then be exported
for the reducers and corresponding pages.*/
/******************************************/

import gql from "graphql-tag";
import { makePromise, execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";
import axios from "axios";

import Cart from "./cart";
import Checkout from "./checkout";
import Navigation from "./navigation";
import Shop from "./shop";
import About from "./about";
import ViewProduct from "./viewProduct";
import Germination from "./germination";
import Faq from "./faq";
import Cms from "./cms";
import Wiki from "./wiki";
import Charts from "./charts";
import Compare from "./compare";

import { inferStrainData } from "../utilities/strain";

const uri = "http://127.0.0.1:3000/graphql";
// const uri = "https://142.93.159.223/graphql";
// const uri = "https://www.cropkingseeds.com/graphql";

const imports = {
  ...Cart(uri),
  ...Checkout(uri),
  ...Navigation(uri),
  ...Shop(uri),
  ...ViewProduct(uri),
  ...Germination(uri),
  ...About(uri),
  ...Faq(uri),
  ...Cms(uri),
  ...Wiki(uri),
  ...Charts(uri),
  ...Compare(uri)
};

const actionTypes = {
  SET_VISIBLE_SCREEN: "SET_VISIBLE_SCREEN",
  SET_CHECKOUT_SCREEN: "SET_CHECKOUT_SCREEN",
  SET_HOVER_ID: "SET_HOVER_ID",
  SET_GENE_HOVER_INDEX: "SET_GENE_HOVER_INDEX",
  CHANGE_BANNER_SLIDE: "CHANGE_BANNER_SLIDE",
  SET_STRAINS: "SET_STRAINS",
  SET_CONTEXT: "SET_CONTEXT",
  TOGGLE_STEPS_CHECKOUT: "TOGGLE_STEPS_CHECKOUT",
  SHOW_DIFFERENT_ADDRESS: "SHOW_DIFFERENT_ADDRESS",
  SET_AGE_VERIFICATION: "SET_AGE_VERIFICATION",
  SET_MEDIA_SIZE: "SET_MEDIA_SIZE",
  SUBSCRIBE_TO_NEWSLETTER: "SUBSCRIBE_TO_NEWSLETTER",
  SET_EMAIL: "SET_EMAIL",
  SEND_EMAIL: "SEND_EMAIL",
  REFRESH_EMAIL_FORM: "REFRESH_EMAIL_FORM",
  GET_FEATURED_LIST: "GET_FEATURED_LIST",
  RECALL_AGE_VERIFICATION: "RECALL_AGE_VERIFICATION",
  SET_SEARCH: "SET_SEARCH",
  SET_SUGGESTIONS: "SET_SUGGESTIONS",
  SET_HIGHLIGHTED_SUGGESTION: "SET_HIGHLIGHTED_SUGGESTION",
  SET_CURRENT_EVENT: "SET_CURRENT_EVENT",
  GET_ALL_NEWS: "GET_ALL_NEWS",
  GET_FEATURED_NEWS: "GET_FEATURED_NEWS",
  SHOW_MORE_FEATURES: "SHOW_MORE_FEATURES",
  SET_STRAIN: "SET_STRAIN",
  TOGGLE_MOBILE_MENU: "TOGGLE_MOBILE_MENU",
  TOGGLE_CART_MENU: "TOGGLE_CART_MENU",
  GET_BANNERS: "GET_BANNERS",
  GET_RELATED_LIST: "GET_RELATED_LIST",
  SET_NEWS_STEPPER: "SET_NEWS_STEPPER",
  IS_REPEAT_CUSTOMER: "IS_REPEAT_CUSTOMER",
  COMPARE_STRAIN: "COMPARE_STRAIN",
  SET_EYES_SHOULD_MOVE: "SET_EYES_SHOULD_MOVE",
  SET_COMPARE_SEARCH: "SET_COMPARE_SEARCH",
  GET_TAXES: "GET_TAXES",
  SET_SUBJECT: "SET_SUBJECT",
  CALCULATE_FPS_AVG: "CALCULATE_FPS_AVG",
  DISABLE_FPS_CALC: "DISABLE_FPS_CALC",
  TOGGLE_LOW_GPU_MODE: "TOGGLE_LOW_GPU_MODE",
  RECALL_GPU_MODE: "RECALL_GPU_MODE",
  TOGGLE_HEADER_MESSAGE: "TOGGLE_HEADER_MESSAGE",
  GET_DAILY_MESSAGE: "GET_DAILY_MESSAGE",
  TOGGLE_MUTE: "TOGGLE_MUTE",
  SET_SOTI_ERROR: "SET_SOTI_ERROR"
};

const actions = {
  setSotiError: input => {
    return {
      type: actionTypes.SET_SOTI_ERROR,
      input: input.value
    };
  },
  setEyesShouldMove: input => {
    return {
      type: actionTypes.SET_EYES_SHOULD_MOVE,
      input: input.value
    };
  },
  setNewsStepper: input => {
    return {
      type: actionTypes.SET_NEWS_STEPPER,
      input: input.timeout
    };
  },
  setVisibleScreen: input => {
    return {
      type: actionTypes.SET_VISIBLE_SCREEN,
      input: input.input,
      group: input.group,
      clearAll: input.clearAll
    };
  },
  setCurrentEvent: input => {
    let total = input.events.length;
    let index = Math.max(0, Math.min(input.index, total)) % total || 0;

    return {
      type: actionTypes.SET_CURRENT_EVENT,
      index: index
    };
  },
  setMediaSize: input => {
    return {
      type: actionTypes.SET_MEDIA_SIZE,
      input: input.mediaSize
    };
  },
  compareStrain: input => {
    let compareStrains = input.compareStrains;
    let action = input.action;
    if (action == "remove") {
      let index = input.compareStrains.indexOf(input.strain);
      if (index >= 0) {
        compareStrains.splice(index, 1);
      }
    } else {
      compareStrains = [...compareStrains, input.strain];
    }
    if (compareStrains.length > 3) compareStrains = compareStrains.slice(0, 3);
    return {
      type: actionTypes.COMPARE_STRAIN,
      compareStrains: compareStrains
    };
  },
  toggleStepsCheckout: input => {
    return {
      type: actionTypes.TOGGLE_STEPS_CHECKOUT,
      input: input
    };
  },
  setAgeVerification: input => {
    let _ageVerification = input.ageVerification;
    let _group = input.group;
    let _value = input.value;

    if (_ageVerification == null) _ageVerification = {};

    _ageVerification[_group] = _value;
    if (_group == "country") _ageVerification.state = null;

    sessionStorage.setItem("ageVerify", JSON.stringify(_ageVerification));

    return { type: actionTypes.SET_AGE_VERIFICATION, input: _ageVerification };
  },
  recallAgeVerification: () => {
    return dispatch => {
      return new Promise((resolve, reject) => {
        let recall = sessionStorage.getItem("ageVerify");
        let _obj = {};
        if (recall != null) {
          _obj = JSON.parse(recall);
        }

        resolve(_obj);

        dispatch({
          type: actionTypes.RECALL_AGE_VERIFICATION,
          input: _obj
        });
      });
    };
  },
  toggleShowDifferentAddress: input => {
    return {
      type: actionTypes.SHOW_DIFFERENT_ADDRESS,
      input: input
    };
  },
  setContext: input => {
    return { type: actionTypes.SET_CONTEXT, input: input };
  },
  setHoverId: (id, turnOn) => {
    return async dispatch => {
      return dispatch({
        type: actionTypes.SET_HOVER_ID,
        id: id,
        turnOn: turnOn
      });
    };
  },
  setGeneHoverIndex: index => {
    return {
      type: actionTypes.SET_GENE_HOVER_INDEX,
      index: index
    };
  },
  changeBannerSlide: input => {
    let bannersLength = input.bannersLength;
    let index =
      input.direction > 0
        ? Math.max(0, Math.min(input.index, bannersLength)) % bannersLength || 0
        : input.index > 0
        ? input.index
        : bannersLength;
    return {
      type: actionTypes.CHANGE_BANNER_SLIDE,
      index: index
    };
  },
  getStrains: input => {
    return async dispatch => {
      let verbose =
        input == null || input.verbose == null ? false : input.verbose;
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: verbose ? query.allStrainsFull : query.allStrains
      };

      return await makePromise(execute(link, operation))
        .then(data => {
          let _strains = data.data.allStrains;
          let _new = [];
          for (let strain of _strains) {
            _new.push(inferStrainData(strain));
            // console.log("here", _new[_new.length - 1]);
          }
          dispatch(actions.setStrains(_new));
          return Promise.resolve(_new);
        })
        .catch(error => console.log(error));
    };
  },
  getTaxes: () => {
    return async dispatch => {
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: query.getTaxes
      };

      return await makePromise(execute(link, operation))
        .then(data => {
          let _taxes = data.data.getTaxes;
          if (_taxes != null) _taxes = JSON.parse(_taxes);

          dispatch({
            type: actionTypes.GET_TAXES,
            input: _taxes
          });

          return Promise.resolve(_taxes);
        })
        .catch(error => console.log(error));
    };
  },
  getStrain: input => {
    return async dispatch => {
      let _strains = [...input.strains];
      delete input.strains;

      const link = new HttpLink({ uri, fetch: fetch });
      const operation = { query: query.getStrain, variables: { ...input } };

      return await makePromise(execute(link, operation))
        .then(data => {
          let _strain = inferStrainData(data.data.strain);
          dispatch(actions.setStrain({ ..._strain }));
          let index = _strains.findIndex(strain => {
            return strain.sotiId == _strain.sotiId;
          });
          _strain = {
            ..._strains[index],
            ..._strain
          };
          return Promise.resolve(_strain);
        })
        .catch(error => console.log(error));
    };
  },
  setEmail: input => {
    return {
      type: actionTypes.SET_EMAIL,
      input: input.email
    };
  },
  subscribeToNewsletter: input => {
    return dispatch => {
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: mutation.subscribeToNewsletter,
        variables: { ...input }
      };

      makePromise(execute(link, operation))
        .then(data => {
          dispatch({
            type: actionTypes.SUBSCRIBE_TO_NEWSLETTER
          });
        })
        .catch(error => console.log(error));
    };
  },
  sendEmail: input => {
    return dispatch => {
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: mutation.sendEmail,
        variables: { ...input }
      };

      makePromise(execute(link, operation))
        .then(data => {
          dispatch({
            type: actionTypes.SEND_EMAIL
          });
        })
        .catch(error => console.log(error));
    };
  },
  setCompareSearchValue: input => {
    return {
      type: actionTypes.SET_COMPARE_SEARCH,
      input: input
    };
  },
  setStrain: strain => {
    return {
      type: actionTypes.SET_STRAIN,
      strain
    };
  },
  setStrains: strains => {
    return {
      type: actionTypes.SET_STRAINS,
      strains: strains
    };
  },
  refreshEmailForm: () => {
    return { type: actionTypes.REFRESH_EMAIL_FORM };
  },
  getFeaturedList: input => {
    return async dispatch => {
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: query.getFeaturedStrains,
        variables: { ...input }
      };

      return await makePromise(execute(link, operation))
        .then(data => {
          let _strains = data.data.getFeaturedList;
          let _new = [];
          for (let strain of _strains) {
            let $strain = inferStrainData(strain);
            $strain = { ...$strain, _id: $strain._id + "f" };
            _new.push($strain);
          }
          dispatch({
            type: actionTypes.GET_FEATURED_LIST,
            input: _new
          });
          return Promise.resolve(_new);
        })
        .catch(error => console.log(error));
    };
  },
  getRelatedList: input => {
    return async dispatch => {
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: query.getRelatedStrains,
        variables: { ...input }
      };

      return await makePromise(execute(link, operation))
        .then(data => {
          let _strains = data.data.getRelatedList;
          let _new = [];
          for (let strain of _strains) {
            let $strain = inferStrainData(strain);
            $strain = { ...$strain, _id: $strain._id + "b" };
            _new.push($strain);
          }
          dispatch({
            type: actionTypes.GET_RELATED_LIST,
            input: _new
          });
          return Promise.resolve(_new);
        })
        .catch(error => console.log(error));
    };
  },
  setSearch: value => {
    return dispatch => {
      return new Promise((resolve, reject) => {
        dispatch({
          type: actionTypes.SET_SEARCH,
          value: value
        });
        return resolve(value);
      });
    };
  },
  setSuggestions: suggestions => {
    return {
      type: actionTypes.SET_SUGGESTIONS,
      suggestions: suggestions
    };
  },
  setHighlightedSuggestion: input => {
    let total = input.suggestions.length;
    let index = Math.max(0, Math.min(input.index, total)) % total || 0;
    if (input.index == null || input.index == -1) {
      index = null;
    }
    return {
      type: actionTypes.SET_HIGHLIGHTED_SUGGESTION,
      index: index
    };
  },
  getAllNews: () => {
    return dispatch => {
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: query.getAllNews
      };

      makePromise(execute(link, operation))
        .then(data => {
          let categoryNews = {};
          let news = data.data.allNews;

          for (let _news of news) {
            if (categoryNews[_news.category] == null)
              categoryNews[_news.category] = [];
            categoryNews[_news.category].push(_news);
          }

          dispatch({
            type: actionTypes.GET_ALL_NEWS,
            input: categoryNews
          });
        })
        .catch(error => console.log(error));
    };
  },
  getFeaturedNews: () => {
    return dispatch => {
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: query.getFeaturedNews
      };

      makePromise(execute(link, operation))
        .then(data => {
          let news = data.data.allFeaturedNews;

          dispatch({
            type: actionTypes.GET_FEATURED_NEWS,
            input: news
          });
        })
        .catch(error => console.log(error));
    };
  },
  getBanners: () => {
    return dispatch => {
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: query.getBanners
      };
      makePromise(execute(link, operation))
        .then(data => {
          let banners = data.data.getBanners.map((banner, index) => {
            let str = banner;
            let { 0: type, 1: url, 2: sotiId } =
              str != "" ? str.split("&=>") : ["", "", ""];
            return {
              style: {
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                height: "100%"
              },
              type,
              url,
              sotiId
            };
          });
          //refactor
          let middle = Math.floor(banners.length / 2) / -1;
          let positions = banners.map((banner, index) => {
            let val = middle;
            middle++;
            return {
              transform: " translateX(" + 100 * val + "%)",
              transition: "1s all ease-in-out",
              opacity: val == 0 ? 1 : 0
            };
          });
          dispatch({
            type: actionTypes.GET_BANNERS,
            input: banners,
            positions: positions
          });
        })
        .catch(error => console.log(error));
    };
  },
  showMoreFeatures: input => {
    let max = input.max;
    let count = Math.min(input.count, max);
    return {
      type: actionTypes.SHOW_MORE_FEATURES,
      count: count
    };
  },
  toggleMobileMenu: input => {
    return {
      type: actionTypes.TOGGLE_MOBILE_MENU,
      input: input
    };
  },
  toggleHeaderMessage: input => {
    return {
      type: actionTypes.TOGGLE_HEADER_MESSAGE,
      input: input.value,
      shown: input.shown,
      time: input.time
    };

    // if (input.value) {
    //   setTimeout(
    //     () =>
    //       dispatch({
    //         type: actionTypes.TOGGLE_HEADER_MESSAGE,
    //         input: false,
    //         shown: true
    //       }),
    //     input.time
    //   );
    // }
  },
  toggleCartMenu: isCartMenuVisible => {
    return {
      type: actionTypes.TOGGLE_CART_MENU,
      isCartMenuVisible: isCartMenuVisible
    };
  },
  isRepeatCustomer: input => {
    return dispatch => {
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: query.isRepeatCustomer,
        variables: { ...input }
      };

      makePromise(execute(link, operation))
        .then(data => {
          let res = data.data.isRepeatCustomer;
          dispatch({
            type: actionTypes.IS_REPEAT_CUSTOMER,
            input: !res
          });
        })
        .catch(error => console.log(error));
    };
  },
  setSubject: subject => {
    return {
      type: actionTypes.SET_SUBJECT,
      subject: subject
    };
  },
  calculateFpsAvg: fpsArr => {
    let sum = fpsArr.reduce(function(a, b) {
      return a + b;
    });
    let avg = sum / fpsArr.length;
    return {
      type: actionTypes.CALCULATE_FPS_AVG,
      avg: avg,
      poorFps: avg < 40
    };
  },
  disableFpsCalc: () => {
    return {
      type: actionTypes.DISABLE_FPS_CALC,
      poorFps: false
    };
  },
  toggleLowGPUMode: lowGPUMode => {
    sessionStorage.setItem("lowGPU", lowGPUMode);
    return {
      type: actionTypes.TOGGLE_LOW_GPU_MODE,
      lowGPUMode: lowGPUMode
    };
  },
  recallGPUMode: () => {
    let recall = sessionStorage.getItem("lowGPU");
    let lowGPUMode = null;
    if (recall != null) {
      lowGPUMode = recall == "true";
    }
    return {
      type: actionTypes.RECALL_GPU_MODE,
      lowGPUMode: lowGPUMode
    };
  },
  getDailyMessage: () => {
    return dispatch => {
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = {
        query: query.getDailyMessage
      };

      return makePromise(execute(link, operation))
        .then(data => {
          let message = data.data.getDailyMessage;
          dispatch({
            type: actionTypes.GET_DAILY_MESSAGE,
            input: message
          });
          return Promise.resolve(message);
        })
        .catch(error => console.log(error));
    };
  },
  toggleMute: () => {
    return {
      type: actionTypes.TOGGLE_MUTE
    };
  }
};

const query = {
  getDailyMessage: gql`
    {
      getDailyMessage
    }
  `,
  getTaxes: gql`
    {
      getTaxes
    }
  `,
  isRepeatCustomer: gql`
    query($ip: String) {
      isRepeatCustomer(input: { ip: $ip })
    }
  `,
  getBanners: gql`
    {
      getBanners
    }
  `,
  getRelatedStrains: gql`
    query($sotiId: String, $limit: Int) {
      getRelatedList(input: { sotiId: $sotiId, limit: $limit }) {
        _id
        name
        packageImg
        genetic
        type
        sotiId
        sativa
        indica
        ruderalis
        rating
        releaseDate
      }
    }
  `,
  getAllNews: gql`
    query {
      allNews {
        _id
        title
        body
        date
        url
        imageUrl
        location
        locationUrl
        sponsored
        category
      }
    }
  `,
  getFeaturedNews: gql`
    query {
      allFeaturedNews {
        _id
        title
        body
        date
        url
        imageUrl
        location
        locationUrl
        sponsored
        category
      }
    }
  `,
  getStrain: gql`
    query($sotiId: String) {
      strain(input: { sotiId: $sotiId }) {
        description
        effect
        difficulty
        og
        country
        env
        reviews
        ratingQuantity
        featured
        pthc
        pcbd
        pcbn
        yield
        flowerTime
        price
        strainImg
        inStock
        sotiId
        moreInfo
      }
    }
  `,
  getFeaturedStrains: gql`
    query($limit: Int) {
      getFeaturedList(input: { limit: $limit }) {
        _id
        name
        packageImg
        genetic
        type
        sotiId
        sativa
        indica
        ruderalis
        rating
        releaseDate
      }
    }
  `,
  allStrains: gql`
    query {
      allStrains {
        _id
        name
        price
        strainImg
        packageImg
        inStock
        genetic
        yield
        flowerTime
        type
        pthc
        pcbd
        pcbn
        sotiId
        sativa
        indica
        ruderalis
        rating
        releaseDate
        ratingQuantity
      }
    }
  `,
  allStrainsFull: gql`
    query {
      allStrains {
        _id
        name
        price
        strainImg
        packageImg
        inStock
        genetic
        yield
        flowerTime
        type
        pthc
        pcbd
        pcbn
        sotiId
        sativa
        indica
        ruderalis
        rating
        releaseDate
        description
        effect
        difficulty
        og
        country
        env
        reviews
        ratingQuantity
        featured
        moreInfo
      }
    }
  `
};

const mutation = {
  subscribeToNewsletter: gql`
    mutation($email: String) {
      subscribeToNewsletter(email: $email)
    }
  `,
  sendEmail: gql`
    mutation(
      $type: String
      $name: String
      $email: String
      $subject: String
      $body: String
      $response: String
      $ccStatus: String
      $ccDescriptor: String
      $ccFee: Float
      $orderId: String
      $productList: String
      $paymentMethod: String
      $shippingDestination: String
      $shippingType: String
      $shippingTypeDescription: String
      $subtotal: Float
      $total: Float
      $tax: Float
      $shipping: Float
      $date: String
      $company: String
      $cost: Float
      $mediaKit: String
      $phone: String
      $location: String
      $website: String
      $eventName: String
      $moneyGramName: String
    ) {
      sendEmail(
        input: {
          type: $type
          name: $name
          email: $email
          subject: $subject
          body: $body
          response: $response
          ccStatus: $ccStatus
          ccDescriptor: $ccDescriptor
          ccFee: $ccFee
          orderId: $orderId
          productList: $productList
          paymentMethod: $paymentMethod
          shippingDestination: $shippingDestination
          shippingType: $shippingType
          shippingTypeDescription: $shippingTypeDescription
          subtotal: $subtotal
          total: $total
          tax: $tax
          shipping: $shipping
          date: $date
          company: $company
          cost: $cost
          mediaKit: $mediaKit
          phone: $phone
          location: $location
          website: $website
          eventName: $eventName
          moneyGramName: $moneyGramName
        }
      )
    }
  `
};

export default {
  // TYPES
  ...actionTypes,
  // IMPORTS
  ...imports,
  // ACTIONS
  ...actions
};
