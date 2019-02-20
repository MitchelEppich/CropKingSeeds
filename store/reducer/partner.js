import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  partners: [
    {
      name: "Advanced Nutrients",
      tag: "Hydroponic Nutrients",
      imgUrl: "/partners/advanced-nutrients.jpg"
    },
    {
      name: "Chief Greenbud",
      tag: "Music",
      imgUrl: "/partners/chief-greenbud.jpg"
    },
    {
      name: "The Medtainer",
      tag: "Cannabis Storage",
      imgUrl: "/partners/the-medtainer.jpg"
    },
    {
      name: "THC University",
      tag: "Cannabis Education",
      imgUrl: "/partners/thc-university.jpg"
    },
    {
      name: "BC Northern Lights",
      tag: "Grow Boxes",
      imgUrl: "/partners/bc-northern-lights.jpg"
    },
    {
      name: "Green Planet",
      tag: "Hydroponic Nutrients",
      imgUrl: "/partners/green-planet-nutrients.jpg"
    },
    {
      name: "Dorm Grow",
      tag: "Grow Boxes",
      imgUrl: "/partners/dorm-grow.jpg"
    },
    {
      name: "Ideal 420 Soil",
      tag: "Cannabis Education",
      imgUrl: "/partners/ideal-420-soil.jpg"
    },
    {
      name: "Cannabis Classic",
      tag: "Cannabis Events",
      imgUrl: "/partners/cannabis-classic.jpg"
    },
    {
      name: "All Bud",
      tag: "Cannabis Information",
      imgUrl: "/partners/allbud.jpg"
    },
    {
      name: "Cannabis Connects Global",
      tag: "Cannabis Directory",
      imgUrl: "/partners/cannabis-connects-global.jpg"
    },
    {
      name: "Cannabis Education",
      tag: "Cannabis Education",
      imgUrl: "/partners/cannabis-education.jpg"
    },
    {
      name: "Cannabis Training",
      tag: "Cannabis Education",
      imgUrl: "/partners/cannabis-training.jpg"
    },
    {
      name: "Chronic Magazine",
      tag: "Cannabis Media",
      imgUrl: "/partners/chronic-magazine.jpg"
    },
    {
      name: "Chrontainer",
      tag: "Cannabis Storage",
      imgUrl: "/partners/chrontainer.jpg"
    },
    {
      name: "Doobster",
      tag: "Cannabis Delivery",
      imgUrl: "/partners/doobster.jpg"
    },
    {
      name: "Lush Light",
      tag: "Grow Lights",
      imgUrl: "/partners/lush-lighting.jpg"
    },
    {
      name: "OCN Garden Center",
      tag: "Cannabis Education",
      imgUrl: "/partners/ocn-garden-center.jpg"
    },
    {
      name: "ProGrowTech",
      tag: "Cannabis Growing",
      imgUrl: "/partners/pro-grow-tech.jpg"
    },
    {
      name: "Pro Max Grow",
      tag: "Grow Lights",
      imgUrl: "/partners/pro-max-grow.jpg"
    },
    {
      name: "Sky High Products",
      tag: "Cannabis Accessories",
      imgUrl: "/partners/sky-high-products.jpg"
    },
    {
      name: "Stoner Joe The Bunny",
      tag: "Cannabis Media",
      imgUrl: "/partners/stoner-joe-bunny.jpg"
    },
    {
      name: "Store My Cannabis",
      tag: "Cannabis Media",
      imgUrl: "/partners/store-my-cannabis.jpg"
    },
    {
      name: "Weed Hire",
      tag: "Cannabis Jobs",
      imgUrl: "/partners/weedhire.jpg"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
