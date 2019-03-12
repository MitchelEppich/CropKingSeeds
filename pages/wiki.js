//lib
import React, { Component } from "react";
import { connect } from "react-redux";
//custom
import withData from "../lib/withData";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import { Menu, Content } from "../components/sections/wiki";

class Index extends Component {
  render() {
    return (
      <Layout {...this.props}>
        <div className="flex py-24 w-3/4 mx-auto h-3xscreen min-h-screen">
          <Menu {...this.props} />
          <Content {...this.props} />
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    openMenuOption: optionsObj => dispatch(actions.openMenuOption(optionsObj))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
