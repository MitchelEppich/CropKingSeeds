import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import Head from "next/head";

import actions from "../store/actions";
import Layout from "../HOC/Layout";
import FeaturedStrainThumbnails from "../components/sections/shop/featuredStrainThumbnails";
import AddToCart from "../components/sections/productPage/addToCart";
import OtherProducts from "../components/sections/productPage/otherProducts";
import MoreInfo from "../components/sections/productPage/moreInfo";
import Reviews from "../components/sections/productPage/reviews";
import Details from "../components/sections/productPage/details";
import Data from "../components/sections/productPage/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";
import Share from "../components/sections/productPage/share";
import Description from "../components/sections/productPage/description";
import Genetics from "../components/sections/productPage/genetics";
import Breadcrumb from "../components/sections/productPage/breadcrumb";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Loader from "../components/sections/loader";
import ImageCarousel from "../components/sections/productPage/imageCarousel";
import Ratings from "../components/sections/productPage/ratings";
import { initGA, logPageView } from "../scripts/ga";
import generateSchemaMarkup from "../scripts/generateSchemaMarkup";
import generateBreadcrumbMarkup from "../scripts/generateBreadcrumbMarkup";

import Router from "next/router";
const isClient = typeof document !== "undefined";

let lowerImageCar;

class Index extends Component {
  componentDidMount() {
    let qr = this.props.router.asPath.split("/product/")[1];
    if (qr) {
      if (
        this.props.viewProduct.currentProduct &&
        this.props.viewProduct.currentProduct.name.includes(
          qr.replace(/-/g, " ").toLowerCase()
        )
      ) {
        let product = this.props.viewProduct.currentProduct;
        this.prepCurrentProduct(this.props, product);
      } else {
        try {
          this.props
            .fetchCurrentProduct({
              name: qr.replace(/-/g, " ").toLowerCase()
            })
            .then(res => {
              let product = this.props.viewProduct.currentProduct;
              this.prepCurrentProduct(this.props, product);
            });
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      Router.push("/_error", "/404");
    }
    initGA();
    logPageView();
    lowerImageCar = ["sm", "md", "lg"].includes(this.props.misc.mediaSize);
  }

  componentDidUpdate(prevProps) {
    let product = this.props.viewProduct.currentProduct;
    if (product != null && this.props.misc.relatedStrains == null) {
      this.props.getRelatedList({ sotiId: product.sotiId, limit: 4 });
    }

    if (this.props.misc.mediaSize != prevProps.misc.mediaSize) {
      lowerImageCar = ["sm", "md", "lg"].includes(this.props.misc.mediaSize);
    }
  }

  render() {
    return (
      <Layout {...this.props}>
        {this.props.viewProduct.currentProduct &&
        this.props.viewProduct.currentProduct.reviews != null ? (
          <React.Fragment>
            <Head>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(
                    generateSchemaMarkup([
                      this.props.viewProduct.currentProduct
                    ])
                  )
                }}
              />
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(
                    generateBreadcrumbMarkup(this.props.router.asPath)
                  )
                }}
              />
            </Head>
            <div className="p-8 lg:px-4 lg:py-8 md:px-4 md:py-8 sm:px-2 sm:py-2">
              <Breadcrumb {...this.props} />
              <div className="flex flex-wrap justify-start pt-2 relative">
                <div className="w-full xxl:inline-flex xl:inline-flex px-4 xxl:px-20 relative block">
                  {!lowerImageCar ? (
                    <div className="w-1/2 flex flex-wrap justify-center xl:w-1/2 lg:w-full md:w-full sm:w-full">
                      <ImageCarousel {...this.props} />
                    </div>
                  ) : null}
                  <div className="flex flex-wrap content-start w-1/2 pl-4 md:pl-0 sm:pl-0 xl:w-1/2 lg:w-full md:w-full sm:w-full md:mt-6 sm:mt-0 lg:mt-6">
                    <div className="w-full">
                      <h1 className="pl-10 ml-1 font-black lg:pl-16 xl:pl-10 xxl:pl-12 sm:pl-0 md:pl-0">
                        {this.props.viewProduct.currentProduct.name}
                      </h1>{" "}
                    </div>

                    <div className="mt-1 relative cursor-pointer ml-1 pl-10 sm:pl-0 lg:pl-16 xl:pl-10 xxl:pl-12 md:pl-0 w-full sm:mb-8 md:mb-8">
                      <div
                        className="inline-flex bg-red-light"
                        style={{
                          width: `${150 *
                            (this.props.viewProduct.currentProduct.rating / 5) +
                            8}px`,
                          height: "17px",
                          marginTop: "2px"
                        }}
                      />
                      <div
                        className="inline-flex bg-grey-lightest"
                        style={{
                          width: `${150 *
                            ((5 -
                              this.props.viewProduct.currentProduct.rating) /
                              5)}px`,
                          height: "17px",
                          marginTop: "2px"
                        }}
                      />
                      <div
                        style={{ opacity: "50%" }}
                        className="absolute w-full pl-10 sm:pl-0 md:pl-0 lg:pl-16 xl:pl-10 xxl:pl-12 pin-l inline-flex sm:flex-col"
                      >
                        <div className="">
                          <Ratings {...this.props} />{" "}
                        </div>
                        <AnchorLink
                          className="items-center flex"
                          href="#reviews"
                        >
                          <div className="ml-2 font-bold text-sm hover:text-grey-light items-center flex sm:w-full">
                            {this.props.viewProduct.currentProduct.rating
                              ? this.props.viewProduct.currentProduct.rating.toFixed(
                                  1
                                )
                              : null}{" "}
                            <span className="sm:hidden md:hidden mx-1 ">
                              Crowns
                            </span>{" "}
                            (
                            {this.props.viewProduct.currentProduct.reviews
                              ? this.props.viewProduct.currentProduct.reviews
                                  .length
                              : null}{" "}
                            reviews)
                          </div>
                        </AnchorLink>
                      </div>
                    </div>
                    <div className="w-full inline-flex mb-6 xl:block lg:block  md:block  sm:block relative">
                      <div className="w-full mt-2 relative xl:w-full lg:w-full md:w-full sm:w-full">
                        <div className="lg:w-full md:w-full sm:w-full">
                          <Genetics {...this.props} />
                          {lowerImageCar ? (
                            <div className="w-1/2 flex flex-wrap justify-center xl:w-1/2 lg:w-full md:w-full sm:w-full pt-8">
                              <ImageCarousel {...this.props} />
                            </div>
                          ) : null}
                          <AddToCart {...this.props} />
                          <Share
                            copyToClipboard={this.copyToClipboard}
                            {...this.props}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xxl:w-full xxl:px-20 mt-4 block w-full px-8 sm:px-4 xl:absolute-center">
                  <Description {...this.props} />
                  <Data {...this.props} />
                </div>

                <div className="w-full mt-12">
                  <h3 className="w-full p-2 pl-6 font-bold text-3xl my-3 sm:text-xl text-grey bg-smoke-grey">
                    Frequently Bought Together
                  </h3>
                  <div className="px-0 w-full mt-2">
                    {/* <OtherProducts count={3} {...this.props} /> */}
                    {this.props.misc.featuredStrains != null ? (
                      <FeaturedStrainThumbnails
                        page={"product"}
                        initialCount={4}
                        specificMax={4}
                        {...this.props}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
              {/* {this.props.viewProduct.currentProduct.moreInfo != null ? ( */}
              <div>
                <h3 className="w-full p-2 pl-6 font-bold text-3xl my-3 text-grey bg-smoke-grey">
                  More About {this.props.viewProduct.currentProduct.name}
                </h3>
                <MoreInfo {...this.props} />
              </div>
              {/* ) : null} */}
              <div className="w-full">
                <Reviews {...this.props} />
              </div>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="h-screen w-full">
              <Loader {...this.props} />
            </div>
          </React.Fragment>
        )}
      </Layout>
    );
  }

