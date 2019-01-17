/*******************************************/
// Affiliates page
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Ads from "../components/sections/affiliates/ads";
import Graph from "../components/sections/affiliates/Graph";
import Link from "next/link";

class Index extends Component {
    render() {
        return (
            <Layout>
                <div className="flex flex-wrap justify-around">
                    <div className="affiliatesBanner">
                        <div className="w-1/3 sm:w-full md:w-full lg:w-2/3 xl:w-1/2 sm:pr-0 pr-12 flex flex-wrap md:justify-start lg:justify-start justify-between text-white">
                            <h1 className="w-full sm:text-2xl font-black text-shadow">
                                Grow your business with Crop King Seeds
                            </h1>
                            <p className="w-full my-4 mb-6 leading-normal text-shadow">
                                Are you ready to earn some money? Full affiliate support available so you can be apart
                                of Crop King Seeds fast growth in the cannabis industry.
                            </p>
                            <a target="_blank" href="https://affiliates.cropkingseeds.com/signup.php">
                                <button className="px-12 sm:px-8 md:px-8 py-2 text-lg uppercase font-bold rounded bg-red-dark text-white">
                                    sign up
                                </button>
                            </a>
                            <a target="_blank" href="https://affiliates.cropkingseeds.com/index.php">
                                <button className="sm:my-2 md:ml-12 lg:ml-12 px-10 py-2 text-lg uppercase font-bold rounded bg-white text-red-dark">
                                    login
                                </button>
                            </a>
                        </div>

                        {!["sm", "md"].includes(this.props.misc.mediaSize) ? <Ads {...this.props} /> : null}
                    </div>
                    {["sm", "md"].includes(this.props.misc.mediaSize) ? <Ads {...this.props} /> : null}

                    {/* <Login {...this.props} /> */}

                    <div className="w-1/2 xl:w-3/4 xxl:w-2/3 xxl:mb-6 lg:w-4/5 sm:my-4 lg:my-4 sm:w-full md:w-3/4 md:my-4 mt-64 lg:mt-32 xl:mb-12 xl:mt-48 mx-auto">
                        <h3 className="my-4 mt-6 text-center text-3xl font-black">Affiliate Program Details</h3>
                        <div className="flex flex-wrap">
                            <div className="w-1/3 my-2 font-bold">Commission Type:</div>
                            <div className="w-2/3 my-2">Pay-Per-Sale 20% for each sale you deliver.</div>
                            <div className="w-1/3 my-2 font-bold">Payout Requirements:</div>
                            <div className="w-2/3 my-2">$200.00 USD - Minimum balance required for payout.</div>
                            <div className="w-1/3 my-2 font-bold">Payout Duration:</div>
                            <div className="w-2/3 my-2">
                                Net-10: Payments are made once per month by the 10th, for the previous month's confirmed
                                commissions.
                            </div>
                        </div>
                    </div>
                    {/* <Graph {...this.props} /> */}
                    <button className="w-1/4 sm:w-1/2 md:w-2/3 lg:w-1/3 xl:w-1/2 xxl:w-200 xxl:mx-48 block uppercase mx-auto px-12 py-3 text-lg uppercase font-bold rounded bg-red-dark text-white">
                        join now!
                    </button>
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
