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
import SearchBar from "../components/sections/faq/searchBar";

class Index extends Component {
    render() {
        let questions = this.props.faq.questions;
        questions = questions.filter(q => {
            if (this.props.faq.searchValue == null) return true;
            if (
                !JSON.stringify(q)
                    .toLowerCase()
                    .includes(this.props.faq.searchValue)
            )
                return false;
            return true;
        });

        let deliveryQuestions = questions.slice(0, 3).map((question, index) => {
            return <Question key={index} index={index} {...question} {...this.props} />;
        });
        let paymentQuestions = questions.slice(3, 6).map((question, index) => {
            return <Question key={index} index={index + 3} {...question} {...this.props} />;
        });
        let otherQuestions = questions.slice(6).map((question, index) => {
            return <Question key={index} index={index + 6} {...question} {...this.props} />;
        });

        return (
            <Layout>
                <div className="mt-5 w-1/2 sm:w-4/5 mx-auto text-center font-black">
                    <h1 className="mt-4 text-grey font-extrabold text-center text-3/5xl mx-auto w-full text-center mb-8">
                        Frequently Asked Questions
                    </h1>
                    <SearchBar {...this.props} />
                    <p className="mt-12">
                        Can't find the answer to your question? Feel free to{" "}
                        <Link prefetch href="/contact">
                            <span className="text-red-dark cursor-pointer hover:text-grey">Contact Us</span>
                        </Link>
                        , we are ready 24/7 Worldwide to assist you with any question you may have.
                    </p>
                </div>
                {questions.length > 0 ? (
                    <React.Fragment>
                        <h2 id="delivery" className="w-1/2 lg:w-full md:w-full sm:w-full mx-auto mt-8">
                            Delivery
                        </h2>
                        <div className="">{deliveryQuestions}</div>
                        <h2 id="payment" className="w-1/2 lg:w-full md:w-full sm:w-full mx-auto mt-8">
                            Payment
                        </h2>
                        <div className="">{paymentQuestions}</div>
                        <h2 id="payment" className="w-1/2 lg:w-full md:w-full sm:w-full mx-auto mt-8">
                            Other FAQ's
                        </h2>
                    </React.Fragment>
                ) : (
                    <p className="w-1/2 text-3xl font-bold lg:w-full md:w-full sm:w-full mx-auto mt-8 text-red-darker text-center my-12">
                        Oops! No results
                    </p>
                )}
                <div className="">{otherQuestions}</div>
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
        toggleFAQQuestion: index => dispatch(actions.toggleFAQQuestion(index)),
        setFaqSearch: value => dispatch(actions.setFaqSearch(value))
    };
};

export default connect(
    state => state,
    mapDispatchToProps
)(withData(Index));
