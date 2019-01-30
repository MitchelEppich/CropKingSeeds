import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  currentHistoryObj: 0,
  historyObjs: [
    {
      imgSrc: "../static/img/about/CKSCOVERREAL.jpg",
      title: "Packaging and printing materials",
      content:
        "We design and have our state of the art unique packaging so that we can begin selling to retailers and individuals across Canada.",
      date: "20130105"
    },
    {
      imgSrc: "../static/img/about/hemp-roots.jpg",
      title: "Our first location",
      content:
        "Crop King gets its first location in Calgary, Alberta Canada called “Hemp Roots” they make their initial first purchase and continue to be one of our best retailers with monthly refill orders and happy customers returning to try a new strain.",
      date: "20130115"
    },
    {
      imgSrc: "../static/img/about/Vancouver_Dominion_Building1.jpg",
      title: "Open our office in Downtown Vancouver",
      content:
        "Our customers kept asking us if they could buy in person from our own store so we decided to get our own office at the Dominion building on Hastings Street in Vancouver. Its small and all we need until we can afford to expand. Hopefully we will get a larger office but this is great for now..",
      date: "20131101"
    },
    {
      imgSrc: "../static/img/about/magazine-1024x718.jpg",
      title: "Magazine & Newspaper Advertising",
      content:
        "We begin purchasing print advertising in major magazines and websites. People now start to realize that Crop King is here to stay and is poised to grow our brand in all markets around the world.",
      date: "20131130"
    },
    {
      imgSrc: "../static/img/about/Poster-12x18.jpg",
      title: "10 new strains released",
      content:
        "Crop King releases 10 new strains including Auto Flowering & our Dwarf Low Flyer. This completes our line of world class strains where we can now start entering our strains into 420 competitions.",
      date: "20131201"
    },
    {
      imgSrc: "../static/img/about/420.jpg",
      title: "Tent for 420 event",
      content:
        "We invest in a custom Crop King Tent for outdoor events. We use it at the art gallery for the 420 event on April 20th.",
      date: "20140420"
    },
    {
      imgSrc: "../static/img/about/11937914_1177191535631131_748491331_n.jpg",
      title: "World’s First Marijuana Vehicle Wrap",
      content:
        "Crop King Seeds is happy to introduce the first ever vehicle wrap cruising all over Denver, Colorado in partnership with IBake Radio.",
      date: "20150220"
    },
    {
      imgSrc:
        "../static/img/about/Our-White-Cookies-made-it-to-Hightimes-top-10-strains-of-2015.jpg",
      title: "High Times Magazine Top 10 Strains of 2015",
      content: "We released new strains to our seeds line.",
      date: "20151221"
    },
    {
      imgSrc: "../static/img/about/White-Cookies.jpg",
      title: "Announcement Partnership with Grow420guide Channel",
      content:
        "Crop King Seeds is announcing a partnership with the world’s largest Youtube channel for growing marijuana. Grow 420 Guide. For years, this large growing channel has featured the best advice for growing techniques from beginners to advanced growers. They will be growing our strains and helping people learn along the way. This will also add to our forum traffic the very best growers to help you optimize your grow show.",
      date: "20160112"
    }
  ],
  whoWeAre: [
    {
      title: "Our Seeds",
      content:
        "Proident voluptate labore sunt anim. Ad nostrud in ut voluptate laborum cillum qui ea commodo do. Proident voluptate labore sunt anim.",
      src: "../static/img/about/1.jpg"
    },
    {
      title: "Our Service",
      content:
        "Laboris eiusmod aute cupidatat dolore sunt sunt adipisicing non reprehenderit. Pariatur ex anim eiusmod est in ut minim minim non aute. Id culpa consectetur Lorem dolor veniam esse et minim aliquip pariatur esse aliqua sit.",
      src: "../static/img/about/2.jpg"
    },
    {
      title: "Our Mission",
      content:
        "Cillum sint aliqua sint et aute. Enim eiusmod aliqua adipisicing consequat culpa dolore nisi do. Ad veniam sunt veniam do minim in anim.",
      src: "../static/img/about/3.jpg"
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
