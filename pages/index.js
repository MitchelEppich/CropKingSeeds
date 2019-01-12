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

class Index extends Component {
    componentWillMount() {
        this.props.getStrains();
        // this.runCarousel(5000, this.props.nextBannerSlide);
    }

    runCarousel(delay, callback) {
        var loop = function() {
            callback();
            setTimeout(loop, delay);
        };
        loop();
    }

    render() {
        return (
            <Layout>
                {this.props.misc.strains != null ? (
                    <React.Fragment>
                        <BannerCarousel {...this.props} />
                        <GenePreview {...this.props} />
                        <Post {...this.props} />
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
        nextBannerSlide: () => dispatch(actions.nextBannerSlide()),
        toggleTransitionStatus: () => dispatch(actions.toggleTransitionStatus()),
        getStrains: () => dispatch(actions.getStrains()),
        toggleFilter: input => dispatch(actions.toggleFilter(input))
    };
};

export default connect(
    state => state,
    mapDispatchToProps
)(withData(Index));
