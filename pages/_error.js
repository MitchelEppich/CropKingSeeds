/*******************************************/
/*404 page*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";

class Error extends Component {

  render() {
    return (
      <div className="mt-32 h-300 pt-32"> 404...error</div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Error));
