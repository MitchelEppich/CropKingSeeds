// lib imports
import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import Head from "next/head";
// custom imports
import withData from "../lib/withData";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Ads from "../components/sections/affiliates/ads";
import Graph from "../components/sections/affiliates/Graph";

class Index extends Component {
  render() {
    return (
      <Layout {...this.props}>
        <Head>
          <meta name="robots" content="index, nofollow" />
        </Head>
        <div className="flex flex-wrap justify-around pb-12 ">
          <div className="affiliatesBanner sm:mb-0 lg:mb-6 ">
            <div className="w-1/3 sm:w-full md:w-4/5 lg:w-2/3 xl:w-1/2 sm:pr-0 pr-12 md:pr-0 flex flex-wrap md:justify-start lg:justify-start justify-between text-white">
              <h1 className="w-full sm:text-2xl font-black text-shadow uppercase">
                Grow your business with Crop King Seeds
              </h1>
              <p className="w-full my-4 mb-6 leading-normal text-shadow">
                Are you ready to earn some money? Full affiliate support
                available so you can be apart of Crop King Seeds fast growth in
                the cannabis industry.
              </p>
              <div className="w-full justify-around flex sm:flex-col">
                <a
                  rel="nofollow"
                  target="_blank"
                  href="https://affiliates.cropkingseeds.com/signup.php"
                >
                  <button className="w-32 sm:w-full sm:my-2 md:m-1 sm:px-4 py-2 text-lg uppercase font-bold rounded bg-red-dark text-white hover:bg-red-light">
                    Sign Up
                  </button>
                </a>
                <a
                  rel="nofollow"
                  target="_blank"
                  href="https://affiliates.cropkingseeds.com/index.php"
                >
                  <button className="w-32 sm:w-full sm:my-2 md:m-1 py-2 text-lg uppercase font-bold rounded bg-white text-red-dark hover:bg-grey-darker hover:text-white">
                    Login
                  </button>
                </a>
              </div>
            </div>

            {/* {!["sm", "md"].includes(this.props.misc.mediaSize) ? (
              <Ads {...this.props} />
            ) : null} */}
          </div>
          {/* {["sm", "md"].includes(this.props.misc.mediaSize) ? ( */}
          <Ads {...this.props} />
          {/* ) : null} */}

          {/* <Login {...this.props} /> */}
          <div className="mt-10 xl:mt-10 xl:w-95p lg:mt-10 md:mt-12 sm:mt-6 sm:w-300 sm:px-1 xxl:px-100 w-full">
            <div className="w-full sm:h-auto md:h-500 h-400 xl:h-250 lg:h-250 flex sm:flex-wrap sm:justify-center md:flex-wrap md:justify-center mx-auto justify-between bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-full sm:h-24 sm:w-24 sm:pt-6 md:h-16 w-1/3 text-center md:pt-8 pt-20 lg:pt-16">
                <img
                  className="h-200 lg:h-100 xl:h-100 md:h-100 sm:h-20"
                  src="../static/icons/affiliate/4.png"
                />
              </div>
              <div className="w-2/3 sm:w-full sm:mx-4 md:w-full sm:h-400 sm:mt-2  h-full">
                <ul className="flex sm:list-reset sm:px-0 flex-wrap content-center h-full">
                  <li className="w-full my-4 font-bold text-xl xl:text-base lg:text-base sm:text-base sm:pr-2 md:pr-2 flex scale-item">
                    <img
                      className="w-8 h-8 xl:w-6 xl:h-6 lg:w-6 lg:h-6 sm:h-6 sm:w-6 mr-4 "
                      src="../static/icons/affiliate/checkmark.png"
                    />
                    <span className="w-5/6">
                      20% commission for a minimum of $200 in sales. Yes,
                      including cash sales!
                    </span>
                  </li>
                  <li className="w-full my-4 font-bold text-xl xl:text-base lg:text-base sm:text-base sm:pr-2 md:pr-2 flex scale-item">
                    <img
                      className="w-8 h-8 xl:w-6 xl:h-6 lg:w-6 lg:h-6 sm:h-6 sm:w-6 mr-4 "
                      src="../static/icons/affiliate/checkmark.png"
                    />
                    <span className="w-5/6">
                      World's best customer support. Phone lines, live chat,
                      videos and contests.
                    </span>
                  </li>
                  <li className="w-full my-4 font-bold text-xl xl:text-base lg:text-base sm:text-base sm:pr-2 md:pr-2 flex scale-item">
                    <img
                      className="w-8 h-8 xl:w-6 xl:h-6 lg:w-6 lg:h-6 sm:h-6 sm:w-6 mr-4 "
                      src="../static/icons/affiliate/checkmark.png"
                    />
                    <span className="w-5/6">
                      FREE cannabis seeds to try for yourself!
                    </span>
                  </li>
                  <li className="w-full my-4 font-bold text-xl xl:text-base lg:text-base sm:text-base sm:pr-2 md:pr-2 flex scale-item">
                    <img
                      className="w-8 h-8 xl:w-6 xl:h-6 lg:w-6 lg:h-6 sm:h-6 sm:w-6 mr-4 "
                      src="../static/icons/affiliate/checkmark.png"
                    />
                    <span className="w-5/6">Full affiliate support.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-1/2 xl:w-3/4 xxl:w-2/3 xxl:mb-6 lg:w-4/5 sm:my-4 lg:my-4 sm:w-full md:w-3/4 md:my-4  xl:mb-12 sm:px-8 mx-auto">
            <h3 className="my-4 mt-24 lg:mt-10 text-center text-3xl font-black">
              Affiliate Program Details
            </h3>
            <div className="flex flex-wrap">
              <div className="w-1/3 sm:w-1/2 my-2 font-bold">
                Commission Type:
              </div>
              <div className="w-2/3 sm:w-1/2 my-2">
                Pay-Per-Sale 20% for each sale you deliver.
              </div>
              <div className="w-1/3 sm:w-1/2 my-2 font-bold">
                Payout Requirements:
              </div>
              <div className="w-2/3 sm:w-1/2 my-2">
                $200.00 USD - Minimum balance required for payout.
              </div>
              <div className="w-1/3 sm:w-1/2 my-2 font-bold">
                Payout Duration:
              </div>
              <div className="w-2/3 sm:w-1/2 my-2">
                Net-10: Payments are made once per month by the 10th, for the
                previous month's confirmed commissions.
              </div>
            </div>
          </div>
          {/* <Graph {...this.props} /> */}
          <a
            className="w-1/4 sm:w-2/3 md:w-2/3 lg:w-1/3 xl:w-1/2 xxl:w-1/3 xxl:mx-48 block uppercase text-center mx-auto px-12 py-3 text-lg uppercase font-bold rounded bg-red-dark text-white hover:bg-grey"
            target="_blank"
            aria-label="affiliates-signup"
            rel="nofollow"
            href="https://affiliates.cropkingseeds.com/signup.php"
          >
            join now!
          </a>
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
