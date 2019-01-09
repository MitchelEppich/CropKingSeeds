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

  componentDidUpdate(prevProps) {
    this.myTween.set(this.myElements, { autoAlpha: 1, y: -30 });
  }

  render() {
    let hoverId = this.props.misc.hoverId;
    let products = this.props.misc.strains;

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
              this.props.setHoverId(product._id);
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
              this.props.setHoverId(product._id);
            }}
            className={
              hoverId == product._id
                ? "w-64 h-64 text-white relative z-50 slowish my-4 mx-8"
                : "w-64 h-64 text-white relative z-0 slowish my-4 mx-8"
            }
          >
            <ProductThumbnail
              hoverId={hoverId}
              product={product}
              {...this.props}
            />
          </div>
        );
      });

    return (
      <div className="w-3/4 min-h-700 text-white">
        <div
          className={
            this.props.shop.viewProductExpanded != null
              ? "flex flex-wrap"
              : "flex flex-wrap pt-16"
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
    setCurrentProduct: input => dispatch(actions.setCurrentProduct(input)),
    modifyPotentialQuantity: input =>
      dispatch(actions.modifyPotentialQuantity(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Index));
