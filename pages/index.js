// lib
import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
// custom
import withData from "../lib/withData";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import BannerCarousel from "../components/sections/bannerCarousel";
import GenePreview from "../components/sections/genePreview";
import News from "../components/sections/news";
import Carousel from "../components/sections/germination/carousel";
import FeaturedStrains from "../components/sections/featuredStrains";

import registerServiceWorker from "../registerServiceWorker";
class Index extends Component {
  componentWillMount() {
    this.props.getBanners();
    this.props.getStrains();
    // this.runLoop(5000, this.props.nextBannerSlide);
  }
  componentDidMount() {
    registerServiceWorker();
    this.props.setCurrentEvent({
      index: 0,
      currentEventObj: this.props.misc.currentEventObj,
      events: this.props.misc.featuredNews
    });
    if (this.props.misc.newsTimeout == null) {
      let timeout = setInterval(this.newsStepper, 1000);
      this.props.setNewsStepper({ timeout });
    }
  }

  componentWillUnmount() {
    clearInterval(this.props.misc.newsTimeout);
  }

  render() {
    return (
      <Layout {...this.props}>
        {this.props.misc.strains != null && this.props.misc.banners != null ? (
          <React.Fragment>
            <BannerCarousel {...this.props} />
            <GenePreview {...this.props} />
            <News {...this.props} />
          </React.Fragment>
        ) : (
          <p className="text-transparent text-4xl h-500 w-full py-32">
            <span className="text-black">Loading...</span>
          </p>
        )}
      </Layout>
    );
  }
  newsStepper = () => {
    if (moment().diff(this.props.misc.currentEventUpdatedAt, "seconds") > 5) {
      this.props.setCurrentEvent({
        index: this.props.misc.currentEventObj + 1,
        currentEventObj: this.props.misc.currentEventObj,
        events: this.props.misc.featuredNews
      });
    }
  };
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
    setNewsStepper: input => dispatch(actions.setNewsStepper(input)),
    changeStep: changeObj => dispatch(actions.changeStep(changeObj)),
    setCurrentEvent: input => dispatch(actions.setCurrentEvent(input)),
    getStrain: input => dispatch(actions.getStrain(input)),
    setCurrentProduct: input => dispatch(actions.setCurrentProduct(input)),
    quickAddToCartQty: input => dispatch(actions.quickAddToCartQty(input)),
    toggleCartMenu: input => dispatch(actions.toggleCartMenu(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
