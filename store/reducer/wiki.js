import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  sections: {
    Introduction: ["Blurb", "Reporting issues"],
    Cart: [
      "Access",
      "Layout",
      "Subtotal",
      "Clear",
      "Items",
      "Hide cart",
      "Modifying Items",
      "Checkout"
    ],
    "Checkout Process": [
      "Products review",
      "Shipping Details",
      "profiles",
      "Billing Details",
      "Payment",
      "Confirmation"
    ],
    "Compare Page": [
      "Access",
      "Search",
      "filters",
      "Menu",
      "Product Details",
      "actions"
    ],
    "Contact Us": ["Subjects", "Details", "Chat with King"],
    Payment: [
      {
        "Payment Methods": [
          "Cash",
          "Credit Card",
          "E-Transfer",
          "Bitcoin or other Cryptocurrencies",
          "Moneygram"
        ]
      }
    ],
    "Product Page": [
      "Access",
      "Strains Menu",
      "Details and Add to cart",
      "Stats"
    ],
    Shop: [
      "Search",
      "Filters",
      "Sorting",
      "Products",
      "Label",
      "Details",
      "Add to cart",
      "Buy now",
      "View Product",
      "Featured Strains"
    ],
    "Tips And Tricks": []
  },
  openOptions: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MENU_OPTION:
      return updateObject(state, { openOptions: action.currentOptions });
    default:
      return state;
  }
};
