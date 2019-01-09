/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Carousel from "../components/sections/germination/carousel";
import Tips from "../components/sections/germination/tips";
import Video from "../components/sections/germination/video";
import OtherProducts from "../components/sections/productPage/otherProducts";

class Index extends Component {
    render() {
        return (
            <Layout>
                <div className="pt-12 mb-24">
                    <div>
                        <Carousel {...this.props} />
                        <div className="w-full inline-flex mt-4">
                            <div className="w-2/3 inline-flex">
                                <div className="w-1/2">
                                    <Tips />
                                    <Tips />
                                    <Tips />
                                </div>
                                <div className="w-1/2">
                                    <Tips />
                                    <Tips />
                                    <Tips />
                                </div>
                            </div>
                            <div className="w-1/3">
                                <Video />
                            </div>
                        </div>
                        <div className="w-full mt-8 px-8">
                            <h3 className="w-full font-black text-2xl h-12 my-2">Featured Products</h3>
                            <OtherProducts {...this.props} />
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
