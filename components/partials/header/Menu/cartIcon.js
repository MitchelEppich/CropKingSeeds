import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../../../store/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class Index extends Component {
  componentDidMount() {}
  // componentDidUpdate(prevProps) {
  //   // if (this.props.misc.hoverId == null) return;
  //   if (this.props.cart.recentAdd.length != 0) {
  //     if (this.props.shop.cartAnimation == true) {
  //       this.myTween.restart();
  //     }
  //   }
  // }
  render() {
    return (
      <div className="text-center mt-1 text-white">
        <div>
          <FontAwesomeIcon
            icon={faShoppingCart}
            className={
              this.props.cart.recentAdd.length != 0 &&
              this.props.shop.cartAnimation
                ? "bounce fa-lg pl-1"
                : "fa-lg pl-1"
            }
          />
          <span
            style={{
              height: "28px",
              width: "28px",
              borderRadius: "50%",
              background: "#ffca0f",
              position: "absolute",
              marginTop: "-10px",
              color: "#404040",
              fontSize: "16px",
              textAlign: "center",
              paddingTop: "6px",
              marginTop: "-14px",
              marginLeft: "-5px"
            }}
          >
            {Object.keys(this.props.cart.items).length}
          </span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetCartAnimation: () => dispatch(actions.resetCartAnimation())
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(Index);
