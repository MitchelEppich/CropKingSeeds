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

    window.addEventListener("resize", () => {
      let breakpoints = [
        0,
        515,
        776,
        1030,
        1280,
        1350,
        1530,
        1780,
        1920,
        2268,
        2300,
        2400,
        2750,
        3840
      ];

      for (let i = 0; i < breakpoints.length - 1; i++) {
        if (
          window.innerWidth > breakpoints[i] &&
          window.innerWidth <= breakpoints[i + 1] &&
          this.props.misc.currentMediaSize != breakpoints[i + 1]
        ) {
          this.props.setMediaSize(breakpoints[i + 1]);
        }
      }
    });

    let body = document.querySelector("#body");
    body.addEventListener("scroll", () => {
      if (
        body.scrollHeight - 100 > body.scrollTop + body.clientHeight &&
        !this.props.list.listUpdating
      ) {
        this.props.toggleUpdatingStatus(true);
        this.props.buildList(this.props.global.usedKeys);
      }
    });

    // Tawkto();
  }

  componentDidUpdate() {}

  render() {
    return (
      <div style={{ backgroundColor: "#f3f3f3", height: "100%" }}>
        {/* <Particles
          width="100vw"
          height="100vh"
          style={{ position: "absolute", zIndex: 0 }}
          params={{
            particles: {
              number: { value: 80, density: { enable: true, value_area: 800 } },
              color: { value: "#ffffff" },

              shape: {
                type: "image",
                stroke: { width: 0, color: "#FFF" },
                polygon: { nb_sides: 5 },
                image: {
                  src: "../static/img/cannabis.svg",
                  width: 100,
                  height: 100,
                  color: { value: "#ffffff" }
                }
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
              },
              size: {
                value: 15,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: true, mode: "bubble" },
                onclick: { enable: true, mode: "push" },
                resize: true
              },
              modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
              }
            },
            retina_detect: true
          }}
        /> */}
        {/* <Tawkto /> */}
        <Header {...this.props} />
        <div className="pt-48">
          <div className="bg-white relative z-30 px-4 py-4 w-full xl:w-1300 lg:w-1300 mx-auto shadow-md">
            {this.props.children}
          </div>
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
    modifyPotentialQuantity: input =>
      dispatch(actions.modifyPotentialQuantity(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(Layout);
