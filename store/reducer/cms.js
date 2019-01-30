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
                            options: [
                                <input className="w-4/5 h-8 bg-white" />,
                                <input className="w-4/5 h-8 bg-white" />,
                                <button>SAVE</button>,
                                <button>PUBLISH</button>,
                                <button>DELETE</button>
                            ]
                        },
                        { name: "Article 1", options: [] },
                        { name: "Article 2", options: [] },
                        { name: "Article 3", options: [] },
                        { name: "Article 4", options: [] },
                        { name: "Article 5", options: [] }
                    ]
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
        default:
            return state;
    }
};
