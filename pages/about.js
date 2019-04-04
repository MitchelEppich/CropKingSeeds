// lib imports
import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Head from "next/head";
import Router from "next/router";
// custom imports
import Layout from "../HOC/Layout";
import About from "../components/sections/about";
import { initGA, logPageView } from "../scripts/ga";
import generateBreadcrumbMarkup from "../scripts/generateBreadcrumbMarkup";

class Index extends Component {
  componentDidMount() {
    initGA();
    logPageView();
  }
  render() {
    return (
      <Layout {...this.props}>
        <div className="pt-0 min-h-500">
          {typeof document !== "undefined" ? (
            <Head>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(
                    generateBreadcrumbMarkup(Router.asPath)
                  )
                }}
              />
            </Head>
          ) : null}
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
