// lib
import React, { Component } from "react";
import { connect } from "react-redux";
// custom
import withData from "../lib/withData";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Compare from "../components/sections/compare";

class Index extends Component {
  componentDidMount() {
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
      dispatch(actions.setCompareSearchValue(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
