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
import { faComments, faCaretUp, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Loader from "../components/sections/loader";
import SearchBar from "../components/partials/header/searchBar";

class Layout extends Component {
    componentDidMount() {
        this.props.getStrains().then(strains => {
            const isClient = typeof document !== "undefined";
            if (!isClient) return;
            let url = Router.asPath.slice(1);
            if (url && url.length != 0) {
                let qr;
                if (url.includes("product/")) {
                    qr = url.slice("product/".length);
                    if (qr) {
                        // Find product with name
                        let index = strains.findIndex(a => {
                            return (
                                a.name
                                    .toLowerCase()
                                    .split(" ")
                                    .join("-") == qr
                            );
                        });

                        this.props.setCurrentProduct({ product: strains[index] }).then(res => {
                            let product = this.props.viewProduct.currentProduct;
                            let _index = 0;
                            while (product.price[_index] == -1) {
                                _index++;
                            }
                            this.props.quickAddToCartQty(_index);
                        });
                    }
                }
            }
        });
        this.props.getFeaturedList().then(res => {});

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
        // let cartRect = document.querySelector("#cart").getBoundingClientRect();
        // this.props.setCartPosition(cartRect);
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
            }
        }
    };
    render() {
        return (
            <div id="top" className="w-full bg-off-white">
                <Head>
                    <script src="../static/scripts/functions.js" />
                </Head>
                <Header {...this.props} />
                {this.props.misc.hoverId == null || ["md", "lg", "xl", "xxl"].includes(this.props.misc.mediaSize) ? (
                    <SearchBar {...this.props} />
                ) : null}
                {/* <AgeVerification {...this.props} /> */}
                <div className="pt-32">
                    {" "}
                    <ShareButtons {...this.props} />
                    <div className="bg-white relative z-30 px-4 py-4 w-full xxl:w-1300 xl:w-900 lg:w-700 md:w-main mx-auto shadow-md">
                        {this.props.misc.strains != null ? (
                            this.props.children
                        ) : (
                            <div className="h-screen w-full">
                                <Loader {...this.props} />
                            </div>
                        )}
                    </div>
                </div>
                <div
                    className="sm:hidden md:hidden lg:hidden fixed z-999 w-20 mb-48 h-16 bg-red-darker pin-b pin-l text-white text-center text-lg pt-3 pr-3 rounded-tr-full rounded-br-full cursor-pointer hover:bg-red-dark scale-item shadow-md"
                    onClick={() => Tawk_API.toggle()}>
                    <FontAwesomeIcon icon={faComments} className="ml-2 fa-2x cursor-pointer" />
                    {/* <h3>CHAT</h3> */}
                </div>
                <AnchorLink className="items-center flex" href="#top">
                    <div
                        id="jumpToTop"
                        onClick={() => window.scrollTo(0, 0)}
                        className="fixed z-999 w-12 pb-2 mb-12 mr-4 h-12 bg-red-darker pin-b pin-r text-white text-center text-lg justify-center cursor-pointer hover:bg-red-dark scale-item items-center flex rounded shadow-md">
                        <FontAwesomeIcon icon={faAngleUp} className="fa-2x cursor-pointer flex justify-center mt-1" />
                    </div>
                </AnchorLink>

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
        setEmail: input => dispatch(actions.setEmail(input)),
        subscribeToNewsletter: input => dispatch(actions.subscribeToNewsletter(input)),
        toggleShowFilters: bool => dispatch(actions.toggleShowFilters(bool)),
        setCartPosition: posObj => dispatch(actions.setCartPosition(posObj)),
        getFeaturedList: () => dispatch(actions.getFeaturedList()),
        quickAddToCartQty: input => dispatch(actions.quickAddToCartQty(input)),
        setSearch: value => dispatch(actions.setSearch(value))
    };
};

export default connect(
    state => state,
    mapDispatchToProps
)(Layout);
