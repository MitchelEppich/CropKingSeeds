/*******************************************/
/*Main page, Renders all home videos*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";

import AddToCart from "../components/sections/productPage/addToCart";
import ImageCarousel from "../components/sections/productPage/imageCarousel";
import OtherProducts from "../components/sections/productPage/otherProducts";
import MoreInfo from "../components/sections/productPage/moreInfo";
import Reviews from "../components/sections/productPage/reviews";
import Details from "../components/sections/productPage/details";
import Data from "../components/sections/productPage/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";

class Index extends Component {
    render() {
        return (
            <Layout>
                <div className="p-8">
                    <div className="flex flex-wrap justify-start h-500">
                        <div className="w-1/3 flex flex-wrap justify-center">
                            <ImageCarousel {...this.props} />
                            <Data {...this.props} />
                        </div>

                        <div className="flex flex-wrap content-start w-2/3">
                            <h1 className="w-full h-12 font-black">{this.props.viewProduct.currentProduct.name}</h1>
                            <p className="leading-none mb-4 ">
                                <span className="border-red-light bg-red-light rounded p-1 px-2 mx-2 text-white">
                                    {this.props.viewProduct.currentProduct.genetic}
                                </span>
                                <span className="border-red-light bg-red-light rounded p-1 px-2 mx-2 text-white">
                                    {this.props.viewProduct.currentProduct.type}
                                </span>
                            </p>
                            <div className="leading-none mb-4 mx-4">
                                <FontAwesomeIcon icon={faCannabis} className="text-red-dark fa-lg mx-1" />
                                <FontAwesomeIcon icon={faCannabis} className="text-red-dark fa-lg mx-1" />
                                <FontAwesomeIcon icon={faCannabis} className="text-red-dark fa-lg mx-1" />
                                <FontAwesomeIcon icon={faCannabis} className="text-red-dark fa-lg mx-1" />
                                <FontAwesomeIcon icon={faCannabis} className="text-red-dark fa-lg mx-1" />5 Leaves (81
                                reviews)
                            </div>
                            <AddToCart {...this.props} />
                            <Details {...this.props} />
                        </div>
                    </div>

                    <OtherProducts {...this.props} />
                    {/* <MoreInfo {...this.props} /> */}
                    <Reviews {...this.props} />
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
        setCurrentImage: index => dispatch(actions.setCurrentImage(index)),
        toggleFullDescription: () => dispatch(actions.toggleFullDescription()),
        setNewRating: index => dispatch(actions.setNewRating(index))
    };
};

export default connect(
    state => state,
    mapDispatchToProps
)(withData(Index));
