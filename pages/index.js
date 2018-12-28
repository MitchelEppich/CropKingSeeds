/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import BannerCarousel from "../components/sections/bannerCarousel" 
import GenePreview from "../components/sections/genePreview"
import Post from "../components/sections/post"

class Index extends Component {

  componentDidMount(){
  }

  render() {

   

    return (
      <Layout>
        <BannerCarousel />
        <GenePreview {...this.props} />
        <Post />
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    setGeneHoverIndex: index => dispatch(actions.setGeneHoverIndex(index))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
