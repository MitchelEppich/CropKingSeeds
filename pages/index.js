// lib
import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import Head from "next/head";

// custom
import withData from "../lib/withData";
import actions from "../store/actions";
import Layout from "../HOC/Layout";

import BannerCarousel from "../components/sections/bannerCarousel";
import GenePreview from "../components/sections/genePreview";
import News from "../components/sections/news";
import ExtraContent from "../components/sections/extraContent";

import { initGA, logPageView } from "../scripts/ga";
import generateSiteNavigationMarkup from "../scripts/generateSiteNavigationMarkup";
import siteNavPages from "../scripts/siteNavPages";

class Index extends Component {
  componentWillMount() {
    this.props.getBanners();
    this.props.getAllNews();
  }

  componentDidMount() {
    initGA();
    logPageView();
  }

  render() {
    return (
      <Layout {...this.props}>
        <React.Fragment>
          <Head>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(
                  generateSiteNavigationMarkup(siteNavPages)
                )
              }}
            />
          </Head>
          <BannerCarousel {...this.props} />
          <GenePreview {...this.props} />
          <ExtraContent {...this.props} />
          <News {...this.props} />
        </React.Fragment>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    setGeneHoverIndex: index => dispatch(actions.setGeneHoverIndex(index)),
    changeBannerSlide: input => dispatch(actions.changeBannerSlide(input)),
    toggleTransitionStatus: () => dispatch(actions.toggleTransitionStatus()),
    getStrains: () => dispatch(actions.getStrains()),
    getBanners: () => dispatch(actions.getBanners()),
    toggleFilter: input => dispatch(actions.toggleFilter(input)),
    changeStep: changeObj => dispatch(actions.changeStep(changeObj)),
    getStrain: input => dispatch(actions.getStrain(input)),
    getAllNews: () => dispatch(actions.getAllNews()),
    setCurrentProduct: input => dispatch(actions.setCurrentProduct(input)),
    quickAddToCartQty: (index, quickAddToCartQty, tag) =>
      dispatch(actions.quickAddToCartQty(index, quickAddToCartQty, tag)),
    toggleCartMenu: input => dispatch(actions.toggleCartMenu(input)),
    toggleMute: () => dispatch(actions.toggleMute()),
    modifyPotentialQuantity: input =>
      dispatch(actions.modifyPotentialQuantity(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
