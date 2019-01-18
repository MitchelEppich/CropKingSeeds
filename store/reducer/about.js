import actionTypes from "../actions";
import { updateObject } from "../utility";

const initialState = {
    currentHistoryObj: 0,
    historyObjs: [
        {
            imgSrc: "../static/img/about/1.jpg",
            content:
                "Commodo est commodo reprehenderit officia proident amet ea dolore eiusmod ea aute tempor veniam id. Ullamco deserunt esse pariatur duis elit non laboris reprehenderit aliquip cillum. Et cupidatat fugiat aute cupidatat tempor Lorem culpa officia dolor sit voluptate est. Ea deserunt mollit elit tempor veniam tempor esse culpa aliqua nisi. Occaecat culpa consectetur ut reprehenderit et officia mollit et nostrud ex eiusmod adipisicing Lorem. Deserunt ut Lorem eiusmod duis. Nulla consequat cupidatat id proident labore adipisicing exercitation esse.",
            date: 20040420
        },
        {
            imgSrc: "../static/img/about/2.jpg",
            content:
                "Ipsum elit labore est magna anim. Qui elit est incididunt aliquip minim. Nisi consectetur dolor aute Lorem. Excepteur eiusmod id consequat id id. Laborum ullamco commodo esse minim adipisicing elit ut id voluptate pariatur irure ullamco dolor velit. Nulla culpa ad in incididunt culpa ea aliquip dolor. Exercitation et quis duis aute.",
            date: 20040420
        },
        {
            imgSrc: "../static/img/about/3.jpg",
            content:
                "Veniam ex enim id aute occaecat amet culpa dolore cupidatat irure magna consectetur est do. Minim incididunt voluptate nostrud duis occaecat sunt reprehenderit cillum in in quis esse sint. Aute et aliqua eu sit tempor qui elit dolore ad nulla aute. Officia adipisicing labore cupidatat id. Magna dolore ipsum laborum est cupidatat eu dolor duis magna voluptate nisi magna.",
            date: 20040420
        },
        {
            imgSrc: "../static/img/about/4.jpg",
            content:
                "Sit incididunt eu enim voluptate enim tempor. Elit est dolore elit ipsum id. Ut nulla proident mollit exercitation aliquip pariatur.",
            date: 20040420
        },
        {
            imgSrc: "../static/img/about/1.jpg",
            content:
                "Cupidatat tempor culpa voluptate id qui eiusmod anim Lorem anim occaecat ipsum. Voluptate incididunt officia anim mollit ex adipisicing aute laboris duis minim adipisicing. Ipsum amet sint velit ea reprehenderit tempor aute laborum et reprehenderit dolor ea. Reprehenderit quis eiusmod id voluptate aliqua enim mollit pariatur laboris ad.",
            date: 20040420
        },
        {
            imgSrc: "../static/img/about/2.jpg",
            content:
                "Magna deserunt cillum aliqua qui culpa id aliquip occaecat dolore proident in. Aute in ea occaecat incididunt. Magna veniam laboris id dolore qui cupidatat in non Lorem sint et ipsum nulla. Magna culpa consequat quis culpa enim consectetur laborum cupidatat minim mollit ut in.",
            date: 20040420
        },
        {
            imgSrc: "../static/img/about/3.jpg",
            content:
                "Enim fugiat minim excepteur velit velit mollit reprehenderit officia enim. Mollit commodo minim ad labore cupidatat consequat aute nulla cupidatat consequat id exercitation. Do nisi ullamco et et anim dolore non aute ea eiusmod pariatur.",
            date: 20040420
        },
        {
            imgSrc: "../static/img/about/4.jpg",
            content:
                "Aute sit aute nulla nisi aute cupidatat pariatur excepteur aute eu ad excepteur. Cupidatat adipisicing et cillum minim officia excepteur qui irure pariatur culpa esse cupidatat cillum. Ex sit do velit fugiat id ipsum nisi. Reprehenderit tempor ex culpa aliqua velit ut minim labore nostrud consectetur qui mollit. Excepteur consequat id fugiat qui cupidatat eu nulla minim duis ea voluptate. Ut officia laboris exercitation dolor dolore amet eiusmod non fugiat.",
            date: 20040420
        },
        {
            imgSrc: "../static/img/about/1.jpg",
            content:
                "Officia nulla labore exercitation proident laborum incididunt. Cillum officia sit et dolore quis consequat. Aliqua ipsum ullamco et ad. Veniam ad fugiat fugiat id proident Lorem cupidatat laborum nisi labore eiusmod officia anim nulla. Irure magna do ipsum est ea qui ad irure nulla adipisicing Lorem consequat irure laborum. Culpa minim occaecat reprehenderit cillum culpa cupidatat. Deserunt dolor irure quis commodo sint.",
            date: 20040420
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
