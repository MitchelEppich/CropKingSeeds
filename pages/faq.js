// lib
import React, { Component } from "react";
import { connect } from "react-redux";
import Head from "next/head";
// custom
import withData from "../lib/withData";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import DeliveryQuestions from "../components/sections/faq/deliveryQuestions";
import PaymentQuestions from "../components/sections/faq/paymentQuestions";
import OtherQuestions from "../components/sections/faq/otherQuestions";
import Heading from "../components/sections/faq/heading";
import { initGA, logPageView } from "../scripts/ga";

class Index extends Component {
  componentDidMount() {
    initGA();
    logPageView();
  }
  render() {
    return (
      <Layout {...this.props}>
        {/* <Head>
          <title>
            Buy Feminized &amp; Autoflowering Cannabis Seeds - Crop King Seeds
          </title>
          <meta name="robots" content="index, follow" />
        </Head> */}
        <Heading {...this.props} />
        {this.props.faq.questionsCount > 0 ||
        this.props.faq.questionsCount == null ? (
          <React.Fragment>
            <DeliveryQuestions {...this.props} />
            <PaymentQuestions {...this.props} />
            <h2
              id="payment"
              className="w-1/2 xl:w-4/5 lg:w-main md:w-full sm:w-full mx-auto mt-8"
            >
              Other FAQ's
            </h2>
          </React.Fragment>
        ) : (
          <p className="w-1/2 text-3xl font-bold lg:w-full md:w-full sm:w-full mx-auto mt-8 text-red-darker text-center my-12">
            Oops! No results
          </p>
        )}
        <OtherQuestions {...this.props} />
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    toggleFAQQuestion: index => dispatch(actions.toggleFAQQuestion(index)),
    setFaqSearch: value => dispatch(actions.setFaqSearch(value)),
    setQuestionsCount: count => dispatch(actions.setQuestionsCount(count))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
