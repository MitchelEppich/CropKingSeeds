// lib
import React, { Component } from "react";
import { connect } from "react-redux";
// custom
import withData from "../lib/withData";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Compare from "../components/sections/compare";

class Index extends Component {
  componentWillUnmount() {
    this.props.modifyPotentialQuantity({
      potentialQuantity: this.props.cart.potentialQuantity,
      action: "CLEAR"
    });
  }
  render() {
    return (
      <Layout>
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
    quickAddToCartQty: (index, quickAddToCartQty, tag) =>
      dispatch(actions.quickAddToCartQty(index, quickAddToCartQty, tag)),
    modifyCart: input => dispatch(actions.modifyCart(input)),
    modifyPotentialQuantity: input =>
      dispatch(actions.modifyPotentialQuantity(input)),
    toggleCartAnimation: () => dispatch(actions.toggleCartAnimation())
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
