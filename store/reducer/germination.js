import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
    steps: [
        {
            image: "../static/img/hemp-seeds.jpg",
            instruction:
                "Drop your seeds into a glass half full of spring water. Let them soak between 15-18 hours from the time you drop them into the water. Do not soak them beyond this time because it is possible to drown your seeds."
        },
        {
            image: "../static/img/LGimage-1.jpg",
            instruction:
                "Dampen a plain, thick paper towel with spring water and place on a ceramic plate. Place the seeds on the damp paper towel and fold the paper towel over the top of the seeds. Pour off any excess water."
        },
        {
            image: "../static/img/SMimage-1.jpg",
            instruction:
                "Place seeds in a dark area without any light until the seeds open, which depending on the strain, may take up to 7 days. Check every 5-12 hours to make sure the towel is still moist. Spray with spring water if needed. Be patient and attentive."
        }
    ],
    currentStep: 0,
    carouselPositions: ["translateX(660px)", "translateX(-865px)", "translateX(-2390px)"],
    xxLCarouselPositions: ["translateX(660px)", "translateX(-865px)", "translateX(-2390px)"]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_STEP:
            return updateObject(state, { currentStep: action.step });
        default:
            return state;
    }
};
