/**************************************/
/*Our highest ordered component. This
component wraps each page. Naturally this
component has the navigation menu and footer.*/
/**************************************/

import "../scss/home.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../store/actions";

import Cart from "../components/sections/cart";
import Header from "../components/partials/header";
import Footer from "../components/partials/footer";
import Head from "next/head";
import ShareButtons from "../components/sections/shareButtons";
import AgeVerification from "../components/sections/ageVerification";
// import Particles from "react-particles-js";

import Tawkto from "../components/sketches/tawkto";

class Layout extends Component {
    componentDidMount() {
        this.props.getStrains();
        if (this.props.checkout.viewCurrency == null)
            this.props.setCurrency({
                currency: {
                    label: "usd",
                    ...this.props.checkout.availableCurrency["usd"]
                }
            });

        let mediaSize = this.setMediaSize();
        if (["sm", "md", "lg"].includes(mediaSize)) {
            this.props.toggleShowFilters();
        }

        window.addEventListener("resize", () => {
            this.setMediaSize();
        });
        // Tawkto();
        // let Tawk_API = Tawk_API || {},
        //     Tawk_LoadStart = new Date();
        // (function() {
        //     let s1 = document.createElement("script");
        //     // s0 = document.getElementsByTagName("script")[0];
        //     s1.async = true;
        //     s1.src = "https://embed.tawk.to/5ae8bd0d5f7cdf4f0533c472/default";
        //     s1.charset = "UTF-8";
        //     s1.setAttribute("crossorigin", "*");
        //     document.body.appendChild(s1);
        //     // s0.parentNode.insertBefore(s1, s0);
        // });
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
                this.props.setMediaSize({ mediaSize: mediaSize });
                return mediaSize;
            }
        }
    };

    render() {
        return (
            <div style={{ backgroundColor: "#f3f3f3", height: "100%" }}>
                {/* <Tawkto /> */}
                {/* <Head>
                    <script crossorigin="*" async src="https://embed.tawk.to/5ae8bd0d5f7cdf4f0533c472/default" />
                </Head> */}
                <Header {...this.props} />
                {/* <AgeVerification {...this.props} /> */}
                <div className="pt-32">
                    {" "}
                    <ShareButtons {...this.props} />
                    <div className="bg-white relative z-30 px-4 py-4 w-full xxl:w-1300 xl:w-900 lg:w-700 mx-auto shadow-md">
                        {this.props.children}
                    </div>
                </div>
                <Cart {...this.props} />
                {/* <Footer {...this.props} /> */}
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
        toggleShowFilters: () => dispatch(actions.toggleShowFilters())
    };
};

export default connect(
    state => state,
    mapDispatchToProps
)(Layout);
