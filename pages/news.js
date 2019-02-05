/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import About from "../components/sections/about";
import Media from "../components/sections/media";
import News from "../components/sections/news";

class Index extends Component {
  render() {
    return (
      <Layout>
        <div className="pt-0 min-h-500">
          <Media {...this.props} />
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    setCurrentEvent: input => dispatch(actions.setCurrentEvent(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
