/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Question from "../components/sections/faq/question";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faSearch } from "@fortawesome/free-solid-svg-icons";

class Index extends Component {
  render() {
    let questions = this.props.faq.questions
      .slice(0, 2)
      .map((question, index) => {
        return (
          <Question key={index} index={index} {...question} {...this.props} />
        );
      });
    let deliveryQuestions = this.props.faq.questions
      .slice(2, 6)
      .map((question, index) => {
        return (
          <Question
            key={index}
            index={index + 2}
            {...question}
            {...this.props}
          />
        );
      });
    let paymentQuestions = this.props.faq.questions
      .slice(6)
      .map((question, index) => {
        return (
          <Question
            key={index}
            index={index + 6}
            {...question}
            {...this.props}
          />
        );
      });

    return (
      <Layout>
        <div className="mt-12 w-1/2 mx-auto text-center font-black">
          <div className="w-full inline-flex relative h-10 overflow-hidden rounded">
            <div className="w-full">
              <input
                type="text"
                className="p-2 w-full h-10"
                placeholder="How can we help you?"
              />
            </div>
            <div className="p-2 flex justify-end absolute pin-r bg-red text-white cursor-pointer w-10 h-12 slowish hover:bg-grey-light">
              <FontAwesomeIcon icon={faSearch} className="fa-lg pt-1" />
            </div>
          </div>
          <h1 className="mt-8 text-grey font-extrabold text-center text-3/5xl mx-auto w-full text-center mb-3">
            Frequently Asked Questions
          </h1>
          <p>
            Can't find the answer to your question? Feel free to{" "}
            <Link href="/contact">
              <span className="text-red cursor-pointer">contact us</span>
            </Link>
            , we are ready 24/7 worldwide to assist you with any question you
            may have.
          </p>
        </div>
        <div className="pt-12">{questions}</div>
        <h2
          id="delivery"
          className="w-1/2 lg:w-full md:w-full sm:w-full mx-auto mt-8"
        >
          Delivery
        </h2>
        <div className="">{deliveryQuestions}</div>
        <h2
          id="payment"
          className="w-1/2 lg:w-full md:w-full sm:w-full mx-auto mt-8"
        >
          Payment
        </h2>
        <div className="">{paymentQuestions}</div>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    toggleFAQQuestion: index => dispatch(actions.toggleFAQQuestion(index))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
