// lib imports
import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Head from "next/head";
// custom imports
import Layout from "../HOC/Layout";
import About from "../components/sections/about";

class Index extends Component {
  render() {
    return (
      <Layout {...this.props}>
        <Head>
          <title>
            Buy Feminized &amp; Autoflowering Cannabis Seeds - Crop King Seeds
          </title>
          <meta name="robots" content="index, follow" />
        </Head>
        <div className="pt-0 min-h-500">
          <About {...this.props} />
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    setCurrentHistoryObj: index => dispatch(actions.setCurrentHistoryObj(index))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
