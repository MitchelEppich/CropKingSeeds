import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  currentHistoryObj: 0,
  historyObjs: [
    {
      imgSrc: "../static/img/about/1.jpg",
      content:
        "The idea for Crop King Seeds forms. Starting out with one employee shipping from an apartment, selling for a year. In 2005 operations are put on hold",
      date: "2014"
    },
    {
      imgSrc: "../static/img/about/2.jpg",

      content:
        "Crop King employees travel around the world and tour the best cannabis farms to select and grow our seed genetics. Within the next month we had developed our website, packaging and began marketing ourselves to the public",
      date: "December 2012 - January 2013"
    },
    {
      imgSrc: "../static/img/about/3.jpg",
      content:
        "A need for a storefront was in high demand by our customers, thus the opening of our first Crop King Seeds office on Hastings Street in Vancouver. The smaller sized office reflected the humble beginnings of the company, with dreams to expand in the future",
      date: "November 1, 2013"
    },
    {
      imgSrc: "../static/img/about/4.jpg",
      content:
        "The spread of Crop King Seeds lands us our 100th location in Nova Scotia, a new office with 2 full time employees and the development of a 24 hour customer service line. To top it off, we participated in our first trade show, the “Green Rush Financial Conference” and won a prize for best booth!",
      date: "June 27, 2014"
    },
    {
      imgSrc: "../static/img/about/5.jpg",
      content:
        "Crop King Seeds sponsors the Trailer Park Boys movie. When the Boys visited the Kush Cup Canada show (sponsored by Crop King) we got the chance to hang out with the cannabis icons in person.",
      date: "February, 2015"
    },
    {
      imgSrc: "../static/img/about/6.jpg",
      content:
        "Our “White Cookies” strain (White Widow + Girl Guide Cookies) makes the ‘Top 10 Strains of 2015’ featured in the High Times Magazine. ",
      date: "December, 2015"
    },
    {
      imgSrc: "../static/img/about/7.jpg",
      content:
        "Crop King Seeds is growing fast with booths at dozens of trade shows and entertaining people with our very own Crop King Seeds mascot.",
      date: "2016"
    },
    {
      imgSrc: "../static/img/about/8.jpg",
      content:
        "Crop King Seeds is growing fast with booths at dozens of trade shows and entertaining people with our very own Crop King Seeds mascot",
      date: "2016"
    },
    {
      imgSrc: "../static/img/about/1.jpg",
      content:
        "We are progressively growing both as a company and worldwide. With almost 40 strains available, 24 hour customer service, and our trusted satisfaction guarantee, Crop King Seeds continues to be a leader in the expanding cannabis industry. ",
      date: "Today"
    }
  ],
  whoWeAre: [
    {
      title: "Our Seeds",
      content:
        "Proident voluptate labore sunt anim. Ad nostrud in ut voluptate laborum cillum qui ea commodo do. Proident voluptate labore sunt anim.",
      src: "../static/img/about/who/1.jpg"
    },
    {
      title: "Our Service",
      content:
        "Laboris eiusmod aute cupidatat dolore sunt sunt adipisicing non reprehenderit. Pariatur ex anim eiusmod est in ut minim minim non aute. Id culpa consectetur Lorem dolor veniam esse et minim aliquip pariatur esse aliqua sit.",
      src: "../static/img/about/who/2.jpg"
    },
    {
      title: "Our Mission",
      content:
        "Cillum sint aliqua sint et aute. Enim eiusmod aliqua adipisicing consequat culpa dolore nisi do. Ad veniam sunt veniam do minim in anim.",
      src: "../static/img/about/who/3.jpg"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_HISTORYOBJ:
      return updateObject(state, {
        currentHistoryObj: action.index
      });

    default:
      return state;
  }
};
