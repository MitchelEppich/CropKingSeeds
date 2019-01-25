/*******************************************/
/*Shop Page, renders shop products*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Filters from "../components/sections/shop/filters";
import ProductGrid from "../components/sections/shop/productGrid";
import FeaturedStrainThumbnails from "../components/sections/shop/featuredStrainThumbnails";

class Index extends Component {
    render() {
        return (
            <Layout>
                {this.props.misc.strains != null && this.props.misc.strains.length > 0 ? (
                    <React.Fragment>
                        <div
                            className={
                                this.props.misc.hoverId != null && this.props.misc.mediaSize == "sm"
                                    ? "fixed"
                                    : "relative"
                            }>
                            <h3
                                className={
                                    this.props.misc.hoverId != null && this.props.misc.mediaSize == "sm"
                                        ? "hidden"
                                        : "pt-10 text-grey font-extrabold text-center text-3/5xl mx-auto w-full text-center"
                                }>
                                Shop Cannabis Seeds
                            </h3>
                            <div
                                className={
                                    this.props.misc.hoverId != null && this.props.misc.mediaSize == "sm"
                                        ? " flex flex-wrap"
                                        : "flex flex-wrap relative"
                                }>
                                <div
                                    className={
                                        this.props.misc.hoverId != null && this.props.misc.mediaSize == "sm"
                                            ? "hidden"
                                            : "sm:w-full md:w-full lg:w-1/4 xl:w-1/4 xxl:w-1/4 slow relative mt-8 mb-12"
                                    }>
                                    <Filters {...this.props} />
                                    {/*<FeaturedStrainThumbnails {...this.props} />*/}
                                </div>
                                <ProductGrid {...this.props} />
                            </div>
                        </div>
                    </React.Fragment>
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
        getStrains: () => dispatch(actions.getStrains()),
        toggleFilter: input => dispatch(actions.toggleFilter(input)),
        clearFilters: () => dispatch(actions.clearFilters()),
        quickAddToCartQty: input => dispatch(actions.quickAddToCartQty(input)),
        modifyCart: input => dispatch(actions.modifyCart(input)),
        modifyPotentialQuantity: input => dispatch(actions.modifyPotentialQuantity(input)),
        clearCart: () => dispatch(actions.clearCart()),
        toggleShowFilters: bool => dispatch(actions.toggleShowFilters(bool))
    };
};

export default connect(
    state => state,
    mapDispatchToProps
)(withData(Index));
