// lib
import React, { Component } from "react";
import { connect } from "react-redux";
// custom
import withData from "../lib/withData";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Charts from "../components/sections/charts";

class Index extends Component {
  componentDidMount() {
    // this.props.getStrains({ verbose: true });
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
