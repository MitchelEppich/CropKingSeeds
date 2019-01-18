/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Carousel from "../components/sections/germination/carousel";
import OtherProducts from "../components/sections/productPage/otherProducts";

class Index extends Component {
    render() {
        return (
            <Layout>
                <div className="pt-12 mb-24">
                    <div className="">
                        <Carousel {...this.props} />
                        <div className="w-full px-8 pt-8 h-500 my-12 bg-grey-lightest">
                            <h2 className="w-full text-center text-3xl font-black uppercase">Our Guarantee</h2>
                        </div>
                        <div className="w-full mt-8">
                            <h3 className="w-full font-black text-2xl h-12 my-2">Featured Products</h3>
                            {/* <OtherProducts {...this.props} /> */}
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
        setHoverId: id => dispatch(actions.setHoverId(id)),
        quickAddToCartQty: input => dispatch(actions.quickAddToCartQty(input)),
        modifyCart: input => dispatch(actions.modifyCart(input)),
        modifyPotentialQuantity: input => dispatch(actions.modifyPotentialQuantity(input)),
        changeStep: changeObj => dispatch(actions.changeStep(changeObj))
    };
};

export default connect(
    state => state,
    mapDispatchToProps
)(withData(Index));
