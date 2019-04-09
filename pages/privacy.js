import React, { Component } from "react";
import withData from "../lib/withData";
import Head from "next/head";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Privacy from "../components/sections/privacy";
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
        {typeof document !== "undefined" ? (
          <Head>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(generateBreadcrumbMarkup(this.props.router.asPath))
              }}
            />
          </Head>
        ) : null}
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
