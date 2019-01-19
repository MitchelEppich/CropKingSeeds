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
import About from "./about";
import ViewProduct from "./viewProduct";
import Germination from "./germination";

const uri = "http://localhost:3000/graphql";
// const uri = "http://192.168.0.57:3000/graphql";

const imports = {
    ...Cart(uri),
    ...Checkout(uri),
    ...Navigation(uri),
    ...Shop(uri),
    ...ViewProduct(uri),
    ...Germination(uri),
    ...About(uri)
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
    SHOW_DIFFERENT_ADDRESS: "SHOW_DIFFERENT_ADDRESS",
    SET_AGE_VERIFICATION: "SET_AGE_VERIFICATION",
    SET_MEDIA_SIZE: "SET_MEDIA_SIZE"
};

const actions = {
    setVisibleScreen: input => {
        return {
            type: actionTypes.SET_VISIBLE_SCREEN,
            input: input.input,
            clearAll: input.clearAll
        };
    },
    setMediaSize: input => {
        return {
            type: actionTypes.SET_MEDIA_SIZE,
            input: input.mediaSize
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

        return { type: actionTypes.SET_AGE_VERIFICATION, input: _ageVerification };
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
        return {
            type: actionTypes.SET_HOVER_ID,
            id: id,
            turnOn: turnOn
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
                sativa
                indica
                ruderalis
            }
        }
    `
};

const mutation = {};

let inferStrainData = strain => {
    let _countries = ["Canada", "United States", "Spain", "Netherlands", "United Kingdom", "South Africa"];
    let _genetics = ["Feminized", "Autoflower", "Regular", "CBD", "Dwarf", "Mix"];
    let _difficulties = ["Easy", "Moderate", "Experienced", "Master"];
    let _envs = ["Indoors or Outdoors", "Indoors", "Outdoors"];
    let _types = ["Sativa", "Indica", "Hybrid"];

    let { country, difficulty, genetic, type, env, pcbd, pcbn, pthc, name } = strain;
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
    name = (() => {
        let _name = name;
        _name = _name.replace("Cannabis", "").replace("Seeds", "");
        if (genetic != "Mix") _name = _name.replace(genetic, "");
        else _name = _name.replace("Mix", "Mixed");
        // if (genetic == "CBD") _name = _name.replace("CB", "");
        return _name.replace(/\s+/g, " ").trim();
    })();
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

    //   pcbd = pcbd.map(a => `${a.toFixed(2)}%`).join("-");
    //   pcbn = pcbn.map(a => `${a.toFixed(2)}%`).join("-");
    //   pthc = pthc.map(a => `${a.toFixed(2)}%`).join("-");

    _yield = (() => {
        let arr = [];

        let _combo = (() => {
            let _str;
            let _i = _yield[0];
            let _o = _yield[1];
            if (_i > _o) _str = `${_o}g to ${_i}g *`;
            else if (_i == _o) _str = `${_i}g *`;
            else _str = `${_i}g to ${_o}g *`;
            return _str;
        })();
        do {
            let _output = _yield.shift();
            if (_output != -1) {
                if (_yield.length == 1) _output = `${_output}g Indoors`;
                else _output = `${_output}g Outdoors`;
            }
            arr.push(_output);
        } while (_yield.length > 0);
        arr.push(_combo);
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
        thc,
        name
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
