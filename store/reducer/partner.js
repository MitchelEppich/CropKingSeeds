import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {    
  partners : [
      {
        name: "Advanced Nutrients",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: "Hydroponic Nutrients",
        imgUrl: "../../static/img/partners/advanced-nutrients.jpg"
      },
      {
        name: "Chief Greenbud",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: "Music",
        imgUrl: "../../static/img/partners/chief-greenbud.jpg"
      },
      {
        name: "The Medtainer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: "Cannabis Storage",
        imgUrl: "../../static/img/partners/the-medtainer.jpg"
      },
      {
        name: "THC University",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: "Cannabis Education",
        imgUrl: "../../static/img/partners/thc-university.jpg"
      },
      {
        name: "BC Northern Lights",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: "Grow Boxes",
        imgUrl: "../../static/img/partners/bc-northern-lights.jpg"
      },
      {
        name: "Green Planet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: "Hydroponic Nutrients",
        imgUrl: "../../static/img/partners/green-planet-nutrients.jpg"
      },
      {
        name: "Dorm Grow",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: "Grow Boxes",
        imgUrl: "../../static/img/partners/dorm-grow.jpg"
      },
      {
        name: "Ideal 420 Soil",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: "Cannabis Education",
        imgUrl: "../../static/img/partners/ideal-420-soil.jpg"
      },      
      {
        name: "Cannabis Classic",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: "Cannabis Events",
        imgUrl: "../../static/img/partners/cannabis-classic.jpg"
      },      
      {
        name: "All Bud",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: "Cannabis Information",
        imgUrl: "../../static/img/partners/allbud.jpg"
      },      
      {
        name: "Cannabis Connects Global",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: "Cannabis Directory",
        imgUrl: "../../static/img/partners/cannabis-connects-global.jpg"
      },      
      {
        name: "Cannabis Education",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: "Cannabis Education",
        imgUrl: "../../static/img/partners/cannabis-education.jpg"
      },      
      {
        name: "Cannabis Training",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: "Cannabis Education",
        imgUrl: "../../static/img/partners/cannabis-training.jpg"
      },      
      {
        name: "Chronic Magazine",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: "Cannabis Media",
        imgUrl: "../../static/img/partners/chronic-magazine.jpg"
      },      
      {
        name: "Chrontainer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: "Cannabis Storage",
        imgUrl: "../../static/img/partners/chrontainer.jpg"
      },      
      {
        name: "Doobster",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: "Cannabis Delivery",
        imgUrl: "../../static/img/partners/doobster.jpg"
      },      
      {
        name: "Lush Light",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: "Grow Lights",
        imgUrl: "../../static/img/partners/lush-lighting.jpg"
      },      
      {
        name: "OCN Garden Center",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: "Cannabis Education",
        imgUrl: "../../static/img/partners/ocn-garden-center.jpg"
      },      
      {
        name: "ProGrowTech",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: "Cannabis Growing",
        imgUrl: "../../static/img/partners/pro-grow-tech.jpg"
      },      
      {
        name: "Pro Max Grow",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: "Grow Lights",
        imgUrl: "../../static/img/partners/pro-max-grow.jpg"
      },      
      {
        name: "Sky High Products",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: "Cannabis Accessories",
        imgUrl: "../../static/img/partners/sky-high-products.jpg"
      },      
      {
        name: "Stoner Joe The Bunny",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: "Cannabis Media",
        imgUrl: "../../static/img/partners/stoner-joe-bunny.jpg"
      },      
      {
        name: "OCN Garden Center",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: "Gardening",
        imgUrl: "../../static/img/partners/ocn-garden-center.jpg"
      },      
      {
        name: "Store My Cannabis",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: "Cannabis Media",
        imgUrl: "../../static/img/partners/store-my-cannabis.jpg"
      },      
      {
        name: "Weed Hire",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tag: "Cannabis Jobs",
        imgUrl: "../../static/img/partners/weedhire.jpg"
      },      
  ]
  
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
