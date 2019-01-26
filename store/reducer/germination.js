import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
    carousel: {
        steps: [
            {
                image: "../static/img/hemp-seeds.jpg",
                icon: "../static/icons/germination/1.png",
                instruction:
                    "Drop your seeds into a glass half full of spring water. Let them soak between 15-18 hours from the time you drop them into the water. Do not soak them beyond this time because it is possible to drown your seeds."
            },
            {
                image: "../static/img/LGimage-1.jpg",
                icon: "../static/icons/germination/2.png",
                instruction:
                    "Dampen a plain, thick paper towel with spring water and place on a ceramic plate. Place the seeds on the damp paper towel and fold the paper towel over the top of the seeds. Pour off any excess water."
            },
            {
                image: "../static/img/SMimage-1.jpg",
                icon: "../static/icons/germination/3.png",
                instruction:
                    "Place seeds in a dark area without any light until the seeds open, which depending on the strain, may take up to 7 days. Check every 5-12 hours to make sure the towel is still moist. Spray with spring water if needed. Be patient and attentive."
            }
        ],
        currentStep: 0,
        sm: {
            positions: ["translateX(0rem)", "translateX(calc(-100vw))", "translateX(calc(-200vw))"],
            width: "calc(300vw - 6rem)"
        },
        md: {
            positions: [
                "translateX(calc(-3.75rem)",
                "translateX(calc(-100vw - 1.75rem))",
                "translateX(calc(-200vw + 0.25rem))"
            ],
            width: "calc(300vw - 6rem)"
        },
        lg: {
            positions: ["translateX(303px)", "translateX(-582px)", "translateX(-1467px)"],
            width: "2100px"
        },
        xl: {
            positions: ["translateX(245px)", "translateX(-725px)", "translateX(-1695px)"],
            width: "2700px"
        },
        xxl: {
            positions: ["translateX(335px)", "translateX(-865px)", "translateX(-2065px)"],
            width: "3600px"
        }
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_STEP:
            return updateObject(state, { carousel: { ...state.carousel, currentStep: action.step } });
        default:
            return state;
    }
};
