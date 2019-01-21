/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import ArticlePage from "../components/sections/articlePage";

class Index extends Component {
    render() {
        return (
            <Layout>
                {this.props.misc.strains != null && this.props.misc.strains.length > 0 ? (
                    <div className="">
                        <ArticlePage {...this.props} />
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
        setHoverId: (id, turnOn) => dispatch(actions.setHoverId(id, turnOn)),
        quickAddToCartQty: input => dispatch(actions.quickAddToCartQty(input)),
        modifyCart: input => dispatch(actions.modifyCart(input)),
        modifyPotentialQuantity: input => dispatch(actions.modifyPotentialQuantity(input))
    };
};

export default connect(
    state => state,
    mapDispatchToProps
)(withData(Index));
