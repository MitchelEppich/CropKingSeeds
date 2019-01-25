import React, { Component } from "react";
import withData from "../../../../lib/withData";
import { connect } from "react-redux";
import actions from "../../../../store/actions";
import { TimelineLite, TweenMax } from "gsap";
import { Transition } from "react-transition-group";
import ProductThumbnail from "./productThumbnail";

class Index extends Component {
    constructor(props) {
        super(props);
        this.myTween = new TimelineLite({ paused: true });
        this.myElements = [];
        this.state = {
            show: null
        };
        this.toggleComponent = this.toggleComponent.bind(this);
    }
    toggleComponent(index) {
        this.setState({ show: index != this.state.show ? index : null });
    }
    componentDidMount() {
        this.myTween.staggerTo(this.myElements, 0.5, { autoAlpha: 1, y: -30 }, 0.1);
        this.myTween.restart();
    }

    componentDidUpdate(prevProps) {
        this.myTween.set(this.myElements, { autoAlpha: 1, y: -30 });
    }

    flyToCart(toggle, index) {
        toggle(index);
        // myElements[index].style.position = "absolute";
        // myElements[index].style.display = "inline-block";
        // let tween = new TimelineLite({
        //     paused: true
        // }).to(myElements[index], 2.5, {
        //     x: 0,
        //     y: -2000,
        //     opacity: 0
        // });
        // tween.restart();
        // setTimeout(() => {
        //     myElements[index].style.display = "none";
        // }, 3000);
    }

    render() {
        const { show } = this.state;
        let hoverId = this.props.misc.hoverId;
        let products = this.props.misc.strains;
        let isSmallMediumOrLargeDevice = ["sm", "md", "lg"].includes(this.props.misc.mediaSize);

        products = products
            .filter(a => {
                let _filter = this.props.shop.activeFilters;
                if (Object.keys(_filter).length == 0) return true;
                let _pass = true;
                if (_filter.type != null && _filter.type != a.type.toLowerCase()) _pass = false;
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
                    <React.Fragment key={index}>
                        <Transition
                            timeout={1000}
                            mountOnEnter
                            unmountOnExit
                            in={show == index}
                            addEndListener={(node, done) => {
                                TweenMax.to(node, 0.5, {
                                    x: show == index ? 0 : 1000,
                                    y: show == index ? 0 : -1000,
                                    autoAlpha: show == index ? 1 : 0,
                                    onComplete: this.setState({ show: null })
                                });
                            }}>
                            <div
                                ref={div => (this.myElements[index + products.length] = div)}
                                className={
                                    hoverId == product._id
                                        ? "w-64 h-64 sm:w-screen sm:h-screen md:w-48 md:h-48 lg:h-48 lg:w-48 text-white relative sm:absolute z-50 slowish lg:my-4 sm:my-2 md:my-2 lg:mx-8 xl:mx-8 xxl:mx-8"
                                        : "w-64 h-64 sm:cursor-pointer md:cursor-pointer sm:w-32 sm:h-32 md:w-48 md:h-48 relative lg:h-48 lg:w-48 z-50 text-white z-0 slowish lg:my-4 sm:my-2 md:my-2 lg:mx-8 xl:mx-8 xxl:mx-8"
                                }>
                                <ProductThumbnail
                                    isSmallMediumOrLargeDevice={isSmallMediumOrLargeDevice}
                                    hoverId={hoverId}
                                    product={product}
                                    {...this.props}
                                />
                            </div>
                        </Transition>
                        <div
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
                                    ? "w-64 h-64 sm:w-screen sm:h-screen md:w-48 md:h-48 lg:h-48 lg:w-48 text-white relative sm:absolute z-50 slowish lg:my-4 sm:my-2 md:my-2 lg:mx-8 xl:mx-8 xxl:mx-8"
                                    : "w-64 h-64 sm:cursor-pointer md:cursor-pointer sm:w-32 sm:h-32 md:w-48 md:h-48 lg:h-48 lg:w-48 text-white relative z-0 slowish lg:my-4 sm:my-2 md:my-2 lg:mx-8 xl:mx-8 xxl:mx-8"
                            }>
                            <ProductThumbnail
                                isSmallMediumOrLargeDevice={isSmallMediumOrLargeDevice}
                                hoverId={hoverId}
                                index={index}
                                product={product}
                                {...this.props}
                                flyToCart={this.flyToCart}
                                toggle={this.toggleComponent}
                            />
                        </div>
                    </React.Fragment>
                );
            });

        return (
            <div className="sm:w-full md:w-full lg:w-3/4 xl:w-3/4 xxl:w-3/4 min-h-700 text-white">
                <div
                    className={
                        hoverId != null && this.props.misc.mediaSize == "sm"
                            ? "hidden"
                            : "w-full justify-end flex pt-3 p-2  mb-2 text-grey-light items-center flex"
                    }>
                    Sort by:
                    <select className="ml-3">
                        <option value="Newest">Newest</option>
                        <option value="Most Popular">Most Popular</option>
                        <option value="Most Reviewed">Most Reviewed</option>
                    </select>
                </div>
                <div className="flex flex-wrap pt-6 sm:justify-center md:justify-center lg:justify-end xl:justify-end xxl:justify-end sm:overflow-hidden">
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
        modifyPotentialQuantity: input => dispatch(actions.modifyPotentialQuantity(input))
    };
};

export default connect(
    state => state,
    mapDispatchToProps
)(withData(Index));
