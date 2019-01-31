import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  menuPosition: 0,
  pages: [
    {
      options: [
        {
          name: "articles",
          options: [
            {
              name: "new article",
              options: ["create", "edit", "publish", "delete"]
            },
            {
              name: "categories",
              options: ["create", "update", "delete"]
            },
            { name: "Article 1", options: [] }
          ]
        },
        {
          name: "reports",
          options: ["sales", "orders", "popular"]
        }
      ]
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_NEW_ARTICLE:
      return updateObject(state, { newArticle: !state.newArticle });
    case actionTypes.APPEND_PAGE:
      return updateObject(state, { pages: [...state.pages, action.option] });
    case actionTypes.REMOVE_PAGE:
      state.pages.pop();
      return updateObject(state, {});
    case actionTypes.NEXT_PAGE:
      return updateObject(state, { menuPosition: state.menuPosition + 1 });
    case actionTypes.BACK_PAGE:
      return updateObject(state, { menuPosition: state.menuPosition - 1 });
    default:
      return state;
  }
};
