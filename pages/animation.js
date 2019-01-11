/*******************************************/
// Affiliates page
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import sketch from "../components/sketches/sketch";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rotation: 150,
            stateSketch: sketch
        };
    }

    render() {
        return (
            <Layout>
                {/* <div className="h-screen w-screen">
                    <P5Wrapper sketch={this.state.stateSketch} rotation={this.state.rotation} />
                </div> */}
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
