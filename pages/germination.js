/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Carousel from "../components/sections/germination/carousel";
import FeaturedStrainThumbnails from "../components/sections/shop/featuredStrainThumbnails";

class Index extends Component {
    render() {
        return (
            <Layout>
                <div className="mb-24">
                    <div className="text-center w-full pb-8">
                        <h1 className="mt-5 text-grey font-extrabold text-center text-3/5xl mx-auto w-full text-center">
                            Germination
                        </h1>
                    </div>
                    <div className="">
                        <Carousel {...this.props} />
                        <div className="w-full px-8 pt-8 h-500 my-12 bg-grey-lightest">
                            <h2 className="w-full text-center text-3xl font-black uppercase">Our Guarantee</h2>
                        </div>
                        <div className="w-full mt-8">
                            <h3 className="w-full font-black text-2xl h-12 my-2">Featured Products</h3>
                            <FeaturedStrainThumbnails {...this.props} />
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
        setHoverId: (id, turnOn) => dispatch(actions.setHoverId(id, turnOn)),
        quickAddToCartQty: input => dispatch(actions.quickAddToCartQty(input)),
        modifyCart: input => dispatch(actions.modifyCart(input)),
        modifyPotentialQuantity: input => dispatch(actions.modifyPotentialQuantity(input)),
        changeStep: changeObj => dispatch(actions.changeStep(changeObj)),
        toggleShowFilters: input => dispatch(actions.toggleShowFilters(input)),
        clearFilters: () => dispatch(actions.clearFilters()),
        clearCart: () => dispatch(actions.clearCart()),
        setSort: input => dispatch(actions.setSort(input)),
        expandProduct: id => dispatch(actions.expandProduct(id)),
        setCurrentProduct: input => dispatch(actions.setCurrentProduct(input))
    };
};

export default connect(
    state => state,
    mapDispatchToProps
)(withData(Index));
