/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import ContactUs from "../components/sections/contactUs";

class Index extends Component {
    render() {
        return (
            <Layout>
                <div className="pt-1">
                    <ContactUs {...this.props} />
                </div>
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
        sendEmail: input => dispatch(actions.sendEmail(input)),
        refreshEmailForm: () => dispatch(actions.refreshEmailForm()),
        setRecaptcha: response => dispatch(actions.setRecaptcha(response))
    };
};

export default connect(
    state => state,
    mapDispatchToProps
)(withData(Index));
