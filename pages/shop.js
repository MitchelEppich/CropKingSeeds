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
import SeedTracker from "../components/sections/shop/seedtracker";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: ["sm", "md"].includes(props.misc.mediaSize)
    };
  }

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
      <Layout supportedBrowser={this.props.supportedBrowser}>
        {this.props.misc.strains != null &&
        this.props.misc.featuredStrains != null &&
        this.props.misc.strains.length > 0 ? (
          <React.Fragment>
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
                  {!this.state.mobile ? (
                    <div className="my-8 w-full justify-center flex relative sm:pt-8">
                      <img
                        src={
                          this.props.misc.CFURL +
                          "/sidebar/FreeShippingAnimated.gif"
                        }
                        className=""
                      />
                    </div>
                  ) : null}
                  {!this.state.mobile ? (
                    <FeaturedStrains {...this.props} />
                  ) : null}
                  {!this.state.mobile ? <SeedTracker {...this.props} /> : null}
                  {!this.state.mobile ? <Catalogue {...this.props} /> : null}
                  {!this.state.mobile ? <ReviewBanner {...this.props} /> : null}
                  {this.state.mobile ? <Sidebar {...this.props} /> : null}
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
    resetCartAnimation: () => dispatch(actions.resetCartAnimation()),
    updateRecentAdded: input => dispatch(actions.updateRecentAdded(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
