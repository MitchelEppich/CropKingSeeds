import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
    currentProduct: null,
    currentImage: 0,
    showFullDescription: false,
    newRating: null,
    quantity: [1, 1, 1],
    fbt: [
        {
            cbd: "low",
            country: "Spain and Netherlands",
            description:
                "This mixed pack of autoflowering feminized seeds is perfect for the indecisive grower. Not sure what autoflowering strain is right for you? Why not try them all? We’ve included all of our nine autoflowering strains all in one convenient mixed pack of 10 or 25 seeds. Autoflowers are great for novice growers because they are low maintenance and quick to harvest. Now you can try them all, indoor or out. The height of the plants will vary from Dwarf 18 inches to around 3ft or slightly taller. These strains all finish around the same time 7-8 weeks, so it’s great to grow the mix together or a few at a time. The levels of THC and CBD will cover the spectrum, from low to moderate to high. The resultant effects will vary but is mostly mellow indica. It’s the perfect opportunity for you to try all of Crop King Seeds autoflowering feminized strains in one order. We hope you enjoy watching your garden grow.",
            difficulty: "Easy",
            effect: [],
            env: "Indoors or Outdoors",
            flowerTime: "9 Weeks Max",
            genetic: "Mix",
            name: "Autoflower Cannabis Seeds Mix",
            og: [],
            packageImg: "../static/img/cks-package.png",
            pcbd: "0.10%-0.90%",
            pcbn: "0.30%-4.20%",
            price: [60, 100, 200],
            pthc: "10.85%-24.00%",
            sotiId: "AFM",
            strainImg: "../static/img/cannabis-plant.png",
            thc: "high",
            type: "Indica",
            yield: ["100g Indoors", "250g Outdoors"],
            _id: "5c2675cf16232255bc1399a6"
        },
        {
            cbd: "low",
            country: "Spain and Netherlands",
            description:
                "This mixed pack of autoflowering feminized seeds is perfect for the indecisive grower. Not sure what autoflowering strain is right for you? Why not try them all? We’ve included all of our nine autoflowering strains all in one convenient mixed pack of 10 or 25 seeds. Autoflowers are great for novice growers because they are low maintenance and quick to harvest. Now you can try them all, indoor or out. The height of the plants will vary from Dwarf 18 inches to around 3ft or slightly taller. These strains all finish around the same time 7-8 weeks, so it’s great to grow the mix together or a few at a time. The levels of THC and CBD will cover the spectrum, from low to moderate to high. The resultant effects will vary but is mostly mellow indica. It’s the perfect opportunity for you to try all of Crop King Seeds autoflowering feminized strains in one order. We hope you enjoy watching your garden grow.",
            difficulty: "Easy",
            effect: [],
            env: "Indoors or Outdoors",
            flowerTime: "9 Weeks Max",
            genetic: "Mix",
            name: "Autoflower Cannabis Seeds Mix",
            og: [],
            packageImg: "../static/img/cks-package.png",
            pcbd: "0.10%-0.90%",
            pcbn: "0.30%-4.20%",
            price: [60, 100, 200],
            pthc: "10.85%-24.00%",
            sotiId: "AFM",
            strainImg: "../static/img/cannabis-plant.png",
            thc: "high",
            type: "Indica",
            yield: ["100g Indoors", "250g Outdoors"],
            _id: "5c2675cf16232255bc1399a69999"
        },
        {
            cbd: "low",
            country: "Spain and Netherlands",
            description:
                "This mixed pack of autoflowering feminized seeds is perfect for the indecisive grower. Not sure what autoflowering strain is right for you? Why not try them all? We’ve included all of our nine autoflowering strains all in one convenient mixed pack of 10 or 25 seeds. Autoflowers are great for novice growers because they are low maintenance and quick to harvest. Now you can try them all, indoor or out. The height of the plants will vary from Dwarf 18 inches to around 3ft or slightly taller. These strains all finish around the same time 7-8 weeks, so it’s great to grow the mix together or a few at a time. The levels of THC and CBD will cover the spectrum, from low to moderate to high. The resultant effects will vary but is mostly mellow indica. It’s the perfect opportunity for you to try all of Crop King Seeds autoflowering feminized strains in one order. We hope you enjoy watching your garden grow.",
            difficulty: "Easy",
            effect: [],
            env: "Indoors or Outdoors",
            flowerTime: "9 Weeks Max",
            genetic: "Mix",
            name: "Autoflower Cannabis Seeds Mix",
            og: [],
            packageImg: "../static/img/cks-package.png",
            pcbd: "0.10%-0.90%",
            pcbn: "0.30%-4.20%",
            price: [60, 100, 200],
            pthc: "10.85%-24.00%",
            sotiId: "AFM",
            strainImg: "../static/img/cannabis-plant.png",
            thc: "high",
            type: "Indica",
            yield: ["100g Indoors", "250g Outdoors"],
            _id: "5c2675cf16232255bc1399a6242"
        },
        {
            cbd: "low",
            country: "Spain and Netherlands",
            description:
                "This mixed pack of autoflowering feminized seeds is perfect for the indecisive grower. Not sure what autoflowering strain is right for you? Why not try them all? We’ve included all of our nine autoflowering strains all in one convenient mixed pack of 10 or 25 seeds. Autoflowers are great for novice growers because they are low maintenance and quick to harvest. Now you can try them all, indoor or out. The height of the plants will vary from Dwarf 18 inches to around 3ft or slightly taller. These strains all finish around the same time 7-8 weeks, so it’s great to grow the mix together or a few at a time. The levels of THC and CBD will cover the spectrum, from low to moderate to high. The resultant effects will vary but is mostly mellow indica. It’s the perfect opportunity for you to try all of Crop King Seeds autoflowering feminized strains in one order. We hope you enjoy watching your garden grow.",
            difficulty: "Easy",
            effect: [],
            env: "Indoors or Outdoors",
            flowerTime: "9 Weeks Max",
            genetic: "Mix",
            name: "Autoflower Cannabis Seeds Mix",
            og: [],
            packageImg: "../static/img/cks-package.png",
            pcbd: "0.10%-0.90%",
            pcbn: "0.30%-4.20%",
            price: [60, 100, 200],
            pthc: "10.85%-24.00%",
            sotiId: "AFM",
            strainImg: "../static/img/cannabis-plant.png",
            thc: "high",
            type: "Indica",
            yield: ["100g Indoors", "250g Outdoors"],
            _id: "5c2675cf16232255bc1399a61234"
        }
    ],
    reviews: [
        {
            image: "../static/img/autoflower.png",
            name: "Juicy J",
            rating: 5,
            comment:
                "Irure do sunt fugiat voluptate deserunt reprehenderit excepteur. Veniam id officia voluptate anim labore amet minim ut. Reprehenderit anim ullamco labore exercitation laboris ullamco elit aliqua cupidatat laborum in occaecat. Ipsum anim ad aliqua laboris non proident duis velit quis magna ut veniam labore pariatur. Non culpa elit adipisicing tempor tempor anim dolor ex qui nostrud ea deserunt pariatur."
        },
        {
            image: "../static/img/autoflower.png",
            name: "Wiz Khalifa",
            rating: 5,
            comment:
                "Irure do sunt fugiat voluptate deserunt reprehenderit excepteur. Veniam id officia voluptate anim labore amet minim ut. Reprehenderit anim ullamco labore exercitation laboris ullamco elit aliqua cupidatat laborum in occaecat. Ipsum anim ad aliqua laboris non proident duis velit quis magna ut veniam labore pariatur. Non culpa elit adipisicing tempor tempor anim dolor ex qui nostrud ea deserunt pariatur."
        },
        {
            image: "../static/img/autoflower.png",
            name: "Kid Cudi",
            rating: 5,
            comment:
                "Irure do sunt fugiat voluptate deserunt reprehenderit excepteur. Veniam id officia voluptate anim labore amet minim ut. Reprehenderit anim ullamco labore exercitation laboris ullamco elit aliqua cupidatat laborum in occaecat. Ipsum anim ad aliqua laboris non proident duis velit quis magna ut veniam labore pariatur. Non culpa elit adipisicing tempor tempor anim dolor ex qui nostrud ea deserunt pariatur."
        },
        {
            image: "../static/img/autoflower.png",
            name: "Snoop Dogg",
            rating: 5,
            comment:
                "Irure do sunt fugiat voluptate deserunt reprehenderit excepteur. Veniam id officia voluptate anim labore amet minim ut. Reprehenderit anim ullamco labore exercitation laboris ullamco elit aliqua cupidatat laborum in occaecat. Ipsum anim ad aliqua laboris non proident duis velit quis magna ut veniam labore pariatur. Non culpa elit adipisicing tempor tempor anim dolor ex qui nostrud ea deserunt pariatur."
        }
    ],
    review: {},
    reviewCursor: 0,
    ratingFilter: null,
    ImageZoom: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_PRODUCT:
            return updateObject(state, { currentProduct: action.input });
        case actionTypes.UPDATE_STRAIN:
            return updateObject(state, {});
        case actionTypes.SET_CURRENT_IMAGE:
            return updateObject(state, { currentImage: action.index });
        case actionTypes.TOGGLE_FULL_DESCRIPTION:
            return updateObject(state, {
                showFullDescription: !state.showFullDescription
            });
        case actionTypes.MODIFY_REVIEW:
            return updateObject(state, { review: action.input });
        case actionTypes.SET_REVIEW_CURSOR:
            return updateObject(state, { reviewCursor: action.input });
        case actionTypes.SET_REVIEW_RATE_FILTER:
            return updateObject(state, {
                ratingFilter: action.input,
                reviewCursor: 0
            });
        case actionTypes.SET_NEW_RATING:
            return updateObject(state, { newRating: action.index });
        case actionTypes.SET_IMAGE_ZOOM:
            return updateObject(state, { ImageZoom: action.imz });
        default:
            return state;
    }
};
