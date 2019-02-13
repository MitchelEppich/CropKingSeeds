/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import BannerCarousel from "../components/sections/bannerCarousel";
import GenePreview from "../components/sections/genePreview";
import Post from "../components/sections/post";
import News from "../components/sections/news";
import Carousel from "../components/sections/germination/carousel";

import moment from "moment";

class Index extends Component {
  componentWillMount() {
    this.props.getBanners();
    this.props.getStrains();
    // this.runLoop(5000, this.props.nextBannerSlide);
  }
  componentDidMount() {
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

  newsStepper = () => {
    if (moment().diff(this.props.misc.currentEventUpdatedAt, "seconds") > 5) {
      this.props.setCurrentEvent({
        index: this.props.misc.currentEventObj + 1,
        currentEventObj: this.props.misc.currentEventObj,
        events: this.props.misc.featuredNews
      });
    }
  };

  componentWillUnmount() {
    clearInterval(this.props.misc.newsTimeout);
  }

  render() {
    return (
      <Layout {...this.props}>
        {this.props.misc.strains != null ? (
          <React.Fragment>
            <BannerCarousel {...this.props} />
            <GenePreview {...this.props} />
            {/* <Post {...this.props} /> */}
            <div className="pt-8">
              <h2 className="text-3xl font-bold text-center uppercase w-full p-2 bg-grey-light text-white mb-4">
                Germination
              </h2>
              <Carousel {...this.props} />
            </div>
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
    quickAddToCartQty: input => dispatch(actions.quickAddToCartQty(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
