//lib
import React, { Component } from "react";
import { connect } from "react-redux";
import Head from "next/head";
//custom
import withData from "../lib/withData";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import { Menu, Content } from "../components/sections/wiki";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClient: typeof document !== "undefined"
    };
  }
  componentDidMount() {
    // Captures click events of all <a> elements with href starting with #
    if (this.state.isClient) {
      let menuOptions = document.getElementsByClassName("menu-option");
      Array.from(menuOptions).forEach(element => {
        element.addEventListener("click", event => {
          // Click events are captured before hashchanges. Timeout
          // causes offsetAnchor to be called after the page jump.
          window.setTimeout(() => {
            this.offsetAnchor();
          }, 0);
        });
      });

      // Set the offset when entering page with hash present in the url
      window.setTimeout(() => {
        this.offsetAnchor();
      }, 0);
    }
  }
  render() {
    return (
      <Layout {...this.props}>
        <Head>
          <title>
            Buy Feminized &amp; Autoflowering Cannabis Seeds - Crop King Seeds
          </title>
          <meta name="robots" content="index, follow" />
        </Head>
        <div className="flex py-24 w-3/4 mx-auto min-h-screen">
          <Menu {...this.props} />
          <Content {...this.props} />
        </div>
      </Layout>
    );
  }
  offsetAnchor = () => {
    if (location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - 300);
    }
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    openMenuOption: optionsObj => dispatch(actions.openMenuOption(optionsObj)),
    setWikiSearch: searchTerm => dispatch(actions.setWikiSearch(searchTerm))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
