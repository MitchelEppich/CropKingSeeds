/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import Head from "next/head";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import About from "../components/sections/about";
import Media from "../components/sections/media";
import News from "../components/sections/news";
import { initGA, logPageView } from "../scripts/ga";

class Index extends Component {
  componentDidMount() {
    initGA();
    logPageView();
    this.props.getAllNews();
  }

  render() {
    return (
      <Layout {...this.props}>
        {/* <Head>
          <title>
            Buy Feminized &amp; Autoflowering Cannabis Seeds - Crop King Seeds
          </title>
          <meta name="robots" content="index, follow" />
        </Head> */}
        <div className="pt-0 min-h-500">
          <Media {...this.props} />
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    getAllNews: () => dispatch(actions.getAllNews()),
    setCurrentEvent: input => dispatch(actions.setCurrentEvent(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
