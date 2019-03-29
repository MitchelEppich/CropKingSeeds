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
import Router from "next/router";

let lowerImageCar;

class Index extends Component {
  componentDidMount() {
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
        <Head>
          <title>{this.props.viewProduct.currentProduct}</title>
          {this.props.viewProduct.currentProduct ? (
            <React.Fragment>
              <meta name="robots" content="index, follow" />
              <meta
                id="og-title"
                property="og:title"
                content={this.props.viewProduct.currentProduct.name}
              />
              <meta
                id="og-url"
                property="og:url"
                content={window.location.href}
              />
              <meta id="og-locale" property="og:locale" content="en_US" />
              <meta
                id="og-description"
                property="og:description"
                content={this.props.viewProduct.currentProduct.description}
              />
              <meta
                id="og-image"
                property="og:image"
                content={
                  "http://dcfgweqx7od72.cloudfront.net" +
                  this.props.viewProduct.currentProduct.images[0]
                }
              />
            </React.Fragment>
          ) : null}
        </Head>
        {this.props.misc.featuredStrains &&
        this.props.viewProduct.currentProduct &&
        this.props.viewProduct.currentProduct.reviews != null ? (
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
                          (this.props.viewProduct.currentProduct.rating /
                            5)}px`,
                        height: "17px",
                        marginTop: "2px"
                      }}
                    />
                    <div
                      className="inline-flex bg-grey-lightest"
                      style={{
                        width: `${150 *
                          ((5 - this.props.viewProduct.currentProduct.rating) /
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
                      <AnchorLink className="items-center flex" href="#reviews">
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
                  <FeaturedStrainThumbnails
                    page={"product"}
                    initialCount={4}
                    specificMax={4}
                    {...this.props}
                  />
                </div>
              </div>
              <div>
                <h3 className="w-full p-2 pl-6 font-bold text-3xl my-3 text-grey bg-smoke-grey">
                  More about {this.props.viewProduct.currentProduct.name}
                </h3>
                <MoreInfo {...this.props} />
              </div>
              <div className="w-full">
                <Reviews {...this.props} />
              </div>
            </div>
          </div>
        ) : (
          <div className="h-screen w-full">
            <Loader {...this.props} />
          </div>
        )}
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
    setHoverId: (id, turnOn) => dispatch(actions.setHoverId(id, turnOn)),
    quickAddToCartQty: input => dispatch(actions.quickAddToCartQty(input)),
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
    updateRecentAdded: input => dispatch(actions.updateRecentAdded(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
