/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import Head from "next/head";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Partners from "../components/sections/partners";
import Link from "next/link";
import { initGA, logPageView } from "../scripts/ga";
import generateBreadcrumbMarkup from "../scripts/generateBreadcrumbMarkup";

import Router from "next/router";

class Index extends Component {
  componentWillMount() {
    this.props.getPartners();
  }

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
                __html: JSON.stringify(
                  generateBreadcrumbMarkup(this.props.router.asPath)
                )
              }}
            />
          </Head>
        ) : null}
        <Partners {...this.props} />
        <div className="w-container mx-auto mt-8 text-center pb-12">
          <h3 className="text-2xl">Interested in joining the list?</h3>
          <h3 className="text-grey-light pt-1">
            Contact us to request an application.
          </h3>

          <div className="p-3 bg-red-dark text-white mt-8 mx-auto text-center cursor-pointer h-12 pt-3 w-64 text-2xl font-extrabold scale-item hover:bg-red-light rounded shadow-md">
            <Link href="/contact">
              <span className="text-white">Contact! </span>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    getPartners: input => dispatch(actions.getPartners(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