  prepCurrentProduct = (props, res) => {
    let product = res;
    let _index = 0;
    while (product.price[_index] == -1) {
      _index++;
    }
    props.quickAddToCartQty(_index, props.shop.quickAddToCartQty, product._id);
    if (props.cart.potentialQuantity[product._id] == null) {
      props.modifyPotentialQuantity({
        potentialQuantity: props.cart.potentialQuantity,
        action: "SET",
        tag: product._id,
        quantity: 1,
        max: props.cart.maxPerPackage
      });
    }
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    setHoverId: (id, turnOn) => dispatch(actions.setHoverId(id, turnOn)),
    quickAddToCartQty: (index, quickAddToCartQty, tag) =>
      dispatch(actions.quickAddToCartQty(index, quickAddToCartQty, tag)),
    modifyCart: input => dispatch(actions.modifyCart(input)),
    modifyPotentialQuantity: input =>
      dispatch(actions.modifyPotentialQuantity(input)),
    setCurrentImage: index => dispatch(actions.setCurrentImage(index)),
    toggleFullDescription: () => dispatch(actions.toggleFullDescription()),
    toggleStateLightbox: () => dispatch(actions.toggleStateLightbox()),
    setNewrating: index => dispatch(actions.setNewrating(index)),
    toggleFilter: input => dispatch(actions.toggleFilter(input)),
    updateStrain: input => dispatch(actions.updateStrain(input)),
    setReviewCursor: input => dispatch(actions.setReviewCursor(input)),
    setReviewRateFilter: input => dispatch(actions.setReviewRateFilter(input)),
    modifyReview: input => dispatch(actions.modifyReview(input)),
    toggleCartAnimation: () => dispatch(actions.toggleCartAnimation()),
    resetCartAnimation: () => dispatch(actions.resetCartAnimation()),
    setImageZoom: imz => dispatch(actions.setImageZoom(imz)),
    getStrain: input => dispatch(actions.getStrain(input)),
    setCurrentProduct: input => dispatch(actions.setCurrentProduct(input)),
    getRelatedList: input => dispatch(actions.getRelatedList(input)),
    expandProduct: id => dispatch(actions.expandProduct(id)),
    showMoreFeatures: input => dispatch(actions.showMoreFeatures(input)),
    toggleImageZoom: isImageZoomed =>
      dispatch(actions.toggleImageZoom(isImageZoomed)),
    toggleStrainsMenu: isStrainsMenuVisible =>
      dispatch(actions.toggleStrainsMenu(isStrainsMenuVisible)),
    updateRecentAdded: input => dispatch(actions.updateRecentAdded(input)),
    fetchCurrentProduct: name => dispatch(actions.fetchCurrentProduct(name))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
