import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../../store/actions";
import { TimelineLite } from "gsap";

class Index extends Component {
    constructor(props) {
        super(props);
        this.myTween = null;
        this.myElement = null;
    }
    componentDidMount() {
        // this.myTween = new TimelineLite({
        //     onComplete: this.props.resetCartAnimation
        // });
        // this.myTween.pause();
        // this.myTween.add(TweenLite.to(this.myElement, 0.2, { transform: "scale(1.4)" }));
        // this.myTween.add(TweenLite.to(this.myElement, 0.2, { transform: "scale(0.8)" }));
        // this.myTween.add(TweenLite.to(this.myElement, 0.2, { transform: "scale(1.3)" }));
        // this.myTween.add(TweenLite.to(this.myElement, 0.2, { transform: "scale(0.9)" }));
        // this.myTween.add(TweenLite.to(this.myElement, 0.2, { transform: "scale(1.2)" }));
        // this.myTween.add(TweenLite.to(this.myElement, 0.2, { transform: "scale(1)" }));
    }
    componentDidUpdate(prevProps) {
        // if (this.props.shop.cartAnimation) {
        //     this.myTween.restart();
        // }
    }
    render() {
        return (
            <React.Fragment>
                <div ref={div => (this.myElement = div)} className="lds-ring">
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
                <img
                    src="../static/img/cks-logo-header.png"
                    onClick={() => console.log(props)}
                    className="cks-logo-loader z-999 p-0 w-130 scale-item cursor-pointer"
                />
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    state => state,
    mapDispatchToProps
)(Index);
