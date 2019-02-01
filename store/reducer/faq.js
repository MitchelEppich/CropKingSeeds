import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
    questions: [
        {
            question: "How do we package and ship your Crop King Seeds?",
            answer:
                "Crop King Seeds come in special packaging that is sealed for freshness.  All of our orders are shipped discreetly and with complete privacy"
        },
        {
            question: "Can you have seeds delivered without the authentic packaging?",
            answer:
                "Authentic Crop King Seeds packaging can only be sent to Canadian customers. We are unable to send empty packaging separately to other countries."
        },
        {
            question: "What is the price of shipping? And what are appropriate delivery times?",
            answer: [
                "A. $10 Regular Shipping Canada: 2 – 7 business days depending on your area.Remote areas are up to 7 days.Large cities and cities closer to Vancouver can be 2 – 5 days. USA: Up to 2 weeks. International: All countries except Australia and New Zealand are required to pay $30.00 shipping.Australia and New Zealand can take up to 3 weeks.We will not be responsible for seized merchandise to Australia or New Zealand.",
                "B.$30 or $60 Express Registered with Tracking Guaranteed Delivery with insurance, depending on country of destination. 5-7 business days within North America.No Signature Required Importing seeds to some countries can be difficult.Approximately 5% of our orders are seized.Choosing the $30 or $60 Express shipping option guarantees delivery of your order; in case of seizure by customs we will reship.Only $10 Regular shipping fee applies to Australia and New Zealand. ",
                "NOTE: Regular parcel shipments within Canada can take 5-10 days to be delivered.Express shipments take 2-5 days for delivery, and come with a free grinder."
            ]
        },
        {
            question: "Which payment methods are accepted?",
            answer:
                "We accept US and Canadian dollars, Visa, Mastercard and Bitcoin.  We accept Interac E-Transfers for Canadians Only. Our mailing address is provided upon check-out"
        },
        {
            question: "What currency is used to purchase seeds?",
            answer:
                "The prices for our seeds displayed are in US dollars. If you are a Canadian customer you are charged the amount displayed in Canadian dollars. Since we are a global company we choose to process in US dollars for all orders outside Canada."
        },
        {
            question: "Who can buy Crop King Seeds?",
            answer:
                "We ship to all countries. Canadian customers receive seeds in our original packaging. Customers from all other countries receive seeds inside random objects such as pens, flashlights, birthday cards and other items. Anyone can buy our seeds as long as they are over 19 years of age. Only authentic Crop King Seeds are found inside our famous packaging. Be careful of knock-offs"
        },
        {
            question: "How do you know we wont keep your money and not send your seeds?",
            answer:
                "We have spent 12 years building our company and the seed business is all about word-of-mouth referrals.  We have no interest in keeping your money.  We will make more money by ensuring you are delivered a quality product, so you can tell your friends and family."
        },
        {
            question: "Where is Crop King Seeds located and is our privacy guaranteed?",
            answer:
                "Our main office is in Vancouver, British Columbia, on the West coast of Canada.  We do not keep a record of your credit card number on file. We do not sell email addresses either."
        },
        {
            question: "How can my store/company become a distributor of Crop King Seeds?",
            answer:
                "We are always looking for new retail distributors for Crop King Seeds.  You will find that your customers will come back to buy more packs directly from you.   Contact us with information about your store and why you would like to be a distributor."
        },
        {
            question: "Do we have a retail location to buy Crop King Seeds in person?",
            answer:
                "Yes, Crop King Seeds are sold in many retail and online stores.  Please look through our list of stores provided in the website banner to find a retail location closest to you."
        },
        {
            question: "What is the best method to germinate Crop King Seeds?",
            answer:
                "The best method for germinating seeds is the cup of water & paper towel method. For detailed instructions, See the germination page on this website to learn how to germinate Crop King Seeds."
        },
        {
            question: "What is the Crop King Guarantee?",
            answer:
                "At Crop King Seeds we stand by our product. Our seeds are inspected, tested and handpicked to be mature and viable. Each strain differs somewhat in size, shape and colour. Some seeds such as White Widow will actually be paler in appearance, or “white”, which is completely normal. An immature seed is green in colour or has a husk still attached to it. The guarantee is for germination only and does not extend to growing in your choice of medium such as soil."
        },
        {
            question: "Can a feminized seed turn out to be male or hermaphrodite?",
            answer:
                "Yes, in rare circumstances this can happen. On average it is about 1 in 1000. This is caused by stress during the germination process. Always watch your plants carefully for characteristics of hermaphrodism. If you do begin to see such traits, move the plant to another room or dispose of it immediately to ensure you do not seed out your own plants or those of your neighbours."
        }
    ],
    currentlyExpanded: null,
    searchValue: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_FAQ_QUESTION:
            return updateObject(state, {
                currentlyExpanded: state.currentlyExpanded == action.index ? null : action.index
            });
        case actionTypes.SET_FAQ_SEARCH:
            return updateObject(state, {
                searchValue: action.value
            });
        default:
            return state;
    }
};
