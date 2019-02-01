/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import ArticlePage from "../components/sections/articlePage";
import ContactUs from "../components/sections/contactUs";

class Index extends Component {
    componentDidMount() {
        if (!this.props.misc.addTalkToListener) {
            if (document.getElementById("tawkto")) {
                document.getElementById("tawkto").addEventListener("click", () => Tawk_API.toggle());
                this.props.addTalkToListener(true);
            }
        }
    }
    componentDidUpdate() {
        if (!this.props.misc.addTalkToListener) {
            if (document.getElementById("tawkto")) {
                document.getElementById("tawkto").addEventListener("click", () => Tawk_API.toggle());
                this.props.addTalkToListener(true);
            }
        }
    }

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
        addTalkToListener: bool => dispatch(actions.addTalkToListener(bool))
    };
};

export default connect(
    state => state,
    mapDispatchToProps
)(withData(Index));
