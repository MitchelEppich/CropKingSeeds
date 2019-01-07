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


class Index extends Component {

  render() {
    return (
      <Layout>
        <div>
          <div className="flex flex-wrap justify-between h-500">
            <ImageCarousel  {...this.props} />
            <div className="flex flex-wrap w-2/3">
              <Details  {...this.props} />
              <AddToCart  {...this.props} />
            </div>
          </div>

          <OtherProducts  {...this.props} />
          <MoreInfo {...this.props} />
          <Reviews  {...this.props} />

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
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
