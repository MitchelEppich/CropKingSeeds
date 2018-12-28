/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import BannerCarousel from "../components/sections/bannerCarousel" ;
import GenePreview from "../components/sections/genePreview";
import Post from "../components/sections/post";

class Index extends Component {
  
  componentWillMount(){
    this.props.getStrains();
  }

  render() {

    return (
      <Layout>
        {this.props.misc.strains != null ?
          <React.Fragment>
            <BannerCarousel {...this.props} />
            <GenePreview {...this.props} />
            <Post />
          </React.Fragment>
        :
          <p>Loading...</p>
        }
        
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    setGeneHoverIndex: index => dispatch(actions.setGeneHoverIndex(index)),
    nextBannerSlide: () => dispatch(actions.nextBannerSlide()),
    getStrains: () => dispatch(actions.getStrains())
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
