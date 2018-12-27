/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Header from "../components/partials/header" 
import BannerCarousel from "../components/sections/bannerCarousel" 
import GenePreview from "../components/sections/genePreview"
import Post from "../components/sections/post"
import Footer from "../components/partials/footer"


class Index extends Component {
  render() {
    return (
      <Layout>
        {/* <div className="example">Base Project</div> */}
        <BannerCarousel />
        <GenePreview />
        <Post />
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
