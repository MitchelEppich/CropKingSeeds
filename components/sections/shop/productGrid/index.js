import React, { Component } from "react";
import withData from "../../../../lib/withData";
import { connect } from "react-redux";
import actions from "../../../../store/actions";
import { TimelineLite, TweenMax } from "gsap";
import ProductThumbnail from "./productThumbnail";

import { faTimes, faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        let sortOptions = [
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
        ];

        let showSortOptions = sortOptions.map((val, index) => {
            let sort = this.props.shop.sort;
            return (
                <div
                    key={index}
                    className={`px-2 w-150 p-1 border-b border-grey-lightest text-left font-bold cursor-pointer hover:text-grey ${
                        this.props.shop.sort == val[0] ? "bg-smoke-grey" : "bg-white"
                    }`}
                    onClick={() => {
                        this.props.setSort({ value: sort == val[0] ? undefined : val[0] });
                    }}>
                    {val[1]}
                </div>
            );
        });
        let isSmallMediumOrLargeDevice = ["sm", "md", "lg"].includes(this.props.misc.mediaSize);
        let activeFilters = Object.keys(this.props.shop.activeFilters).map((filter, index) => {
            let filtersArr =
                filter == "genetic" || filter == "text"
                    ? [...this.props.shop.activeFilters[filter]]
                    : [this.props.shop.activeFilters[filter]];
            let label = filter == "type" || filter == "genetic" || filter == "text" ? null : filter + " %";
            return filtersArr.map((value, index) => {
                return (
                    <span
                        key={index}
                        onClick={() =>
                            this.props.toggleFilter({
                                filter: this.props.shop.activeFilters,
                                [filter]: value,
                                multiple: filter == "genetic" || filter == "text" ? true : false
                            })
                        }
                        className="capitalize text-grey border bg-grey-lightest flex justify-center cursor-pointer hover:bg-red-dark hover:text-white items-center rounded-tl-lg rounded-br-lg border-grey-lightest p-2 m-1 font-bold slowish">
                        {filter == "text" ? "search: " : ""}
                        {label || value}
                        <FontAwesomeIcon className="fa-sm ml-2" icon={faTimes} />
                    </span>
                );
            });
        });
        products = products
            .filter(a => {
                let _filter = this.props.shop.activeFilters;
                if (this.props.misc.searchValue != null) {
                    // console.log(JSON.stringify(a));
                    if (
                        !JSON.stringify(a)
                            .toLowerCase()
                            .includes(this.props.misc.searchValue)
                    )
                        return false;
                }
                if (Object.keys(_filter).length == 0) return true;
                let _pass = true;
                if (_filter.type != null && _filter.type != a.type.toLowerCase()) _pass = false;
                if (
                    _filter.genetic != null &&
                    _filter.genetic.length != 0 &&
                    !_filter.genetic.includes(a.genetic.toLowerCase())
                )
                    _pass = false;

                if (
                    _filter.text != null &&
                    _filter.text.length != 0 &&
                    !_filter.text.some(val => {
                        let _val = val.toLowerCase();
                        if (
                            [
                                a.genetic.toLowerCase(),
                                a.name.toLowerCase(),
                                a.type.toLowerCase(),
                                a.flowerTime.toLowerCase(),
                                a.yield[2].toLowerCase()
                            ].some($val => {
                                if ($val.includes(_val)) return true;
                            })
                        )
                            return true;
                    })
                )
                    _pass = false;
                if (_filter.cbd != null && _filter.cbd != a.cbd) _pass = false;
                if (_filter.thc != null && _filter.thc != a.thc) _pass = false;
                return _pass;
            })
            .sort(this.props.shop.sort != null ? sortingFunctions[this.props.shop.sort] : undefined)
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
                                ? "w-64 h-64 sm:w-screen sm:h-screen sm:pin-t sm:mt-4 md:w-44 md:h-48 lg:h-48 lg:w-44 text-white relative sm:absolute z-50 slowishish lg:my-4 sm:my-0 md:my-2 lg:mx-1 xl:mx-4 xxl:my-4 xxl:mx-8"
                                : "w-64 h-64 sm:cursor-pointer md:cursor-pointer sm:w-32 sm:h-32 md:w-44 md:h-48 lg:h-48 lg:w-44 text-white relative z-0 slowishish lg:my-4 sm:my-2 md:my-2 lg:mx-1 xl:ml-4 xxl:my-4 xxl:mx-8"
                        }>
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

        let showQuantity = products.length;

        let showSortByStyle = {
            height: this.props.misc.visibleScreen.includes("showSortBy") ? "262px" : "0px",
            transition: "all 0.2s ease-in-out",
            background: "white",
            borderRadius: "6px",
            width: "150px",
            position: "absolute",
            boxShadow: "0 2px 10px rgba(0,0,0,0.3)"
        };

        return (
            <div className="sm:w-full md:w-full lg:w-3/5 xl:w-2/3 xxl:w-3/4 min-h-700 text-white mb-20 sm:mb-0">
                <div
                    className={
                        hoverId != null && this.props.misc.mediaSize == "sm"
                            ? "hidden"
                            : "w-full justify-between flex pt-3 px-2 mt-5 text-grey-light items-center flex"
                    }>
                    <div className="flex flex-wrap">
                        <p className="w-full mb-1 pl-2 font-bold opacity-50">
                            {Object.keys(this.props.shop.activeFilters).length != 0 ? "Active Filters" : null}
                        </p>
                        {activeFilters}
                    </div>
                    <div className="z-50">
                        <div
                            onClick={() => {
                                this.props.setVisibleScreen({ input: "showSortBy" });
                            }}
                            className="font-bold flex relative items-center w-150 p-2 bg-grey-light z-50 rounded text-white cursor-pointer hover:bg-red-light">
                            {this.props.shop.sort == null ? (
                                <div>
                                    Sort by:
                                    <FontAwesomeIcon icon={faSortAmountDown} className="fa-lg ml-2" />
                                </div>
                            ) : (
                                sortOptions.find(a => {
                                    if (a[0] == this.props.shop.sort) return a;
                                })[1]
                            )}
                        </div>
                        <div style={showSortByStyle} className="overflow-hidden relative">
                            <div className="absolute">
                                <div className="p-2 rounded border border-grey-lightest w-150">{showSortOptions}</div>
                            </div>
                        </div>
                        {/* <select
              style={showSortByStyle}
              className="ml-1 p-1 z-40"
              value={this.props.shop.sort || ""}
              onChange={e => {
                let value = e.target.value;
                this.props.setSort({ value });
              }}
            >
              {sortOptions}
            </select> */}
                    </div>
                </div>
                <div className="flex w-full justify-end font-bold text-black ml-2 mb-6 p-2 text-sm mt-4">
                    Showing {showQuantity} {products.length <= 1 ? "Product" : "Products"}
                </div>
                <div className="ml-10 xl:ml-12 xxl:ml-12 sm:ml-2 flex flex-wrap pt-6 sm:justify-center md:justify-center lg:justify-start xl:justify-start xxl:justify-start sm:overflow-hidden sm:pb-4">
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
        modifyPotentialQuantity: input => dispatch(actions.modifyPotentialQuantity(input)),
        toggleFilter: input => dispatch(actions.toggleFilter(input)),
        toggleCartAnimation: () => dispatch(actions.toggleCartAnimation()),
        resetCartAnimation: () => dispatch(actions.resetCartAnimation())
    };
};

export default connect(
    state => state,
    mapDispatchToProps
)(withData(Index));
