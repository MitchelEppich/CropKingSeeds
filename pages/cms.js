import "../scss/home.scss";
import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Menu from "../components/sections/cms/menu";
import ArticleItem from "../components/sections/cms/articleItem";
import AllArticles from "../components/sections/cms/allArticles";
import AddNewArticle from "../components/sections/cms/addNewArticle";

class Index extends Component {
  render() {
    return (
      <div className="pt-8 pb-8 pl-64 overflow-auto bg-grey-lightest text-white w-full h-full min-h-screen">
        <Menu {...this.props} />
        <div className="bg-white shadow-lg ml-48 w-5/6 pb-8 h-full text-red-light">
          {console.log(this.props.cms)}
          {this.props.cms.pages[2] ? (
            <div className="w-full text-center">
              <AddNewArticle {...this.props} />
            </div>
          ) : (
            <div className="w-full text-center">
              <AllArticles {...this.props} />
            </div>
          )}
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
    nextPage: () => dispatch(actions.nextPage()),
    backPage: () => dispatch(actions.backPage())
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
