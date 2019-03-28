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
  }

  componentDidUpdate(prevProps) {
    if (!this.props.lowGPUMode) {
      this.myTween.set(this.myElements, { autoAlpha: 1, y: -30 });
    }
  }

  render() {
    return (
      <div className="sm:w-full sm:pt-4 md:w-full lg:w-3/5 xl:w-2/3 xxl:w-3/4 min-h-700 text-white mb-20 md:mb-2 md:mt-16 sm:mb-0">
        <GridHeader {...this.props} />
        <div className="flex w-full justify-end font-bold text-black pl-2 pr-3 p-2 text-sm mt-10 xxl:mb-0 mb-6">
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
          className="ml-10 xl:ml-12 xxl:ml-12 sm:ml-2 flex flex-wrap pt-6 sm:justify-center md:justify-center lg:justify-start xl:justify-start xxl:justify-start sm:overflow-hidden sm:pb-4"
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
    let products = filter(this.props.misc.strains, $filter)
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
                this.props.misc.lowGPUMode ||
                window.innerHeight < 750
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
              this.props.quickAddToCartQty(_index);
              this.props.modifyPotentialQuantity({
                potentialQuantity: this.props.cart.potentialQuantity,
                action: "SET",
                max: this.props.cart.maxPerPackage,
                quantity: 1
              });
            }}
            className={
              this.props.misc.hoverId == product._id
                ? "w-64 h-64 sm:w-screen sm:h-screen sm:pin-t sm:mt-4 md:w-44 md:h-48 lg:h-48 lg:w-44 text-white relative sm:absolute z-50 slowishish lg:my-4 sm:my-0 md:my-2 lg:mx-0 xl:mx-0 xxl:my-4 xxl:mx-4"
                : "w-64 h-64 sm:cursor-pointer md:cursor-pointer sm:w-32 sm:h-32 md:w-44 md:h-48 lg:h-48 lg:w-44 text-white relative z-0 slowishish lg:my-4 sm:my-2 md:my-2 lg:mx-0 xl:mx-0 xxl:my-4 xxl:mx-4"
            }
          >
            <ProductThumbnail
              isSmallMediumOrLargeDevice={this.isSmallMediumOrLargeDevice}
              hoverId={this.props.misc.hoverId}
              index={index}
              product={product}
              {...this.props}
            />
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
    quickAddToCartQty: input => dispatch(actions.quickAddToCartQty(input)),
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
