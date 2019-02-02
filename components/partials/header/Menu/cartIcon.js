import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../../../store/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { TimelineLite } from "gsap";

class Index extends Component {
  constructor(props) {
    super(props);
    this.myTween = null;
    this.myElement = null;
  }
  componentDidMount() {
    this.myTween = new TimelineLite({
      onComplete: this.props.resetCartAnimation
    });
    this.myTween.pause();
    this.myTween.add(
      TweenLite.to(this.myElement, 0.2, { transform: "scale(1.4)" })
    );
    this.myTween.add(
      TweenLite.to(this.myElement, 0.2, { transform: "scale(0.8)" })
    );
    this.myTween.add(
      TweenLite.to(this.myElement, 0.2, { transform: "scale(1.3)" })
    );
    this.myTween.add(
      TweenLite.to(this.myElement, 0.2, { transform: "scale(0.9)" })
    );
    this.myTween.add(
      TweenLite.to(this.myElement, 0.2, { transform: "scale(1.2)" })
    );
    this.myTween.add(
      TweenLite.to(this.myElement, 0.2, { transform: "scale(1)" })
    );
  }
  componentDidUpdate(prevProps) {
    if (this.props.shop.cartAnimation) {
      this.myTween.restart();
    }
  }
  render() {
    return (
      <div
        ref={div => (this.myElement = div)}
        className="text-center cursor-pointer mt-1 text-white"
      >
        <div>
          <FontAwesomeIcon icon={faShoppingCart} className="fa-lg" />
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