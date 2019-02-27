import React, { Component } from "react"
import withData from "../../../../lib/withData"
import { connect } from "react-redux"
import actions from "../../../../store/actions"
import { TimelineLite, TweenMax } from "gsap"
import ProductThumbnail from "./productThumbnail"

import { filter } from "../../../../store/utilities/filter"

import { faTimes, faSortAmountDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

let sortingFunctions = {
  alpha: (a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  },
  alphaR: (a, b) => {
    if (a.name < b.name) return 1
    if (a.name > b.name) return -1
    return 0
  },
  thc: (a, b) => {
    let _a = [...a.pthc].pop()
    let _b = [...b.pthc].pop()
    if (_a < _b) return 1
    if (_a > _b) return -1
    return 0
  },
  thcR: (a, b) => {
    let _a = [...a.pthc].pop()
    let _b = [...b.pthc].pop()
    if (_a < _b) return -1
    if (_a > _b) return 1
    return 0
  },
  cbd: (a, b) => {
    let _a = [...a.pcbd].pop()
    let _b = [...b.pcbd].pop()
    if (_a < _b) return 1
    if (_a > _b) return -1
    return 0
  },
  cbdR: (a, b) => {
    let _a = [...a.pcbd].pop()
    let _b = [...b.pcbd].pop()
    if (_a < _b) return -1
    if (_a > _b) return 1
    return 0
  },
  yield: (a, b) => {
    if (a.avgYield < b.avgYield) return 1
    if (a.avgYield > b.avgYield) return -1
    return 0
  },
  yieldR: (a, b) => {
    if (a.avgYield < b.avgYield) return -1
    if (a.avgYield > b.avgYield) return 1
    return 0
  },
  time: (a, b) => {
    if (a.nFlowerTime < b.nFlowerTime) return 1
    if (a.nFlowerTime > b.nFlowerTime) return -1
    return 0
  },
  timeR: (a, b) => {
    if (a.nFlowerTime < b.nFlowerTime) return -1
    if (a.nFlowerTime > b.nFlowerTime) return 1
    return 0
  }
}

class Index extends Component {
  constructor(props) {
    super(props)
    this.myTween = new TimelineLite({ paused: true })
    this.myElements = []
    this.sortOptions = [
      // ["", "Select"],
      ["alpha", "↑ A - Z "],
      ["alphaR", "↓ Z - A"],
      ["thc", "↑ THC"],
      ["thcR", "↓ THC"],
      ["cbd", "↑ CBD"],
      ["cbdR", "↓ CBD"],
      ["yield", "↑ Avg. Yield"],
      ["yieldR", "↓ Avg. Yield"],
      ["time", "↑ Grow Time"],
      ["timeR", "↓ Grow Time"]
    ]
  }
  componentDidMount() {
    this.myTween.staggerTo(this.myElements, 0.5, { autoAlpha: 1, y: -30 }, 0.1)
    this.myTween.restart()
  }

  componentDidUpdate(prevProps) {
    this.myTween.set(this.myElements, { autoAlpha: 1, y: -30 })
  }

  showSortOptions = () => {
    this.showSortByStyle = {
      height: this.props.misc.visibleScreen.includes("showSortBy")
        ? "262px"
        : "0px",
      transition: "all 0.2s ease-in-out",
      background: "white",
      borderRadius: "6px",
      width: "150px",
      position: "absolute",
      boxShadow: "0 2px 10px rgba(0,0,0,0.3)"
    }
    return this.sortOptions.map((val, index) => {
      let sort = this.props.shop.sort
      return (
        <div
          key={index}
          className={`px-2 w-150 p-1 border-b border-grey-lightest text-left font-bold cursor-pointer hover:text-grey ${
            this.props.shop.sort == val[0] ? "bg-smoke-grey" : "bg-white"
          }`}
          onClick={() => {
            this.props.setSort({ value: sort == val[0] ? undefined : val[0] })
          }}
        >
          {val[1]}
        </div>
      )
    })
  }
  activeFilters = () => {
    let activeFilters = Object.keys(this.props.shop.activeFilters).map(
      (filter, index) => {
        let filtersArr =
          filter == "genetic" || filter == "text"
            ? [...this.props.shop.activeFilters[filter]]
            : [this.props.shop.activeFilters[filter]]
        let label =
          filter == "type" || filter == "genetic" || filter == "text"
            ? null
            : filter + " %"
        return filtersArr.map((value, index) => {
          return (
            <span
              key={index}
              onClick={() =>
                this.props.toggleFilter({
                  filter: this.props.shop.activeFilters,
                  [filter]: value,
                  multiple:
                    filter == "genetic" || filter == "text" ? true : false
                })
              }
              className="capitalize text-grey border bg-grey-lightest flex justify-center cursor-pointer hover:bg-red-light hover:text-white items-center rounded-tl-lg rounded-br-lg border-grey-lightest p-2 m-1 font-bold"
            >
              {filter == "text" ? "search: " : ""}
              {label || value}
              <FontAwesomeIcon className="fa-sm ml-2" icon={faTimes} />
            </span>
          )
        })
      }
    )
    return activeFilters
  }

  showProducts = () => {
    let $search = this.props.misc.searchValue
    let $filter = { ...this.props.shop.activeFilters }
    if ($search != null) {
      $search = $search.split(",").map(a => a.trim().toLowerCase())
      if ($filter.text == null) $filter.text = $search
      else $filter.text = [...$filter.text, ...$search]
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
              if (this.isSmallMediumOrLargeDevice) {
                return null
              }
              this.props.setHoverId(product._id, true).then(() => {
                return null
              })
              let _index = 0
              while (product.price[_index] == -1) {
                _index++
              }
              this.props.quickAddToCartQty(_index)
              this.props.modifyPotentialQuantity({
                potentialQuantity: this.props.cart.potentialQuantity,
                action: "SET",
                max: this.props.cart.maxPerPackage,
                quantity: 1
              })
            }}
            className={
              this.props.misc.hoverId == product._id
                ? "w-64 h-64 sm:w-screen sm:h-screen sm:pin-t sm:mt-4 md:w-44 md:h-48 lg:h-48 lg:w-44 text-white relative sm:absolute z-50 slowishish lg:my-4 sm:my-0 md:my-2 lg:mx-1 xl:mx-4 xxl:my-4 xxl:mx-8"
                : "w-64 h-64 sm:cursor-pointer md:cursor-pointer sm:w-32 sm:h-32 md:w-44 md:h-48 lg:h-48 lg:w-44 text-white relative z-0 slowishish lg:my-4 sm:my-2 md:my-2 lg:mx-1 xl:ml-4 xxl:my-4 xxl:mx-8"
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
        )
      })
    this.showQuantity = products.length
    return products
  }

  render() {
    this.isSmallMediumOrLargeDevice =
      this.props.checkout.orderDetails.details.device.value != "Desktop"
    return (
      <div className="sm:w-full md:w-full lg:w-3/5 xl:w-2/3 xxl:w-3/4 min-h-700 text-white mb-20 md:mb-2 sm:mb-0">
        <div
          className={
            this.props.misc.hoverId != null && this.props.misc.mediaSize == "sm"
              ? "hidden"
              : "w-full justify-between flex sm:flex-col pt-3 px-2 mt-5 text-grey-light"
          }
        >
          {Object.keys(this.props.shop.activeFilters).length != 0 ? (
            <div className="flex flex-wrap xxl:w-4/5 xl:w-3/5 w-3/5 sm:w-full bg-white rounded border border-grey-lightest">
              <p className="w-full mb-1 pl-2 font-bold p-2 bg-grey-lighter text-white uppercase">
                Active Filters:
              </p>
              {this.activeFilters()}
            </div>
          ) : null}
          <div className="z-50 flex absolute w-150 sm:relative sm:mt-4 sm:w-full flex pin-r justify-end">
            <div
              onClick={() => {
                this.props.setVisibleScreen({
                  input: "showSortBy"
                })
              }}
              className="font-bold flex relative items-center w-150 sm:w-150 p-2 bg-grey-lighter justify-center z-50 rounded text-white cursor-pointer hover:bg-red-light"
            >
              {this.props.shop.sort == null || this.props.shop.sort == "" ? (
                <div className="text-base uppercase font-bold">
                  Sort by:
                  <FontAwesomeIcon
                    icon={faSortAmountDown}
                    className="fa-lg ml-2"
                  />
                </div>
              ) : (
                this.sortOptions.find(a => {
                  if (a[0] == this.props.shop.sort) return a
                })[1]
              )}
            </div>
            <div
              style={this.showSortByStyle}
              className="overflow-hidden mt-10 relative sm:mt-10"
            >
              <div className="absolute">
                <div className="p-2 rounded border border-grey-lightest w-150">
                  {this.showSortOptions()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end font-bold text-black pl-2 pr-3 p-2 text-sm mt-10 xxl:mb-0 mb-6">
          Showing {this.showQuantity}{" "}
          {this.showQuantity <= 1 ? "Product" : "Products"}
        </div>
        <div
          onMouseLeave={() => {
            if (this.isSmallMediumOrLargeDevice) {
              return null
            }
            this.props.setHoverId(this.props.misc.hoverId, false)
          }}
          className="ml-10 xl:ml-12 xxl:ml-12 sm:ml-2 flex flex-wrap pt-6 sm:justify-center md:justify-center lg:justify-start xl:justify-start xxl:justify-start sm:overflow-hidden sm:pb-4"
        >
          {this.showProducts()}
        </div>
      </div>
    )
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
    toggleFilter: input => dispatch(actions.toggleFilter(input)),
    toggleCartAnimation: () => dispatch(actions.toggleCartAnimation()),
    resetCartAnimation: () => dispatch(actions.resetCartAnimation())
  }
}

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index))
