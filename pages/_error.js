/*******************************************/
/*404 page*/
/******************************************/

import React, { Component } from "react";
import withData from "../lib/withData";
import { connect } from "react-redux";
import actions from "../store/actions";

import Layout from "../HOC/Layout";

class Error extends Component {
  componentDidMount() {
    this.loop();
  }

  loop = () => {
    let eyesShouldMove = this.props.misc.eyesShouldMove;

    let min = eyesShouldMove ? 4000 : 4000;
    let max = eyesShouldMove ? 8000 : 15000;

    let rand = Math.round(Math.random() * (max - min)) + min;
    setTimeout(() => {
      this.props.setEyesShouldMove({ value: !this.props.misc.eyesShouldMove });
      this.loop();
    }, rand);
  };

  render() {
    let styleKing = {
      // filter: "drop-shadow(60px 22px 19px rgba(0, 0, 0, 0.4))"
    };

    let styleBackground = {
      backgroundImage:
        "linear-gradient(to right, #bede94, #b7e29d, #afe5a7, #a9e8b1, #a3ebbb, #9cecc0, #95eec5, #8defcb, #7ff0ce, #6ef1d1, #5af1d5, #3df2da)"
    };

    let moveSpaceX = 45;
    let moveSpaceY = 30;

    let eyesShouldMove = this.props.misc.eyesShouldMove;

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", e => {
        let eyes = document.querySelector(".eyes");

        let mX =
          e.pageX - eyes.getBoundingClientRect().left - eyes.clientWidth / 2;
        let mY =
          e.pageY - eyes.getBoundingClientRect().top - eyes.clientHeight / 2;

        let maxMouseX = window.innerWidth;
        let maxMouseY = window.innerHeight;

        let xF = mX / maxMouseX;
        let yF = mY / maxMouseY;

        let eye = document.querySelectorAll(".eye");

        for (let item of eye) {
          let iris = item.querySelector(".iris");

          if (!eyesShouldMove) {
            xF = 0.5;
            yF = 0.3;
          }

          let left = moveSpaceX * xF + item.clientWidth / 2;
          let top = moveSpaceY * yF + item.clientHeight / 2;

          iris.style.left = `${left}px`;
          iris.style.top = `${top}px`;
        }
      });
    }

    return (
      <Layout>
        <div
          style={styleBackground}
          className="w-full inline-flex md:flex-col-reverse sm:flex-col-reverse"
        >
          <div className="w-2/5 text-center justify-center md:w-full sm:w-full">
            {/* <FontAwesomeIcon
            icon={faExclamationCircle}
            className="img-error text-grey-light fa-10x sm:fa-5x mt-12 opacity-50"
          /> */}
            <h1 className="mt-10 text-5xl underline mt-16">404!</h1>
            <h3 className="mt-2 mb-4 subtitle-message text-2xl">
              Page Not Found!
            </h3>
            <div className="mt-24 xl:mt-12 lg:mt-2 md:mt-6 sm:mt-6 md:w-full sm:w-full">
              <h2 className="text-6xl font-bold lg:text-4xl md:text-3/5xl sm:text-3/5xl">
                Huzzah!
              </h2>
              <p className="text-3xl lg:text-lg md:text-xl sm:text-xl">
                T'is the King, but what is this?
              </p>
              <p className="ml-24 text-3xl font-bold lg:text-lg md:ml-6 sm:ml-6">
                You bear no gifts...
              </p>
              <p className="opacity-25 font-bold ml-12 p-2">
                The King will not forget...
              </p>
            </div>

            <div className="mt-24 xl:mt-10 lg:mt-8 md:mt-6 md:mb-8 sm:mt-6 sm:mb-8 w-full">
              <a
                href="../shop"
                className="p-2 px-8 bg-black text-white hover:bg-grey hover:text-white"
              >
                Return to Shop
              </a>
            </div>
          </div>
          <div className="w-3/5 text-right md:hidden sm:hidden">
            <div>
              <img
                src={this.props.misc.CFURL + "/banners/King_No_eyes.png"}
                style={styleKing}
                className="relative z-999"
              />
            </div>
            <div className="eyes">
              <div className="eye" id="eye1">
                <div className="iris" />
              </div>
              <div className="eye" id="eye2">
                <div className="iris" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setEyesShouldMove: input => dispatch(actions.setEyesShouldMove(input))
  };
};

export default connect(
  state => state,
  mapDispatchToProps
)(withData(Error));
