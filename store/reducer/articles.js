import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  //static data will be put on server
  list: {
    Article: [
      {
        body:
          "As Canadians are now in the third month of cannabis legalization and Americans are quickly gaining access state by state, Crop King Seeds would like to give...",
        category: "Article",
        //TO BE CHANGED OBVIOUSLY
        date: Date.now(),
        imageUrl:
          "https://www.skunkmagazine.com/wp-content/uploads/2019/02/CKWords-696x739.png",
        location: null,
        locationUrl: null,
        sponsored: false,
        title: " Choice:Our 5 Ultimate and Bestselling Strains with High THC",
        url:
          "https://www.skunkmagazine.com/the-kings-choiceour-5-ultimate-and-bestselling-strains-with-high-thc/"
      },
      {
        body:
          "As Canadians are now in the third month of cannabis legalization and Americans are quickly gaining access state by state, Crop King Seeds would like to give...",
        category: "Article",
        //TO BE CHANGED OBVIOUSLY
        date: Date.now(),
        imageUrl:
          "https://www.skunkmagazine.com/wp-content/uploads/2019/02/CKWords-696x739.png",
        location: null,
        locationUrl: null,
        sponsored: false,
        title: "The Kings Choice:Our 5 Uestselling Strains with High THC",
        url:
          "https://www.skunkmagazine.com/the-kings-choiceour-5-ultimate-and-bestselling-strains-with-high-thc/"
      },
      {
        body:
          "As Canadians are now in the third month of cannabis legalization and Americans are quickly gaining access state by state, Crop King Seeds would like to give...",
        category: "Article",
        //TO BE CHANGED OBVIOUSLY
        date: Date.now(),
        imageUrl:
          "https://www.skunkmagazine.com/wp-content/uploads/2019/02/CKWords-696x739.png",
        location: null,
        locationUrl: null,
        sponsored: false,
        title: "The Kings Choice:Ou Bestselling Strains with High THC",
        url:
          "https://www.skunkmagazine.com/the-kings-choiceour-5-ultimate-and-bestselling-strains-with-high-thc/"
      },
      {
        body:
          "As Canadians are now in the third month of cannabis legalization and Americans are quickly gaining access state by state, Crop King Seeds would like to give...",
        category: "Article",
        //TO BE CHANGED OBVIOUSLY
        date: Date.now(),
        imageUrl:
          "https://www.skunkmagazine.com/wp-content/uploads/2019/02/CKWords-696x739.png",
        location: null,
        locationUrl: null,
        sponsored: false,
        title: "The Kings Cns with High THC",
        url:
          "https://www.skunkmagazine.com/the-kings-choiceour-5-ultimate-and-bestselling-strains-with-high-thc/"
      },
      {
        body:
          "As Canadians are now in the third month of cannabis legalization and Americans are quickly gaining access state by state, Crop King Seeds would like to give...",
        category: "Article",
        //TO BE CHANGED OBVIOUSLY
        date: Date.now(),
        imageUrl:
          "https://www.skunkmagazine.com/wp-content/uploads/2019/02/CKWords-696x739.png",
        location: null,
        locationUrl: null,
        sponsored: false,
        title: "The Kingsith High THC",
        url:
          "https://www.skunkmagazine.com/the-kings-choiceour-5-ultimate-and-bestselling-strains-with-high-thc/"
      },
      {
        body:
          "As Canadians are now in the third month of cannabis legalization and Americans are quickly gaining access state by state, Crop King Seeds would like to give...",
        category: "Article",
        //TO BE CHANGED OBVIOUSLY
        date: Date.now(),
        imageUrl:
          "https://www.skunkmagazine.com/wp-content/uploads/2019/02/CKWords-696x739.png",
        location: null,
        locationUrl: null,
        sponsored: false,
        title: "The High THC",
        url:
          "https://www.skunkmagazine.com/the-kings-choiceour-5-ultimate-and-bestselling-strains-with-high-thc/"
      }
    ]
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
