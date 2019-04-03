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
          "Fold a thick paper towel free from perfumes/dyes and position it on top of the plate."
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
        "translateX(calc(103vw))",
        "translateX(calc(2vw))",
        "translateX(calc(-100vw))",
        "translateX(calc(-200vw))",
        "translateX(calc(-300vw))"
      ],
      width: "calc(300vw - 6rem)"
    },
    md: {
      positions: [
        "translateX(calc(0px)",
        "translateX(calc(-400px))",
        "translateX(calc(-800px))",
        "translateX(calc(-1200px))",
        "translateX(calc(-1600px))"
      ],
      width: "2000px",
      height: "44%"
    },
    lg: {
      positions: [
        "translateX(265px)",
        "translateX(-620px)",
        "translateX(-1500px)",
        "translateX(-2390px)",
        "translateX(-3270px)"
      ],
      width: "3860px"
    },
    xl: {
      positions: [
        "translateX(65px)",
        "translateX(-910px)",
        "translateX(-1885px)",
        "translateX(-2860px)",
        "translateX(-3835px)"
      ],
      width: "4880px"
    },
    xxl: {
      positions: [
        "translateX(145px)",
        "translateX(-1045px)",
        "translateX(-2255px)",
        "translateX(-3455px)",
        "translateX(-4645px)"
      ],
      width: "6000px"
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
