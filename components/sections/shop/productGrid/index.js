import React, { Component } from "react";
import withData from "../../../../lib/withData";
import { connect } from "react-redux";
import actions from "../../../../store/actions";
import { TimelineLite } from "gsap";
import ProductThumbnail from "./productThumbnail";


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

  // quickAddSelection = val => {
  //   this.props.quickAddToCartQty(val);
  // }

  render() {
    let hoverId = this.props.misc.hoverId;
    let products = this.props.misc.strains;
    if (this.props.misc.activeFilters.length > 0) {
      for (let i = 0; i < this.props.misc.activeFilters.length; i++) {
        if (this.props.misc.activeFilters[i].hasOwnProperty("thc")) {
          if (this.props.misc.activeFilters[i]["thc"] === "thcLow") {
            products = products.filter(val => {
              for (let i of val.pthc) {
                if (i > 20) {
                  return false;
                }
              }
              return true;
            });
            continue;
          } else {
            products = products.filter(val => {
              for (let i of val.pthc) {
                if (i < 20) {
                  return false;
                }
              }
              return true;
            });
            continue;
          }
        }
        if (this.props.misc.activeFilters[i].hasOwnProperty("cbd")) {
          if (this.props.misc.activeFilters[i]["cbd"] === "cbdLow") {
            products = products.filter(val => {
              for (let i of val.pcbd) {
                if (i > 2) {
                  return false;
                }
              }
              return true;
            });
            continue;
          } else {
            products = products.filter(val => {
              for (let i of val.pcbd) {
                if (i < 2) {
                  return false;
                }
              }
              return true;
            });
            continue;
          }
        }
        if (this.props.misc.activeFilters[i].hasOwnProperty("genetic")) {
          products = products.filter(val => {
            if (val.genetic === this.props.misc.activeFilters[i]["genetic"])
              return true;
            return false;
          });
          continue;
        }
        if (this.props.misc.activeFilters[i].hasOwnProperty("type")) {
          products = products.filter(val => {
            if (val.type === this.props.misc.activeFilters[i]["type"])
              return true;
            return false;
          });
          continue;
        }
      }
    }
    products = products.map((product, index) => {

      return (
        <div
          key={index}
          ref={div => (this.myElements[index] = div)}
          onMouseEnter={() => {
            this.props.setHoverId(product._id)
          }}
          onMouseLeave={() => this.props.setHoverId(product._id)}
          className={
            hoverId == product._id
              ? "w-64 h-64 text-white relative z-50 slowish"
              : "w-64 h-64 text-white relative z-0 slowish"
          }
        >
          <ProductThumbnail hoverId={hoverId} product={product} {...this.props} />

        </div>
      )
    });

    return (
      <div className="w-3/4 min-h-500 text-white">
        <div
          className={
            this.props.misc.viewProductExpanded != null
              ? "flex flex-wrap justify-start"
              : "flex flex-wrap justify-start pt-16"
          }
        >
          {products}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setHoverId: id => dispatch(actions.setHoverId(id)),
    quickAddToCartQty: input => dispatch(actions.quickAddToCartQty(input)),
    expandProduct: id => dispatch(actions.expandProduct(id)),
    modifyCart: input => dispatch(actions.modifyCart(input)),
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
