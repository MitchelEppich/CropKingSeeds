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
    componentWillMount() {}

    render() {
        return (
            <Layout>
                {this.props.misc.strains != null && this.props.misc.strains.length > 0 ? (
                    <React.Fragment>
                        <div className="">
                            <h3 className="text-center mx-auto w-full font-extrabold text-3/5xl my-2 mb-6">Shop</h3>
                            <div className="flex flex-wrap">
                                <div className="sm:w-full w-1/4 slow">
                                    <Filters {...this.props} />
                                    {/* <FeaturedStrainThumbnails {...this.props} /> */}
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
        setHoverId: id => dispatch(actions.setHoverId(id)),
        getStrains: () => dispatch(actions.getStrains()),
        toggleFilter: input => dispatch(actions.toggleFilter(input)),
        clearFilters: () => dispatch(actions.clearFilters()),
        quickAddToCartQty: input => dispatch(actions.quickAddToCartQty(input)),
        modifyCart: input => dispatch(actions.modifyCart(input)),
        modifyPotentialQuantity: input => dispatch(actions.modifyPotentialQuantity(input)),
        clearCart: () => dispatch(actions.clearCart()),
        toggleShowFilters: () => dispatch(actions.toggleShowFilters())
    };
};

export default connect(
    state => state,
    mapDispatchToProps
)(withData(Index));
