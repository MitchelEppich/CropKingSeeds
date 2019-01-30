import "../scss/home.scss";
import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Menu from "../components/sections/cms/menu";

class Index extends Component {
    render() {
        return (
            <div className="pt-12 pb-12 pl-64 bg-red-light text-white w-full h-full min-h-screen">
                <Menu {...this.props} />
                <div className="bg-white shadow-lg ml-48 w-5/6 min-h-screen text-red-light">
                    {this.props.cms.newArticle ? <div>New article</div> : <div>All articles</div>}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
        toggleNewArticle: () => dispatch(actions.toggleNewArticle()),
        appendPage: option => dispatch(actions.appendPage(option)),
        removePage: option => dispatch(actions.removePage(option)),
        nextPage: () => dispatch(actions.nextPage())
    };
};

export default connect(
    state => state,
    mapDispatchToProps
)(withData(Index));
