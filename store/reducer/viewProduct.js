import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
    currentProduct: null,
    currentImage: 0,
    showFullDescription: false,
    newRating: null,
    quantity: [1, 1, 1],
    review: {},
    reviewCursor: 0,
    ratingFilter: null,
    imageZoom: false,
    showStrainsMenu: false
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
        case actionTypes.SET_STATE_LIGHTBOX:
            return updateObject(state, {
                isOpenLightbox: !state.isOpenLightbox
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
        case actionTypes.TOGGLE_IMAGE_ZOOM:
            return updateObject(state, { imageZoom: action.bool });
        case actionTypes.TOGGLE_STRAINS_MENU:
            return updateObject(state, { showStrainsMenu: action.bool });
        default:
            return state;
    }
};
