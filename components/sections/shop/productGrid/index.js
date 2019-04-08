//lib
import React, { Component } from "react";
import { connect } from "react-redux";
import { TimelineLite } from "gsap";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//custom
import ProductThumbnail from "./productThumbnail";
import actions from "../../../../store/actions";
import withData from "../../../../lib/withData";
import { filter } from "../../../../store/utilities/filter";
import GridHeader from "./gridHeader";
import ProductNoAnimation from "./productNoAnimation/";

class Index extends Component {
  constructor(props) {
    super(props);
    this.myTween = new TimelineLite({ paused: true });
    this.myElements = [];
    this.isSmallMediumOrLargeDevice =
      props.checkout.orderDetails.details.device.value != "Desktop" ||
      ["sm"].includes(props.misc.mediaSize);
  }
  componentDidMount() {
    if (!this.props.lowGPUMode) {
      this.myTween.staggerTo(
        this.myElements,
        0.5,
        { autoAlpha: 1, y: -30 },
        0.1
      );
      this.myTween.restart();
    }
    this.refreshInputs(true);
  }

  componentDidUpdate(prevProps) {
    if (!this.props.lowGPUMode) {
      this.myTween.set(this.myElements, { autoAlpha: 1, y: -30 });
    }

    this.refreshInputs();
  }

  refreshInputs = updateAll => {
    if (this.props.misc.lowGPUMode) {
      let strains = this.props.misc.strains;
      if (strains == null) return;
      strains.map(product => {
        if (
          this.props.shop.quickAddToCartQty[product._id] == null ||
          (this.props.shop.quickAddToCartQty[product._id] != 0 && updateAll)
        ) {
          let _index = 0;
          while (product.price[_index] == -1) {
            _index++;
          }

          this.props.quickAddToCartQty(
            _index,
            this.props.shop.quickAddToCartQty,
            product._id
          );
        }

        if (
          this.props.cart.potentialQuantity[product._id] == null ||
          this.props.cart.potentialQuantity[product._id] != 1
        ) {
          this.props.modifyPotentialQuantity({
            potentialQuantity: this.props.cart.potentialQuantity,
            action: "SET",
            tag: product._id,
            max: this.props.cart.maxPerPackage,
            quantity: 1
          });
        }
      });
    }
  };

  render() {
    return (
      <div className="sm:w-full sm:pt-4 md:w-full lg:w-3/5 xl:w-2/3 xxl:w-3/4 min-h-700 text-white mb-20 md:mb-2 md:mt-16 sm:mb-0">
        <GridHeader {...this.props} />
        <div className="flex w-full justify-end font-bold text-black pl-2 pr-3 p-2 text-sm mt-10 xxl:mb-0 sm:mb-0 sm:mt-2 mb-6">
          Showing {this.showQuantity}{" "}
          {this.showQuantity <= 1 ? "Product" : "Products"}
        </div>
        <div
          onMouseLeave={() => {
            if (this.isSmallMediumOrLargeDevice) {
              return null;
            }
            this.props.setHoverId(this.props.misc.hoverId, false);
          }}
          className={`md:ml-2 lg:ml-8 xl:ml-6 sm:ml-0 flex flex-wrap pt-6 sm:overflow-hidden sm:pb-4 ${
            this.props.misc.lowGPUMode
              ? "xxl:ml-4 ml-2 sm:justify-center md:justify-around lg:justify-center lg:flex-col sm:flex-col xl:justify-around xxl:justify-around"
              : "xxl:ml-12 ml-10 sm:justify-center md:justify-center lg:justify-start xl:justify-start xxl:justify-start"
          } `}
        >
          {this.mapProducts()}
        </div>
      </div>
    );
  }

