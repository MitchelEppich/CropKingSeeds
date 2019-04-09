// lib
import React, { Component } from "react";
import { connect } from "react-redux";
import Head from "next/head";
// custom
import withData from "../lib/withData";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Charts from "../components/sections/charts";
import { initGA, logPageView } from "../scripts/ga";
import generateBreadcrumbMarkup from "../scripts/generateBreadcrumbMarkup";

import Router from "next/router";

class Index extends Component {
  componentDidMount() {
    initGA();
    logPageView();
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    // this.props.modifyPotentialQuantity({
    //   potentialQuantity: this.props.cart.potentialQuantity,
    //   action: "CLEAR"
    // });
  }
  render() {
    return (
      <Layout {...this.props}>
        {typeof document !== "undefined" ? (
          <Head>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(
                  generateBreadcrumbMarkup(this.props.router.asPath)
                )
              }}
            />
          </Head>
        ) : null}
        <div className="pt-1">
          <Charts {...this.props} />
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setChartTag: input => dispatch(actions.setChartTag(input)),
    toggleIsReversed: input => dispatch(actions.toggleIsReversed(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
