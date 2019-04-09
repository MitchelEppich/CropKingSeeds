// lib
import React, { Component } from "react";
import { connect } from "react-redux";
import Head from "next/head";
// custom
import withData from "../lib/withData";
import actions from "../store/actions";
import Layout from "../HOC/Layout";
import Filters from "../components/sections/shop/filters";
import ProductGrid from "../components/sections/shop/productGrid";
import Sidebar from "../components/sections/shop/sidebar";
import generateSchemaMarkup from "../scripts/generateSchemaMarkup";
import generateBreadcrumbMarkup from "../scripts/generateBreadcrumbMarkup";

import Router from "next/router";

import { initGA, logPageView } from "../scripts/ga";
class Index extends Component {
  componentDidMount() {
    if (typeof document === "undefined") return;
    let url = this.props.router.asPath.slice(1);
    if (url && url.length != 0) {
      let qr;
      if (url.includes("shop?")) {
        qr = url.slice("shop?".length);
        if (qr) {
          qr = qr.split("&");
          let _availableFilters = this.props.shop.availableFilters;
          for (let item of qr) {
            item = item.toLowerCase();
            let partial;
            if (
              (item != "cbd" && item.includes("cbd")) ||
              (item != "thc" && item.includes("thc"))
            ) {
              partial = item.slice(3);
              item = item.replace(partial, "");
              this.props.toggleFilter({
                filter: this.props.shop.activeFilters,
                [item]: partial
              });
              continue;
            } else {
              for (let filter of Object.keys(_availableFilters)) {
                if (_availableFilters[filter].includes(item)) {
                  this.props.toggleFilter({
                    filter: this.props.shop.activeFilters,
                    [filter]: item,
                    multiple: filter == "genetic"
                  });
                  break;
                }
              }
            }
          }
        }
      }
    }
    initGA();
    logPageView();
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
    let mobile = ["sm", "md"].includes(this.props.misc.mediaSize);
    return (
      <Layout {...this.props} supportedBrowser={this.props.supportedBrowser}>
        {/* {this.props.misc.strains != null &&
        this.props.misc.featuredStrains != null &&
        this.props.misc.strains.length > 0 ? ( */}
        <React.Fragment>
          <Head>
            {this.props.misc.strains != null &&
            this.props.misc.strains.length > 0 ? (
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(
                    generateSchemaMarkup(this.props.misc.strains)
                  )
                }}
              />
            ) : null}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(
                  generateBreadcrumbMarkup(this.props.router.asPath)
                )
              }}
            />
          </Head>
          <div
            className={
              this.props.misc.hoverId != null &&
              this.props.misc.mediaSize == "sm"
                ? "fixed"
                : "relative"
            }
          >
            <h1
              className={
                this.props.misc.hoverId != null &&
                this.props.misc.mediaSize == "sm"
                  ? "hidden"
                  : "mt-5 text-grey font-extrabold text-center text-3/5xl mx-auto w-full text-center"
              }
            >
              Shop Cannabis Seeds
            </h1>
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
                {!mobile ? <Sidebar {...this.props} /> : null}
                {mobile ? <ProductGrid {...this.props} /> : null}
              </div>
              {!mobile ? <ProductGrid {...this.props} /> : null}
              {mobile ? <Sidebar {...this.props} /> : null}
            </div>
          </div>
        </React.Fragment>
        {/* ) : (
          <p>Loading...</p>
        )} */}
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
    quickAddToCartQty: (index, quickAddToCartQty, tag) =>
      dispatch(actions.quickAddToCartQty(index, quickAddToCartQty, tag)),
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
