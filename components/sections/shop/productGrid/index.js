import React, { Component } from "react";
import withData from "../../../../lib/withData";
import { connect } from "react-redux";
import actions from "../../../../store/actions";
import { TimelineLite, TweenMax } from "gsap";
import ProductThumbnail from "./productThumbnail";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Index extends Component {
  constructor(props) {
    super(props);
    this.myTween = new TimelineLite({ paused: true });
    this.myElements = [];
  }
  componentDidMount() {
    this.myTween.staggerTo(this.myElements, 0.5, { autoAlpha: 1, y: -30 }, 0.1);
    this.myTween.restart();
  }

  componentDidUpdate(prevProps) {
    this.myTween.set(this.myElements, { autoAlpha: 1, y: -30 });
  }

  render() {
    let hoverId = this.props.misc.hoverId;
    let products = this.props.misc.strains;
    let isSmallMediumOrLargeDevice = ["sm", "md", "lg"].includes(
      this.props.misc.mediaSize
    );
    let activeFilters = Object.keys(this.props.shop.activeFilters).map(
      (filter, index) => {
        let filtersArr =
          filter == "genetic"
            ? [...this.props.shop.activeFilters[filter]]
            : [this.props.shop.activeFilters[filter]];
        let label =
          filter == "type" || filter == "genetic" ? null : filter + "%";
        return filtersArr.map((value, index) => {
          return (
            <span
              key={index}
              onClick={() =>
                this.props.toggleFilter({
                  filter: this.props.shop.activeFilters,
                  [filter]: value,
                  multiple: filter == "genetic" ? true : false
                })
              }
              className="capitalize text-grey border bg-grey-lightest flex justify-center cursor-pointer hover:bg-red-dark hover:text-white items-center rounded-tl-lg rounded-br-lg border-grey-lightest p-2 m-1 font-bold slowish"
            >
              {label || value}
              <FontAwesomeIcon className="fa-sm ml-2" icon={faTimes} />
            </span>
          );
        });
      }
    );
    products = products
      .filter(a => {
        let _filter = this.props.shop.activeFilters;
        if (Object.keys(_filter).length == 0) return true;
        let _pass = true;
        if (_filter.type != null && _filter.type != a.type.toLowerCase())
          _pass = false;
        if (
          _filter.genetic != null &&
          _filter.genetic.length != 0 &&
          !_filter.genetic.includes(a.genetic.toLowerCase())
        )
          _pass = false;
        if (_filter.cbd != null && _filter.cbd != a.cbd) _pass = false;
        if (_filter.thc != null && _filter.thc != a.thc) _pass = false;
        return _pass;
      })
      .map((product, index) => {
        return (
          <div
            key={index}
            ref={div => (this.myElements[index] = div)}
            onMouseEnter={() => {
              if (isSmallMediumOrLargeDevice) {
                return null;
              }
              this.props.setHoverId(product._id, true);
              let _index = 0;
              while (product.price[_index] == -1) {
                _index++;
              }
              this.props.quickAddToCartQty(_index);
              this.props.modifyPotentialQuantity({
                potentialQuantity: this.props.cart.potentialQuantity,
                action: "SET",
                quantity: 1
              });
            }}
            onMouseLeave={() => {
              if (isSmallMediumOrLargeDevice) {
                return null;
              }
              this.props.setHoverId(product._id, false);
            }}
            className={
              hoverId == product._id
                ? "w-64 h-64 sm:w-screen sm:h-screen sm:pin-t sm:mt-4 md:w-48 md:h-48 lg:h-48 lg:w-48 text-white relative sm:absolute z-50 slowishish lg:my-4 sm:my-0 md:my-2 lg:mx-8 xl:mx-8 xxl:mx-8"
                : "w-64 h-64 sm:cursor-pointer md:cursor-pointer sm:w-32 sm:h-32 md:w-48 md:h-48 lg:h-48 lg:w-48 text-white relative z-0 slowishish lg:my-4 sm:my-2 md:my-2 lg:mx-8 xl:mx-8 xxl:mx-8"
            }
          >
            <ProductThumbnail
              isSmallMediumOrLargeDevice={isSmallMediumOrLargeDevice}
              hoverId={hoverId}
              index={index}
              product={product}
              {...this.props}
            />
          </div>
        );
      });

    return (
      <div className="sm:w-full md:w-full lg:w-3/4 xl:w-3/4 xxl:w-3/4 min-h-700 text-white">
        <div
          className={
            hoverId != null && this.props.misc.mediaSize == "sm"
              ? "hidden"
              : "w-full justify-between flex pt-3 p-2 mt-5 mb-2 text-grey-light items-center flex"
          }
        >
          <div className="flex flex-wrap">
            <p className="w-full mb-1 pl-2 font-bold opacity-50">
              Active Filters:
            </p>
            {activeFilters}
          </div>
          <div className="inline-flex">
            <p className="font-bold opacity-50 flex items-center">Sort by:</p>
            <select className="ml-3">
              <option value="Newest">Newest</option>
              <option value="Most Popular">Most Popular</option>
              <option value="Most Reviewed">Most Reviewed</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap pt-6 sm:justify-center md:justify-center lg:justify-start xl:justify-start xxl:justify-around sm:overflow-hidden pb-32">
          {products}
        </div>
      </div>
    );
  }
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
    toggleFilter: input => dispatch(actions.toggleFilter(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
