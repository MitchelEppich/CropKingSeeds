// lib imports
import React, { Component } from "react";
import { connect } from "react-redux";
// custom imports
import withData from "../lib/withData";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import ArticlePage from "../components/sections/articlePage";

class Index extends Component {
  componentDidUpdate() {
    let url = document.getElementById("copyArticleLink");
    if (url == null) return;
    url.addEventListener("click", () => {
      let link = document.querySelector("#articleLinkText");
      link.select();
      document.execCommand("copy");
      alert("Link copied successfully!");
    });
  }

  render() {
    return (
      <Layout>
        {this.props.misc.strains != null &&
        this.props.misc.strains.length > 0 ? (
          <div className="">
            <ArticlePage {...this.props} />
            <input
              id="articleLinkText"
              className="opacity-0 cursor-default"
              value={
                "localhost:3000/product/" +
                this.props.article.currentArticle.name
                  .toLowerCase()
                  .replace(/ /g, "-")
              }
            />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    setHoverId: (id, turnOn) => dispatch(actions.setHoverId(id, turnOn)),
    quickAddToCartQty: input => dispatch(actions.quickAddToCartQty(input)),
    modifyCart: input => dispatch(actions.modifyCart(input)),
    modifyPotentialQuantity: input =>
      dispatch(actions.modifyPotentialQuantity(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
