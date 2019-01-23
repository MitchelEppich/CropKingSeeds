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

class Index extends Component {
    render() {
        let questions = this.props.faq.questions.map((question, index) => {
            return <Question key={index} index={index} {...question} {...this.props} />;
        });
        return (
            <Layout>
                <div className="mt-12 w-1/2 mx-auto text-center font-black">
                    <h1 className="mb-3">Frequently Asked Questions</h1>
                    <p>
                        Can't find the answer to your question? Feel free to{" "}
                        <Link href="/contact">
                            <span className="text-red cursor-pointer">contact us</span>
                        </Link>
                        , we are ready 24/7 worldwide to assist you with any question you may have.
                    </p>
                </div>
                <div className="pt-12">{questions}</div>
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
