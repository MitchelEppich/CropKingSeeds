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
  showStrainsMenu: false,
  moreInfo: [
    "Gelato Feminized Marijuana Strain - Growing, THC & CBD Content, Yield, Flowering Time and Other Information",
    "Gelato is a cross breed between Mint Girl Scout Cookies, with another strain, Sunset Sherbet.The resulting strain was actually unexpected.",
    "This well- balanced hybrid is indica dominant.What is amazing though, is that despite its leaning towards its indica side, it offers energizing and uplifting effects.",
    "The THC content of this strain is recorded at 27 %, which is on the higher end of the scale.This means that this strain is perfect for those who would like to enjoy weed that lasts long.It also requires just a few buds to consume before experiencing its strong effects.",
    "Thanks to its indica dominance, this strain only grows to a manageable height.In fact, it grows short to medium in stature, which means that it is suited for those who are planning to grow this strain in an indoor setup and do not have enough head space.",
    "During the entire growing process, you can easily observe the beauty of this strain.The buds are really stunning.At the start of growing, you may encounter difficulties, since getting the seeds or the clones is quite challenging.If you purchase from Crop King Seeds, you can have access to these rare seeds.",
    "It should also be noted that this strain is not that friendly to cultivators.Still, it can thrive well both indoors and outdoors, provided that you are using the right techniques.Monitoring the process is also essential.In an indoor setup, using a grow tent proves to be the ideal method because it is easier to monitor, and adjusting the temperature and condition of the setup is also possible.For this strain to flourish, the environment should be kept humid and warm.",
    "The flowering period is usually around 8 to 9 weeks.The yield may vary, though it is at least above average.This means that you can expect to see the fruits of your labor as soon as the buds are ready for harvest."
  ]
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
      return updateObject(state, { imageZoom: action.isImageZoomed });
    case actionTypes.TOGGLE_STRAINS_MENU:
      return updateObject(state, {
        showStrainsMenu: action.isStrainsMenuVisible
      });
    default:
      return state;
  }
};
