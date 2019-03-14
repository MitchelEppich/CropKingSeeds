import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
  sections: {
    Introduction: {
      subheadings: [
        {
          name: "Hello!",
          content:
            "Welcome to the new and improved Crop King Seeds. There are many new features and improvements that have been introduced to our site that we hope you’ll enjoy. These documents are meant as a reference guide for understanding and learning how to use the new site efficiently."
        },
        {
          name: "Reporting issues",
          content:
            "As this is a new website we are doing our best to ensure it is bug free, but should you find any issues or have any questions; please don’t hesitate to reach out to us through our contact form. Select “Bug/Issue” in the subject dropdown and then proceed to fill out the form. We appreciate your help and support!"
        }
      ]
    },
    Cart: {
      subheadings: [
        {
          name: "Access",
          content:
            "The cart can be accessed by clicking the shopping cart icon in the menu on the top right of your screen. Upon clicking the icon the cart will slide out from the right. To close the cart click the double arrow icon in the top left of the cart itself."
        }
        // { name: "Layout", content: "" },
        // { name: "Subtotal", content: "" },
        // { name: "Clear", content: "" },
        // { name: "Items", content: "" },
        // { name: "Hide cart", content: "" },
        // { name: "Modifying Items", content: "" },
        // { name: "Checkout", content: "" }
      ]
    },
    "Checkout Process": {
      subheadings: [
        {
          name: "Access",
          content:
            "The checkout page can be accessed in 2 different ways: Open the cart and click the checkout button at the bottom of the cart. || Click the “Buy Now” button when viewing a product in the shop or product detail page."
        },
        {
          name: "Products review",
          content:
            "The first step lists all the products you are about to purchase and allows you to adjust this list if need be. Here you can also add any coupon codes you may have. The subtotal is calculated in the bottom right, above the “Next” button to proceed to the next step."
        },
        {
          name: "Shipping Details",
          content:
            "This step requires you to fill out your shipping details. Once your details are filled out, shipping methods will populate below for you to select. You will not be able to process your order without selecting a shipping method. Profiles: CKS allows you to save user profiles to your local machine for later use.This keeps your information private and secure, only accessible on your machine, while allowing you to fill out your order details quickly. When you begin filling out your Shipping Details, CKS will detect if you have any saved profiles that match your current details.The “Load Profile” button will become active when a match has been found allowing you to click and select a profile from the drop down list. You can modify profiles in the dropdown or delete all profiles in the bottom left corner of this step.CKS saves your profile by default, if you do not want your profile saved on your computer deselect the option in the top right corner."
        },
        {
          name: "Billing Details",
          content:
            "This step can be skipped if your billing details are the same as your shipping details. If your billing details are different from your shipping details, select the option in the top left corner and proceed to fill out the form as you did on the previous step."
        },
        {
          name: "Payment",
          content:
            "This is the final and most important step. Review your order details in the three windows at the top. If there are any mistakes, go back and correct them in the previous steps. Once you verify that the information is correct, you will be able to select a payment method from the options below. For more information on payments see the “Payments(LINK)” section of this documentation."
        }
      ]
    },
    "Compare Page": {
      subheadings: [
        {
          name: "Access",
          content:
            "This page allows you to compare the details of each strain with up to 4 other strains. As this page is primarily meant for our Customer Service Representatives, it can only be accessed by typing in the following url: www.cropkingseeds.com/compare"
        },
        {
          name: "Search",
          content:
            "In the top left of the compare page you can enter in any keywords to narrow down your search for the strains you want to compare."
        },
        {
          name: "filters",
          content:
            "Commonly used keywords have been pre-built into filter buttons at the top of the page. Selecting one of these will fill the compare table with 5 of the top strains matching this filter."
        },
        {
          name: "Menu",
          content:
            "All our strains are listed in the menu on the left, alphabetically and categorized. Strains are highlighted and marked with a check when selected."
        },
        {
          name: "Product Details",
          content:
            "The details of each selected strain become listed in the compare table on the right, with the appropriate labels for each detail on the left. At the bottom of each selected strain are actions.You can view the individual products page, copy the link to the product page or add/ remove the product from your cart."
        }
      ]
    },
    Payment: {
      subheadings: [
        {
          name: "Payment Methods",
          content:
            "CKS accepts 5 different payment methods depending on your region: 'Cash','Credit Card','E - Transfer','Bitcoin or Cryptocurrencies','Moneygram'"
        },
        { name: "Cash", content: "" },
        { name: "Credit Card", content: "" },
        { name: "E-Transfer", content: "" },
        { name: "Bitcoin or other Cryptocurrencies", content: "" },
        { name: "Moneygram", content: "" }
      ]
    },
    "Product Page": {
      subheadings: [
        {
          name: "Access",
          content:
            "Each product has its own page and can be accessed by clicking its link on the shop page or by typing in www.cropkingseeds.com/product/name-of-strain (where “name-of-strain” is replaced by the name of the strain you’re looking for with each word separated by hyphens, ie www.cropkingseeds.com/product/haze-xtreme-regular)"
        },
        {
          name: "Strains Menu",
          content:
            "When viewing a products individual page you can access a menu of all our strains on the left of the screen via the “strains” tab. This allows you to switch between viewing different strains as quickly as possible."
        },
        {
          name: "Details",
          content:
            "The product page has all the necessary information pertaining to the strain you are viewing. It has an “add-to-cart” module to allow you to add/remove the item from your cart or buy it immediately with the buy now button. It has colorful graphs laying out the stats and details of the strain, a row of strains frequently bought together and the review section. "
        }
      ]
    },
    Shop: {
      subheadings: [
        {
          name: "Search",
          content:
            "CKS has a search bar at the top of every page in the menu. You can use it to search terms or keywords to help you find the right strains. Upon entering your search term, you are re-routed to the shop page with the results of your search output below."
        },
        {
          name: "Filters",
          content:
            "The CKS shop page has a detailed filter section on the left hand side of the page or the top if you’re on mobile. The filters are sorted into categories and can be toggled on and off upon clicking them. The whole filter section can be hidden by clicking the top heading. Active filters are listed above the strains at the top of the page."
        },
        {
          name: "Sorting",
          content:
            "The strains shown in the shop page can be sorted using the dropdown in the top left of the page, beside the “active filters” section. There are 10 different ways to sort strains and they can be applied with active filters or search results. "
        },
        {
          name: "Products",
          content:
            "Each product listed in the shop page expands when hovering over it or by clicking it (if you’re on mobile). The expanded card has the following details pertaining to the selected strain. Label: The label includes the name of the strain, genetic qualities, the strains review average, flower time and average yield. Add to cart: You can select a seed quantity(5, 10, 25) and add it to your cart with the “add to cart” button. To view the products individual page, click the name of the strain in the label section."
        },

        {
          name: "Featured Strains",
          content:
            "CKSs’ featured strains are listed in a special section on the left sidebar below the filters ection and banner ad. Click one of the strains to view its product page."
        }
      ]
    },
    "Tips And Tricks": {
      subheadings: [
        { name: "Fastest Way to Load Up Your Cart", content: "" },
        { name: "Quick Access Strains Menu", content: "" },
        { name: "Buy Now", content: "" },
        { name: "Category Links on Homepage", content: "" },
        { name: "News & Events", content: "" },
        { name: "Newsletter Subscriptions", content: "" }
      ]
    }
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
