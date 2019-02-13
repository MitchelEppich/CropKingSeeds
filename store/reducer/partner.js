import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
    partners: [
        {
            name: "Advanced Nutrients",
            tag: "Hydroponic Nutrients",
            imgUrl: "../../static/img/partners/advanced-nutrients.jpg"
        },
        {
            name: "Chief Greenbud",
            tag: "Music",
            imgUrl: "../../static/img/partners/chief-greenbud.jpg"
        },
        {
            name: "The Medtainer",
            tag: "Cannabis Storage",
            imgUrl: "../../static/img/partners/the-medtainer.jpg"
        },
        {
            name: "THC University",
            tag: "Cannabis Education",
            imgUrl: "../../static/img/partners/thc-university.jpg"
        },
        {
            name: "BC Northern Lights",
            tag: "Grow Boxes",
            imgUrl: "../../static/img/partners/bc-northern-lights.jpg"
        },
        {
            name: "Green Planet",
            tag: "Hydroponic Nutrients",
            imgUrl: "../../static/img/partners/green-planet-nutrients.jpg"
        },
        {
            name: "Dorm Grow",
            tag: "Grow Boxes",
            imgUrl: "../../static/img/partners/dorm-grow.jpg"
        },
        {
            name: "Ideal 420 Soil",
            tag: "Cannabis Education",
            imgUrl: "../../static/img/partners/ideal-420-soil.jpg"
        },
        {
            name: "Cannabis Classic",
            tag: "Cannabis Events",
            imgUrl: "../../static/img/partners/cannabis-classic.jpg"
        },
        {
            name: "All Bud",
            tag: "Cannabis Information",
            imgUrl: "../../static/img/partners/allbud.jpg"
        },
        {
            name: "Cannabis Connects Global",
            tag: "Cannabis Directory",
            imgUrl: "../../static/img/partners/cannabis-connects-global.jpg"
        },
        {
            name: "Cannabis Education",
            tag: "Cannabis Education",
            imgUrl: "../../static/img/partners/cannabis-education.jpg"
        },
        {
            name: "Cannabis Training",
            tag: "Cannabis Education",
            imgUrl: "../../static/img/partners/cannabis-training.jpg"
        },
        {
            name: "Chronic Magazine",
            tag: "Cannabis Media",
            imgUrl: "../../static/img/partners/chronic-magazine.jpg"
        },
        {
            name: "Chrontainer",
            tag: "Cannabis Storage",
            imgUrl: "../../static/img/partners/chrontainer.jpg"
        },
        {
            name: "Doobster",
            tag: "Cannabis Delivery",
            imgUrl: "../../static/img/partners/doobster.jpg"
        },
        {
            name: "Lush Light",
            tag: "Grow Lights",
            imgUrl: "../../static/img/partners/lush-lighting.jpg"
        },
        {
            name: "OCN Garden Center",
            tag: "Cannabis Education",
            imgUrl: "../../static/img/partners/ocn-garden-center.jpg"
        },
        {
            name: "ProGrowTech",
            tag: "Cannabis Growing",
            imgUrl: "../../static/img/partners/pro-grow-tech.jpg"
        },
        {
            name: "Pro Max Grow",
            tag: "Grow Lights",
            imgUrl: "../../static/img/partners/pro-max-grow.jpg"
        },
        {
            name: "Sky High Products",
            tag: "Cannabis Accessories",
            imgUrl: "../../static/img/partners/sky-high-products.jpg"
        },
        {
            name: "Stoner Joe The Bunny",
            tag: "Cannabis Media",
            imgUrl: "../../static/img/partners/stoner-joe-bunny.jpg"
        },
        {
            name: "Store My Cannabis",
            tag: "Cannabis Media",
            imgUrl: "../../static/img/partners/store-my-cannabis.jpg"
        },
        {
            name: "Weed Hire",
            tag: "Cannabis Jobs",
            imgUrl: "../../static/img/partners/weedhire.jpg"
        }
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
