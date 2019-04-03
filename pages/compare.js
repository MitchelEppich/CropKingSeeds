// lib
import React, { Component } from "react";
import { connect } from "react-redux";
import Head from "next/head";
// custom
import withData from "../lib/withData";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Compare from "../components/sections/compare";
import { initGA, logPageView } from "../scripts/ga";

class Index extends Component {
  componentDidMount() {
    initGA();
    logPageView();
    this.props.getStrains({ verbose: true });
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    this.props.modifyPotentialQuantity({
      potentialQuantity: this.props.cart.potentialQuantity,
      action: "CLEAR"
    });
  }
  render() {
    return (
      <Layout {...this.props}>
        {/* <Head>
          <title>
            Buy Feminized &amp; Autoflowering Cannabis Seeds - Crop King Seeds
          </title>
          <meta name="robots" content="index, follow" />
        </Head> */}
        <div className="pt-1">
          <Compare {...this.props} />
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    compareStrain: input => dispatch(actions.compareStrain(input)),
    getStrains: input => dispatch(actions.getStrains(input)),
    quickAddToCartQty: (index, quickAddToCartQty, tag) =>
      dispatch(actions.quickAddToCartQty(index, quickAddToCartQty, tag)),
    modifyCart: input => dispatch(actions.modifyCart(input)),
    modifyPotentialQuantity: input =>
      dispatch(actions.modifyPotentialQuantity(input)),
    toggleCartAnimation: () => dispatch(actions.toggleCartAnimation()),
    setCompareSearchValue: input =>
      dispatch(actions.setCompareSearchValue(input)),
    updateRecentAdded: input => dispatch(actions.updateRecentAdded(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
