import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
    questions: [
        {
            question: "Who can buy Crop King Seeds?",
            answer:
                "Exercitation esse quis non sunt ullamco laborum ad anim dolore fugiat nostrud dolore commodo. Proident veniam id Lorem do elit quis aute cupidatat veniam irure pariatur. Aliquip dolore reprehenderit anim aliquip nostrud in labore dolore laboris nulla aliquip ipsum exercitation. Aute aliquip ut sit ut proident qui aute velit officia culpa fugiat deserunt. Sit ea officia eiusmod ad pariatur quis anim sit non laborum irure est consequat. Aliqua excepteur culpa mollit culpa adipisicing pariatur duis mollit laboris laboris in cupidatat nostrud cupidatat. Enim proident sunt labore quis sint eiusmod et quis eu amet Lorem."
        },
        {
            question: "How old do I have to be to buy seeds?",
            answer:
                "Quis est consequat magna id dolore. Id mollit nisi velit cillum minim labore minim culpa. Exercitation sit aliqua consectetur voluptate pariatur do magna consequat ex non ex ex consequat in. Id tempor veniam mollit ea esse sit sunt qui consequat aute tempor sint incididunt. Cillum proident ullamco velit sunt aliqua sint eu ex. Exercitation esse fugiat in nisi commodo laboris ea cillum elit reprehenderit exercitation. Fugiat occaecat dolore anim ea incididunt sint nisi dolor officia consequat."
        },
        {
            question: "How do we package and ship your Crop King Seeds?",
            answer:
                "Elit id proident tempor eu. Sit veniam ut consequat occaecat pariatur ad veniam culpa quis dolor. Aliqua esse aliqua occaecat nostrud exercitation non. Ea dolor voluptate non mollit excepteur exercitation mollit labore ut. Eiusmod sint consectetur anim mollit voluptate veniam. Officia fugiat ut proident mollit veniam labore pariatur labore excepteur. Minim anim ullamco non veniam irure laborum exercitation nulla non ad aliqua cupidatat voluptate exercitation."
        },
        {
            question: "Can you have seeds delivered without the authentic packaging?",
            answer:
                "Aliquip culpa cillum occaecat nostrud ad excepteur duis. Cupidatat anim quis duis tempor nisi magna id eu do ad eu ad. Do irure occaecat anim sunt adipisicing ea fugiat aliqua ea consequat. Ad tempor anim irure et. Esse magna id nulla anim nisi sit ullamco sit magna."
        },
        {
            question: "What are our shipping options?",
            answer:
                "Adipisicing aliqua aliqua qui ipsum incididunt deserunt aute laborum amet fugiat incididunt velit mollit in. Quis tempor sit in ullamco incididunt amet Lorem enim ea irure est nostrud officia fugiat. Ea minim elit eiusmod aliquip ex non mollit commodo dolore excepteur pariatur. Aute ullamco officia et id ex."
        },
        {
            question: "What is the price of shipping? And what are appropriate delivery times?",
            answer:
                "Consectetur excepteur irure qui magna. Nostrud aute pariatur minim proident id incididunt et excepteur duis veniam aliquip. Incididunt esse duis anim mollit elit elit fugiat ipsum labore culpa veniam veniam occaecat. Nostrud labore cupidatat consectetur fugiat occaecat ea ex tempor non est nulla nostrud non nisi. Velit id enim duis velit ut. Duis mollit sint amet nisi pariatur cupidatat nostrud commodo non. Laborum exercitation non nostrud ut sit."
        },
        {
            question: "Which payment methods are accepted?",
            answer:
                "Eu velit velit elit voluptate. Sunt duis amet tempor qui velit qui do ipsum nisi dolore do consectetur proident aliqua. Sunt esse irure incididunt aute proident consequat culpa fugiat esse duis nisi magna. Culpa nisi veniam deserunt veniam ullamco. Cillum duis reprehenderit et incididunt non consectetur."
        },
        {
            question: "What currency is used to purchase seeds?",
            answer:
                "In magna ut culpa enim aliqua sit officia ullamco velit dolore. Cillum magna culpa tempor elit consectetur ipsum consequat aliqua labore esse ea commodo. Minim sit anim excepteur nostrud ut eiusmod fugiat. Consectetur consectetur incididunt minim qui qui commodo anim culpa minim ad ipsum. Aute incididunt aliqua nisi labore aliqua consectetur sunt elit et. Quis reprehenderit laboris occaecat reprehenderit ea minim et deserunt. Voluptate ad et deserunt culpa tempor commodo veniam anim officia nisi in culpa enim."
        }
    ],
    currentlyExpanded: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_FAQ_QUESTION:
            return updateObject(state, {
                currentlyExpanded: state.currentlyExpanded == action.index ? null : action.index
            });
        default:
            return state;
    }
};
