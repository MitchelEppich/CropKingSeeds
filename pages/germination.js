import React, { Component } from "react";
import withData from "../lib/withData";
import Head from "next/head";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Germination from "../components/sections/germination";
import { initGA, logPageView } from "../scripts/ga";

class Index extends Component {
  componentDidMount() {
    initGA();
    logPageView();
  }
  render() {
    return (
      <Layout {...this.props}>
        {/* <Head>
          <title className="">Germination</title>
          <meta name="robots" content="index, follow" />
        </Head> */}
        <div className="pt-0">
          <Germination {...this.props} />
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    changeStep: input => dispatch(actions.changeStep(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
