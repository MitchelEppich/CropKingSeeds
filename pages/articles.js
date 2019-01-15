/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import ArticleSlider from "../components/sections/articles/slider";
import SmArticles from "../components/sections/articles/previews/smArticles";
import LgArticles from "../components/sections/articles/previews/lgArticles";
import ArticleList from "../components/sections/articles/articleList";
import MdArticles from "../components/sections/articles/previews/mdArticles";
import CategoriesList from "../components/sections/articles/categories";

class Index extends Component {
  render() {
    return (
      <Layout>
        <div className=" w-full mx-auto relative">
          <ArticleSlider {...this.props} />
          <div
            style={{ marginTop: "-150px" }}
            className="inline-flex w-full absolute">
            <SmArticles {...this.props} src="SMimage-1.jpg" />
            <SmArticles {...this.props} src="SMimage-2.jpg" />
            <SmArticles {...this.props} src="SMimage-3.jpg" />
          </div>
          <div style={{ paddingTop: "415px", background: "#f1f1f1" }}>
            <LgArticles {...this.props} />
          </div>
          <div className="w-full mt-24 inline-flex">
            <div className="w-2/5">
              <ArticleList {...this.props} />
            </div>
            <div className="w-3/5">
              <MdArticles {...this.props} />
            </div>
          </div>
          <div className="inline-flex w-full mt-12">
            <SmArticles {...this.props} src="SMimage-2.jpg" />
            <SmArticles {...this.props} src="SMimage-3.jpg" />
            <SmArticles {...this.props} src="SMimage-1.jpg" />
          </div>
          <div className="inline-flex w-full mt-12 mb-10 pb-12">
            <CategoriesList {...this.props} />
          </div>
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
