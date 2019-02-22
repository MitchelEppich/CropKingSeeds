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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

class Index extends Component {
  componentDidMount() {
    this.props.getAllNews();
  }

  render() {
    return (
      <Layout>
        <div className="w-full flex-1 h-screen content-center text-center mt-24">
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className="img-error text-grey-light fa-10x sm:fa-5x mt-12 opacity-50"
          />
          <h1 className="mt-10 text-4xl">404!</h1>
          <h3 className="mt-2 mb-4 subtitle-message">
            Whoops... Page Not Found!
          </h3>
          <div className="mt-24">
            <a
              href="../shop"
              className="p-2 bg-red-light text-white border border-white hover:bg-black hover:text-white"
            >
              Go to Shopping Page!
            </a>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    getAllNews: () => dispatch(actions.getAllNews()),
    setCurrentEvent: input => dispatch(actions.setCurrentEvent(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
