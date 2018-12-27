/*******************************************/
/*Shop Page, renders shop products*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Filters from "../components/sections/shop/filters"
import ProductGrid from "../components/sections/shop/productGrid"
import FeaturedStrainThumbnails from "../components/sections/shop/featuredStrainThumbnails";

class Index extends Component {

  render() {
    return (
      <Layout>
          <div className="flex flex-wrap">
            <div className="w-1/4">
              <Filters {...this.props} />
              <FeaturedStrainThumbnails {...this.props} />
            </div>
            <ProductGrid {...this.props} />
          </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
