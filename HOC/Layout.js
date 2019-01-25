/**************************************/
/*Our highest ordered component. This
component wraps each page. Naturally this
component has the navigation menu and footer.*/
/**************************************/

import "../scss/home.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../store/actions";

import Router from "next/router";

import Cart from "../components/sections/cart";
import Header from "../components/partials/header";
import Footer from "../components/partials/footer";
import Head from "next/head";
import ShareButtons from "../components/sections/shareButtons";
import AgeVerification from "../components/sections/ageVerification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faCaretUp } from "@fortawesome/free-solid-svg-icons";

class Layout extends Component {
    componentDidMount() {
        this.props.getStrains().then(strains => {
            let url = this.props.router.asPath.slice(1);
            if (url && url.length != 0) {
                let qr;
                if (url.includes("product/")) {
                    qr = url.slice("product/".length);
                    if (qr) {
                        // Find product with name
                        let index = strains.findIndex(a => {
                            return a.name.toLowerCase().replace(" ", "-") == qr;
                        });
                        console.log(strains, index);
                        this.props.setCurrentProduct({ product: strains[index] });
                        Router.push("/viewProduct", "/product/" + qr);
                    }
                }
            }
        });

        if (this.props.checkout.viewCurrency == null)
            this.props.setCurrency({
                currency: {
                    label: "usd",
                    ...this.props.checkout.availableCurrency["usd"]
                }
            });

        let mediaSize = this.setMediaSize();
        if (["sm", "md", "lg"].includes(mediaSize)) {
            this.props.toggleShowFilters(false);
        }
        window.addEventListener("resize", () => {
            this.setMediaSize();
        });
        let cartRect = document.querySelector("#cart").getBoundingClientRect();
        this.props.setCartPosition(cartRect);
    }

    setMediaSize = () => {
        let mediaSizes = {
            sm: { min: 100, max: 479 },
            md: { min: 480, max: 767 },
            lg: { min: 768, max: 991 },
            xl: { min: 992, max: 1367 },
            xxl: { min: 1368, max: 999999999 }
        };
        for (let mediaSize of Object.keys(mediaSizes)) {
            let _mediaSizeDim = mediaSizes[mediaSize];
            let _width = window.innerWidth;
            if (
                _width == Math.max(_mediaSizeDim.min, Math.min(_width, _mediaSizeDim.max)) &&
                this.props.misc.mediaSize != mediaSize
            ) {
                if (["sm", "md"].includes(mediaSize)) {
                    this.props.toggleShowFilters(false);
                    this.props.setMediaSize({ mediaSize: mediaSize });
                } else {
                    this.props.toggleShowFilters(true);
                    this.props.setMediaSize({ mediaSize: mediaSize });
                }

                return mediaSize;
            }
        }
    };

    render() {
        return (
            <div style={{ backgroundColor: "#f3f3f3", height: "100%" }}>
                <Head>
                    <script src="../static/scripts/functions.js" />
                </Head>
                <Header {...this.props} />
                {/* <AgeVerification {...this.props} /> */}
                <div className="pt-32">
                    {" "}
                    <ShareButtons {...this.props} />
                    <div className="bg-white relative z-30 px-4 py-4 w-full xxl:w-1300 xl:w-900 lg:w-700 md:w-main mx-auto shadow-md">
                        {this.props.children}
                    </div>
                </div>
                <div
                    className="sm:hidden md:hidden lg:hidden fixed z-999 w-24 mb-48 h-24 bg-red-light pin-b pin-l text-white text-center text-lg pt-4 pr-3 rounded-tr-full rounded-br-full cursor-pointer hover:bg-red-dark scale-item"
                    onClick={() => Tawk_API.toggle()}>
                    <FontAwesomeIcon icon={faComments} className="fa-3x cursor-pointer" />
                    {/* <h3>CHAT</h3> */}
                </div>

                <div
                    className={
                        window.scrollY > window.innerHeight
                            ? "fixed z-999 w-16 mb-24 h-16 bg-red-light pin-b pin-l text-white text-center text-lg pt-2 rounded-br-full rounded-tr-full cursor-pointer hover:bg-red-dark scale-item"
                            : "fixed z-999 w-16 mb-24 h-16 bg-red-light pin-b pin-l text-white text-center text-lg pt-2 rounded-br-full rounded-tr-full cursor-pointer hover:bg-red-dark scale-item hidden"
                    }
                    onClick={() => window.scrollTo(0, 0)}>
                    <FontAwesomeIcon icon={faCaretUp} className="fa-2x my-1 pr-1  cursor-pointer" />
                </div>

                <Cart {...this.props} />
                <Footer {...this.props} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setVisibleScreen: input => dispatch(actions.setVisibleScreen(input)),
        getStrains: () => dispatch(actions.getStrains()),
        modifyCart: input => dispatch(actions.modifyCart(input)),
        setCurrency: input => dispatch(actions.setCurrency(input)),
        modifyPotentialQuantity: input => dispatch(actions.modifyPotentialQuantity(input)),
        setAgeVerification: input => dispatch(actions.setAgeVerification(input)),
        setMediaSize: input => dispatch(actions.setMediaSize(input)),
        setCurrentProduct: input => dispatch(actions.setCurrentProduct(input)),
        toggleShowFilters: bool => dispatch(actions.toggleShowFilters(bool)),
        setCartPosition: posObj => dispatch(actions.setCartPosition(posObj))
    };
};

export default connect(
    state => state,
    mapDispatchToProps
)(Layout);
