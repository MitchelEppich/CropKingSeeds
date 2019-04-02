import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  carousel: {
    steps: [
      {
        image: "../../static/img/germ-1.jpg",
        icon: "/icons/germination/1.png",
        instruction: [
          "Drop your seeds into a glass with 1/2 cup of SPRING water.",
          "Soak them for 15 to 18 hours. Do not over soak because too much water can kill them.",
          "Fold a thick paper towel which is free from perfumes/dyes and position it on top of the plate."
        ]
      },
      {
        image: "../../static/img/germ-2.jpg",
        icon: "/icons/germination/2.png",
        instruction: [
          "Pour the seeds and the water content in the cup of water into the paper towel, draining any excess water by tipping the plate.",
          "Make sure that the seeds have enough space in between. Fold the paper towel to cover the seeds."
        ]
      },
      {
        image: "../../static/img/germ-3.jpg",
        icon: "/icons/germination/2.png",
        instruction: [
          "Leave it in a warm, dark room area and let it set until they open. Check it every 5 to 12 hours to make sure that they are kept moistened (not soaked).",
          "They can be almost dry, just keep them from sticking to the paper towel.",
          "Use a water spray to keep them wet."
        ]
      },
      {
        image: "../../static/img/germ-4.jpg",
        icon: "/icons/germination/3.png",
        instruction: [
          "Do not give up as seeds may take up to 7 days to germinate. Each strain differs. ",
          "Once you see their new taproot, which is about 1/4 to 1/2 inch long, then the germination is complete. "
        ]
      },
      {
        image: "../../static/img/germ-5.jpg",
        icon: "/icons/germination/3.png",
        instruction: [
          "Now is the time for you to transfer your newly germinated sprouts into dirt or rock wool cubes with the taproot facing down."
        ]
      }
    ],
    currentStep: 0,
    sm: {
      positions: [
        "translateX(0rem)",
        "translateX(calc(-100vw))",
        "translateX(calc(-200vw))",
        "translateX(calc(-300vw))",
        "translateX(calc(-400vw))",
        "translateX(calc(-500vw))",
        "translateX(calc(-600vw))"
      ],
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
      positions: [
        "translateX(303px)",
        "translateX(-582px)",
        "translateX(-1467px)"
      ],
      width: "2100px"
    },
    xl: {
      positions: [
        "translateX(245px)",
        "translateX(-725px)",
        "translateX(-1695px)"
      ],
      width: "2700px"
    },
    xxl: {
      positions: [
        "translateX(335px)",
        "translateX(-865px)",
        "translateX(-2065px)"
      ],
      width: "3600px"
    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_STEP:
      return updateObject(state, {
        carousel: { ...state.carousel, currentStep: action.step }
      });
    default:
      return state;
  }
};
