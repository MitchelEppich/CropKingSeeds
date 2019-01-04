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

import Cart from "./cart";
import Checkout from "./checkout";
import Navigation from "./navigation";
import Shop from "./shop";

const uri = "http://localhost:3000/graphql";

const imports = {
  ...Cart(uri),
  ...Checkout(uri),
  ...Navigation(uri),
  ...Shop(uri)
};

const actionTypes = {
  SET_VISIBLE_SCREEN: "SET_VISIBLE_SCREEN",
  SET_CHECKOUT_SCREEN: "SET_CHECKOUT_SCREEN",
  SET_HOVER_ID: "SET_HOVER_ID",
  SET_GENE_HOVER_INDEX: "SET_GENE_HOVER_INDEX",
  NEXT_BANNER_SLIDE: "NEXT_BANNER_SLIDE",
  SET_STRAINS: "SET_STRAINS",
  SET_CONTEXT: "SET_CONTEXT",
  TOGGLE_STEPS_CHECKOUT: "TOGGLE_STEPS_CHECKOUT",
  SHOW_DIFFERENT_ADDRESS: "SHOW_DIFFERENT_ADDRESS"
};

const actions = {
  setVisibleScreen: input => {
    return {
      type: actionTypes.SET_VISIBLE_SCREEN,
      input: input.input,
      clearAll: input.clearAll
    };
  },
  toggleStepsCheckout: input => {
    return {
      type: actionTypes.TOGGLE_STEPS_CHECKOUT,
      input: input
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
  setHoverId: id => {
    return {
      type: actionTypes.SET_HOVER_ID,
      id: id
    };
  },
  setGeneHoverIndex: index => {
    return {
      type: actionTypes.SET_GENE_HOVER_INDEX,
      index: index
    };
  },
  nextBannerSlide: () => {
    return {
      type: actionTypes.NEXT_BANNER_SLIDE
    };
  },
  getStrains: () => {
    return async dispatch => {
      const link = new HttpLink({ uri, fetch: fetch });
      const operation = { query: query.allStrains };

      await makePromise(execute(link, operation))
        .then(data => {
          let _strains = data.data.allStrains;
          let _new = [];
          for (let strain of _strains) {
            _new.push(inferStrainData(strain));
          }

          console.log(_new);

          Promise.resolve(dispatch(actions.setStrains(_new)));
        })
        .catch(error => console.log(error));
    };
  },
  setStrains: strains => {
    return {
      type: actionTypes.SET_STRAINS,
      strains: strains
    };
  }
};

const query = {
  allStrains: gql`
    query {
      allStrains {
        _id
        name
        price
        strainImg
        packageImg
        description
        effect
        genetic
        yield
        flowerTime
        difficulty
        type
        og
        pthc
        pcbd
        pcbn
        country
        sotiId
        env
      }
    }
  `
};

const mutation = {};

let inferStrainData = strain => {
  let _countries = [
    "Canada",
    "United States",
    "Spain",
    "Netherlands",
    "United Kingdom",
    "South Africa"
  ];
  let _genetics = ["Feminized", "Autoflower", "Regular", "CBD", "Dwarf", "Mix"];
  let _difficulties = ["Easy", "Moderate", "Experienced", "Master"];
  let _envs = ["Indoors or Outdoors", "Indoors", "Outdoors"];
  let _types = ["Sativa", "Indica", "Hybrid"];

  let { country, difficulty, genetic, type, env, pcbd, pcbn, pthc } = strain;
  let _yield = strain.yield;
  country = (() => {
    let str = "";
    do {
      let _countryIndex = country.shift();
      let _countriesLeft = country.length;

      str += _countries[_countryIndex];

      if (_countriesLeft > 1) str += ", ";
      else if (_countriesLeft == 1) str += " and ";
    } while (country.length > 0);
    return str;
  })();
  difficulty = _difficulties[difficulty];
  genetic = _genetics[genetic];
  type = _types[type];
  env = _envs[env];
  let cbd = (() => {
    let _max = pcbd[pcbd.length - 1];
    if (_max >= 2) return "high";
    return "low";
  })();
  let thc = (() => {
    let _max = pthc[pthc.length - 1];
    if (_max >= 15) return "high";
    return "low";
  })();

  pcbd = pcbd.map(a => `${a.toFixed(2)}%`).join("-");
  pcbn = pcbn.map(a => `${a.toFixed(2)}%`).join("-");
  pthc = pthc.map(a => `${a.toFixed(2)}%`).join("-");
  _yield = (() => {
    let arr = [];
    do {
      let _output = _yield.shift();
      if (_output != -1) {
        if (_yield.length == 1) _output = `${_output}g Indoors`;
        else _output = `${_output}g Outdoors`;
      }
      arr.push(_output);
    } while (_yield.length > 0);
    return arr;
  })();

  return {
    ...strain,
    country,
    difficulty,
    genetic,
    type,
    env,
    pthc,
    pcbd,
    pcbn,
    yield: _yield,
    cbd,
    thc
  };
};

export default {
  // TYPES
  ...actionTypes,
  // IMPORTS
  ...imports,
  // ACTIONS
  ...actions
};
