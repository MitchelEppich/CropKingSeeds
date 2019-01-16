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
import Share from "../components/sections/productPage/share";
import Description from "../components/sections/productPage/description";
import Genetics from "../components/sections/productPage/genetics";
import Breadcrumb from "../components/sections/productPage/breadcrumb";

class Index extends Component {
  render() {
    return (
      <Layout>
        <div className="p-8">
          <Breadcrumb {...this.props} />
          <div className="flex flex-wrap justify-start pt-2">
            <div className="w-1/3 flex flex-wrap justify-center">
              <ImageCarousel {...this.props} />
            </div>
            <div className="flex flex-wrap content-start w-2/3 pl-4">
              <div className="w-full">
                <h1 className="pl-10 ml-1 font-black">
                  {this.props.viewProduct.currentProduct.name}
                </h1>
              </div>
              <div className="mt-1 cursor-pointer ml-1 pl-10">
                <FontAwesomeIcon
                  icon={faCannabis}
                  className="text-red-dark fa-lg mr-1"
                />
                <FontAwesomeIcon
                  icon={faCannabis}
                  className="text-red-dark fa-lg mx-1"
                />
                <FontAwesomeIcon
                  icon={faCannabis}
                  className="text-red-dark fa-lg mx-1"
                />
                <FontAwesomeIcon
                  icon={faCannabis}
                  className="text-red-dark fa-lg mx-1"
                />
                <FontAwesomeIcon
                  icon={faCannabis}
                  className="text-red-dark fa-lg mx-1"
                />
                <span className="ml-2 font-bold text-sm hover:text-grey-light">
                  5 Leaves (81 reviews)
                </span>
              </div>

              <div className="w-full inline-flex mb-6">
                <div className="w-1/2 mt-2">
                  <Genetics {...this.props} />
                  <AddToCart {...this.props} />
                  <Share {...this.props} />
                </div>
                <div className="w-1/2 mt-4">
                  <Data {...this.props} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-20 mt-4">
            <Description {...this.props} />

            <Details {...this.props} />
          </div>

          <div className="w-full mt-12">
            <h3 className="w-full p-2 pl-6 font-bold text-3xl my-3 text-grey bg-smoke-grey">
              Frequently Bought Together
            </h3>
            <div className="px-8 w-full mt-2">
              <OtherProducts {...this.props} />
            </div>
          </div>

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
    modifyPotentialQuantity: input =>
      dispatch(actions.modifyPotentialQuantity(input)),
    setCurrentImage: index => dispatch(actions.setCurrentImage(index)),
    toggleFullDescription: () => dispatch(actions.toggleFullDescription()),
    setNewRating: index => dispatch(actions.setNewRating(index)),
    toggleFilter: input => dispatch(actions.toggleFilter(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