  mapProducts = () => {
    let $search = this.props.misc.searchValue;
    let $filter = { ...this.props.shop.activeFilters };
    if ($search != null) {
      $search = $search.split(",").map(a => a.trim().toLowerCase());
      if ($filter.text == null) $filter.text = $search;
      else $filter.text = [...$filter.text, ...$search];
    }

    let filterOutput = filter(this.props.misc.strains, $filter);

    let products = filterOutput
      .sort(
        this.props.shop.sort != null
          ? sortingFunctions[this.props.shop.sort]
          : undefined
      )
      .map((product, index) => {
        return (
          <div
            key={index}
            ref={div => (this.myElements[index] = div)}
            onMouseEnter={() => {
              if (
                this.isSmallMediumOrLargeDevice ||
                this.props.misc.lowGPUMode
              ) {
                return null;
              }
              this.props.setHoverId(product._id, true).then(() => {
                return null;
              });
              let _index = 0;
              while (product.price[_index] == -1) {
                _index++;
              }
              this.props.quickAddToCartQty(
                _index,
                this.props.shop.quickAddToCartQty,
                product._id
              );
              this.props.modifyPotentialQuantity({
                potentialQuantity: this.props.cart.potentialQuantity,
                action: "SET",
                tag: product._id,
                max: this.props.cart.maxPerPackage,
                quantity: 1
              });
            }}
            className={
              this.props.misc.hoverId == product._id
                ? "w-64 h-64 sm:w-screen sm:h-screen sm:pin-t sm:mt-4 md:w-44 md:h-48 lg:h-48 lg:w-44 text-white relative sm:absolute z-50 slowishish lg:my-4 sm:my-0 md:my-2 lg:ml-2 xl:mx-2 xxl:my-4 xxl:mx-4"
                : this.props.misc.lowGPUMode
                ? "w-64 sm:cursor-pointer md:cursor-pointer md:w-48 sm:w-full sm:mt-4 lg:w-main lg:mx-auto text-white relative z-0 slowishish lg:my-4 xl:my-6 sm:my-2 md:my-2 lg:ml-2 xl:mx-2 xxl:my-4 xxl:mx-4 flex justify-center"
                : "w-64 h-64 sm:cursor-pointer md:cursor-pointer sm:w-32 sm:mt-4 sm:h-48 md:w-44 md:h-48 lg:h-48 lg:w-44 text-white relative z-0 slowishish lg:my-4 sm:my-2 md:my-2 lg:ml-2 xl:mx-2 xxl:my-4 xxl:mx-4"
            }
          >
            {!this.props.misc.lowGPUMode ? (
              <ProductThumbnail
                isSmallMediumOrLargeDevice={this.isSmallMediumOrLargeDevice}
                hoverId={this.props.misc.hoverId}
                index={index}
                product={product}
                {...this.props}
              />
            ) : (
              <div>
                <ProductNoAnimation
                  isSmallMediumOrLargeDevice={this.isSmallMediumOrLargeDevice}
                  hoverId={this.props.misc.hoverId}
                  index={index}
                  product={product}
                  {...this.props}
                />
              </div>
            )}
          </div>
        );
      });
    this.showQuantity = products.length;
    return products;
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setHoverId: (id, turnOn) => dispatch(actions.setHoverId(id, turnOn)),
    quickAddToCartQty: (index, quickAddToCartQty, tag) =>
      dispatch(actions.quickAddToCartQty(index, quickAddToCartQty, tag)),
    expandProduct: id => dispatch(actions.expandProduct(id)),
    modifyCart: input => dispatch(actions.modifyCart(input)),
    setCurrentProduct: input => dispatch(actions.setCurrentProduct(input)),
    modifyPotentialQuantity: input =>
      dispatch(actions.modifyPotentialQuantity(input)),
    toggleFilter: input => dispatch(actions.toggleFilter(input)),
    toggleCartAnimation: () => dispatch(actions.toggleCartAnimation()),
    resetCartAnimation: () => dispatch(actions.resetCartAnimation())
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));

//accessory functions
let sortingFunctions = {
  alpha: (a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  },
  alphaR: (a, b) => {
    if (a.name < b.name) return 1;
    if (a.name > b.name) return -1;
    return 0;
  },
  thc: (a, b) => {
    let _a = [...a.pthc].pop();
    let _b = [...b.pthc].pop();
    if (_a < _b) return 1;
    if (_a > _b) return -1;
    return 0;
  },
  thcR: (a, b) => {
    let _a = [...a.pthc].pop();
    let _b = [...b.pthc].pop();
    if (_a < _b) return -1;
    if (_a > _b) return 1;
    return 0;
  },
  cbd: (a, b) => {
    let _a = [...a.pcbd].pop();
    let _b = [...b.pcbd].pop();
    if (_a < _b) return 1;
    if (_a > _b) return -1;
    return 0;
  },
  cbdR: (a, b) => {
    let _a = [...a.pcbd].pop();
    let _b = [...b.pcbd].pop();
    if (_a < _b) return -1;
    if (_a > _b) return 1;
    return 0;
  },
  yield: (a, b) => {
    if (a.avgYield < b.avgYield) return 1;
    if (a.avgYield > b.avgYield) return -1;
    return 0;
  },
  yieldR: (a, b) => {
    if (a.avgYield < b.avgYield) return -1;
    if (a.avgYield > b.avgYield) return 1;
    return 0;
  },
  time: (a, b) => {
    if (a.nFlowerTime < b.nFlowerTime) return 1;
    if (a.nFlowerTime > b.nFlowerTime) return -1;
    return 0;
  },
  timeR: (a, b) => {
    if (a.nFlowerTime < b.nFlowerTime) return -1;
    if (a.nFlowerTime > b.nFlowerTime) return 1;
    return 0;
  }
};
