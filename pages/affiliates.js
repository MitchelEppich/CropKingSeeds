/*******************************************/
// Affiliates page
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Login from "../components/sections/affiliates/login";
import Ads from "../components/sections/affiliates/ads";
import Graph from "../components/sections/affiliates/Graph";

class Index extends Component {
    render() {
        return (
            <Layout>
                <div className="pt-12 flex flex-wrap justify-around">
                    <div className="w-1/2">
                        <h1>Welcome to the Crop King Seeds Affiliate Program!</h1>
                        <p className="my-2">
                            Join our affiliate program to start earning lucrative commissions when you recommend Crop
                            King Seeds!
                            <br />
                            <br />
                            At Crop King Seeds, we're obsessed with affiliate and customer happiness. As an affiliate,
                            you can rest assured that we are working hard to convert any visitors you send us into
                            customers who will be thrilled to stay wuth us for a long time.
                            <br />
                            <br />
                            <span className="font-bold">How does it work?</span>
                            <br />
                            When you join, you will be supplied with a range of banners and textual links that you place
                            within your website and their activity will be tracked by our affiliate software. You will
                            earn commissions based on the purchase of our products.
                            <br />
                            <br />
                            <span className="font-bold">Frequently Asked Questions:</span>
                            <br />
                            Click here to see our full list of FAQ's.
                        </p>
                        <h3 className="my-4 mt-6">Program Details</h3>
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

                        <button className="w-1/4 block mx-auto h-12 my-6 hover:bg-red-dark bg-red-light text-white cursor-pointer">
                            Sign up for free!
                        </button>
                    </div>
                    <Login {...this.props} />
                    <Graph {...this.props} />
                    <Ads {...this.props} />
                    <button className="w-1/4 block mx-auto h-12 my-6 hover:bg-red-dark bg-red-light text-white cursor-pointer">
                        Sign up for free!
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
