import React, { Component } from "react";
import withData from "../lib/withData";
import Head from "next/head";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Privacy from "../components/sections/privacy";

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
        <div className="pt-0">
          <Privacy {...this.props} />
        </div>
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
