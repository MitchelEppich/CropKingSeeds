// lib
import React, { Component } from "react";
import { connect } from "react-redux";
// custom
import withData from "../lib/withData";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Filters from "../components/sections/shop/filters";
import ProductGrid from "../components/sections/shop/productGrid";
import FeaturedStrains from "../components/sections/shop/featuredStrains";
import Catalogue from "../components/sections/shop/catalogue";
import ReviewBanner from "../components/sections/shop/reviewBanner";
import Sidebar from "../components/sections/shop/sidebar";
import Gif from "../components/sections/shop/gif";

class Index extends Component {
  // componentDidMount() {
  //     this.props.showMoreFeatures({
  //         max: this.props.misc.featuredStrains.length,
  //         count: 1
  //     });
  // }
  componentDidMount() {
    let searchValue = this.props.misc.searchValue;
    if (searchValue != null) {
      this.props.setSearch(null);
      let text = searchValue.split(",");
      this.props.toggleFilter({
        filter: this.props.shop.activeFilters,
        text,
        multiple: false
      });
    }
  }
  componentWillUnmount() {
    this.props.clearFilters();
  }

  render() {
    return (
      <Layout>
        {this.props.misc.strains != null &&
        this.props.misc.featuredStrains != null &&
        this.props.misc.strains.length > 0 ? (
          <React.Fragment>
            {/* {this.printStrains()} */}
            <div
              className={
                this.props.misc.hoverId != null &&
                this.props.misc.mediaSize == "sm"
                  ? "fixed"
                  : "relative"
              }
            >
              <h3
                className={
                  this.props.misc.hoverId != null &&
                  this.props.misc.mediaSize == "sm"
                    ? "hidden"
                    : "mt-5 text-grey font-extrabold text-center text-3/5xl mx-auto w-full text-center"
                }
              >
                Shop Cannabis Seeds
              </h3>
              <div
                className={
                  this.props.misc.hoverId != null &&
                  this.props.misc.mediaSize == "sm"
                    ? " flex flex-wrap"
                    : "flex flex-wrap relative"
                }
              >
                <div
                  className={
                    this.props.misc.hoverId != null &&
                    this.props.misc.mediaSize == "sm"
                      ? "hidden"
                      : "sm:w-full md:w-full lg:w-2/5 xl:w-1/3 xxl:w-1/4 slow relative mt-8 mb-12 sm:mb-6 md:mb-6"
                  }
                >
                  <div>
                    <Filters {...this.props} />
                  </div>
                  {!["sm", "md"].includes(this.props.misc.mediaSize) ? (
                    <Gif {...this.props} />
                  ) : null}
                  {!["sm", "md"].includes(this.props.misc.mediaSize) ? (
                    <FeaturedStrains {...this.props} />
                  ) : null}
                  {!["sm", "md"].includes(this.props.misc.mediaSize) ? (
                    <Catalogue {...this.props} />
                  ) : null}
                  {!["sm", "md"].includes(this.props.misc.mediaSize) ? (
                    <ReviewBanner {...this.props} />
                  ) : null}
                </div>
                <ProductGrid {...this.props} />
                {["sm", "md"].includes(this.props.misc.mediaSize) ? (
                  <Sidebar {...this.props} />
                ) : null}
              </div>
            </div>
          </React.Fragment>
        ) : (
          <p>Loading...</p>
        )}
      </Layout>
    );
  }

  printStrains() {
    for (let i = 0; i < this.props.misc.strains.length; i++) {
      // console.log(
      //     this.props.misc.strains[i].name
      //         .toLowerCase()
      //         .split(" ")
      //         .join("-")
      // );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    setHoverId: (id, turnOn) => dispatch(actions.setHoverId(id, turnOn)),
    getStrains: () => dispatch(actions.getStrains()),
    toggleFilter: input => dispatch(actions.toggleFilter(input)),
    toggleShowFilters: input => dispatch(actions.toggleShowFilters(input)),
    clearFilters: () => dispatch(actions.clearFilters()),
    quickAddToCartQty: input => dispatch(actions.quickAddToCartQty(input)),
    modifyCart: input => dispatch(actions.modifyCart(input)),
    modifyPotentialQuantity: input =>
      dispatch(actions.modifyPotentialQuantity(input)),
    clearCart: () => dispatch(actions.clearCart()),
    setSearch: value => dispatch(actions.setSearch(value)),
    setSort: input => dispatch(actions.setSort(input)),
    expandProduct: id => dispatch(actions.expandProduct(id)),
    getStrain: input => dispatch(actions.getStrain(input)),
    setCurrentProduct: input => dispatch(actions.setCurrentProduct(input)),
    setCurrentImage: index => dispatch(actions.setCurrentImage(index)),
    showMoreFeatures: input => dispatch(actions.showMoreFeatures(input)),
    toggleCartAnimation: () => dispatch(actions.toggleCartAnimation()),
    resetCartAnimation: () => dispatch(actions.resetCartAnimation())
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
