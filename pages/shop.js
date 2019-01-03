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
  componentWillMount() {
    this.props.getStrains();
  }

  render() {
    return (
      <Layout>
        {this.props.misc.strains != null &&
        this.props.misc.strains.length > 0 ? (
          <React.Fragment>
            <div
              className={
                this.props.misc.viewProductExpand != null
                  ? "fixed overflow-hidden"
                  : "flex flex-wrap"
              }
            >
              <div
                className={
                  this.props.misc.viewProductExpanded
                    ? "w-0 slow"
                    : "w-1/4 slow"
                }
              >
                <Filters {...this.props} />
                {/*<FeaturedStrainThumbnails {...this.props} />*/}
              </div>
              <ProductGrid {...this.props} />
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
    toggleFilter: filter => dispatch(actions.toggleFilter(filter)),
    clearFilters: () => dispatch(actions.clearFilters()),
    quickAddToCartQty: input => dispatch(actions.quickAddToCartQty(input)),
    modifyCart: input => dispatch(actions.modifyCart(input)),
    clearCart: () => dispatch(actions.clearCart())
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
