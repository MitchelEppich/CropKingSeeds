import React from "react";
import Link from "next/link";
import {
  faSignInAlt,
  faArrowRight,
  faAngleRight,
  faCog,
  faCogs
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGooglePlus,
  faPinterest
} from "@fortawesome/free-brands-svg-icons";

const Footer = props => {
  let imgKingFooter = {
    filter: "drop-shadow(0px 4px 13px rgba(0, 0, 0, 0.5))",
    width: "170px",
    height: "auto"
  };

  return (
    <div
      onClick={() => props.toggleStrainsMenu(false)}
      className="w-full border-b-8 border-grey-darker mt-10 bg-grey inline-flex justify-between xxl:px-12 xl:px-12 sm:block md:block lg:block relative pb-1 sm:pb-0 md:pb-0 lg:pb-0"
    >
      <div className="mx-auto inline-flex sm:block md:block w-1300 sm:w-full md:w-full lg:w-full relative">
        {/* <div className="absolute sm:hidden md:hidden w-200 mx-auto pin-t pin-r pt-3 -mt-10 bg-grey text-white p-2">
          <div className="w-full flex justify-around items-center">
            <label className="uppercase cursor-pointer text-white hover:text-red font-bold flex justify-around items-center w-full">
              <FontAwesomeIcon
                icon={faCog}
                className="mr-1 fa-lg text-grey-light"
              />{" "}
              Low GPU Mode
              <input
                aria-label="lowGPUMode"
                onChange={() => {
                  props.toggleLowGPUMode(!props.misc.lowGPUMode);
                }}
                type="checkbox"
                style={{
                  height: "18px",
                  width: "18px"
                }}
                className="ml-2 cursor-pointer"
                defaultChecked={props.misc.lowGPUMode}
                value={props.misc.lowGPUMode || false}
              />
            </label>
          </div>
        </div> */}
        <div className="sm:w-full md:w-full lg:w-full sm:hidden md:hidden lg:hidden xl:hidden">
          {" "}
          <img
            style={imgKingFooter}
            alt={props.misc.CFURL + "/logos/cks-logo-footer.png"}
            src={props.misc.CFURL + "/logos/cks-logo-footer.png"}
            className="mt-8"
          />
        </div>
        <div className="mt-6 sm:pb-4 xl:pl-0 sm:pt-4 md:pt-10 w-1/4 lg:w-1/2 lg:pl-6 md:w-full sm:w-full sm:pl-0 md:pl-0 sm:block md:block">
          {" "}
          <h3 className="text-red p-1 text-center pl-2 uppercase text-2xl font-extrabold sm:pl-0 md:pl-0 sm:text-center md:text-center">
            Menu
          </h3>
          <div className="text-white font-bold px-2 inline-flex sm:w-full sm:flex sm:mx-auto sm:justify-center md:w-full md:flex md:mx-auto md:justify-center w-full">
            <div className="sm:ml-0 md:ml-4 w-1/2 text-right sm:flex sm:flex-wrap md:flex md:flex-wrap">
              <a
                aria-label="about"
                className="text-white sm:w-full md:w-full text-xl lg:text-lg md:text-lg  hover:text-grey-light cursor-pointer md:text-right sm:text-right"
                rel="noreferrer"
                href="/about"
              >
                {/* <Link href="/about"> */}
                <p className="sm:w-full md:w-full text-xl lg:text-lg p-2 md:text-lg hover:text-grey-light cursor-pointer md:text-right sm:text-right">
                  About
                </p>
                {/* </Link> */}
              </a>
              <a
                aria-label="contact"
                className="text-white sm:w-full md:w-full text-xl lg:text-lg md:text-lg   hover:text-grey-light cursor-pointer md:text-right sm:text-right"
                rel="noreferrer"
                href="/contact"
              >
                {/* <Link href="/contact"> */}
                <p className="sm:w-full md:w-full text-xl lg:text-lg p-2 md:text-lg hover:text-grey-light cursor-pointer whitespace-no-wrap md:text-right sm:text-right">
                  Contact Us
                </p>
                {/* </Link>{" "} */}
              </a>
              <a
                aria-label="partners"
                className="text-white sm:w-full md:w-full text-xl lg:text-lg md:text-lg   hover:text-grey-light cursor-pointer md:text-right sm:text-right"
                rel="noreferrer"
                href="/partners"
              >
                {/* <Link href="/partners"> */}
                <p className="sm:w-full md:w-full text-xl lg:text-lg p-2 md:text-lg hover:text-grey-light cursor-pointer md:text-right sm:text-right">
                  Partners
                </p>
                {/* </Link> */}
              </a>
              <a
                style={{ color: "white" }}
                rel="noreferrer"
                aria-label="germinate"
                href="https://www.marijuanaseeds.com/how-to-germinate-marijuana-seeds-successfully/"
                target="_blank"
                className="font-bold w-full text-right sm:w-full md:w-full text-xl lg:text-lg md:text-lg   hover:text-grey-light cursor-pointer md:text-right sm:text-right"
              >
                <p className="sm:w-full md:w-full text-xl lg:text-lg p-2 md:text-lg hover:text-grey-light cursor-pointer">
                  Germinate
                </p>
              </a>
              <a
                aria-label="news"
                className="text-white sm:w-full md:w-full text-xl lg:text-lg md:text-lg   hover:text-grey-light cursor-pointer md:text-right sm:text-right"
                rel="noreferrer"
                href="/news"
              >
                {/* <Link href="/news"> */}
                <p className="sm:w-full md:w-full text-xl lg:text-lg p-2 md:text-lg hover:text-grey-light cursor-pointer">
                  News
                </p>
                {/* </Link>{" "} */}
              </a>
            </div>
            <div className="ml-4 xl:ml-0 w-1/2 text-left sm:flex sm:ml-0 sm:flex-wrap md:flex md:flex-wrap">
              <a
                aria-label="affiliates"
                className="text-white sm:w-full md:w-full text-xl lg:text-lg md:text-lg   hover:text-grey-light cursor-pointer"
                rel="noreferrer"
                href="/affiliates"
              >
                {/* <Link href="/affiliates"> */}
                <p className="sm:w-full md:w-full text-xl lg:text-lg p-2 md:text-lg hover:text-grey-light cursor-pointer">
                  Affiliates
                </p>
                {/* </Link>{" "} */}
              </a>
              <a
                aria-label="privacy"
                className="text-white sm:w-full md:w-full text-xl lg:text-lg md:text-lg   hover:text-grey-light cursor-pointer"
                rel="noreferrer"
                href="/privacy"
              >
                {/* <Link href="/privacy"> */}
                <p className="sm:w-full md:w-full text-xl lg:text-lg p-2 md:text-lg  hover:text-grey-light cursor-pointer whitespace-no-wrap">
                  Privacy/TOS
                </p>
                {/* </Link> */}
              </a>
              <a
                aria-label="faq#payment"
                className="text-white sm:w-full md:w-full text-xl lg:text-lg md:text-lg   hover:text-grey-light cursor-pointer"
                rel="noreferrer"
                href="/faq#payment"
              >
                {/* <Link href="/faq#payment"> */}
                <p className="sm:w-full md:w-full text-xl lg:text-lg p-2 md:text-lg  hover:text-grey-light cursor-pointer">
                  Payment
                </p>
                {/* </Link> */}
              </a>
              <a
                aria-label="faq#delivery"
                className="text-white sm:w-full md:w-full text-xl lg:text-lg md:text-lg   hover:text-grey-light cursor-pointer"
                rel="noreferrer"
                href="/faq#delivery"
              >
                {/* <Link href="/faq#delivery"> */}
                <p className="sm:w-full md:w-full text-xl lg:text-lg p-2 md:text-lg hover:text-grey-light cursor-pointer">
                  Delivery
                </p>
                {/* </Link> */}
              </a>
              <a
                aria-label="faq"
                className="text-white sm:w-full md:w-full text-xl lg:text-lg md:text-lg hover:text-grey-light cursor-pointer"
                rel="noreferrer"
                href="/faq"
              >
                {/* <Link href="/faq"> */}
                <p className="text-xl lg:text-lg md:text-lg p-2 hover:text-grey-light cursor-pointer">
                  FAQ
                </p>
                {/* </Link> */}
              </a>
            </div>
          </div>
        </div>
        <div className="text-white text-center mx-6 sm:mx-0 md:mx-0 sm:pt-2 sm:pb-4 md:pt-1 sm:bg-grey-dark md:bg-grey-dark w-3/8 xl:w-2/4 md:mt-8 pt:mt-8 md:w-full  sm:w-full sm:block md:block lg:w-1/2">
          <h4 className="p-2 mt-4 mb-1 text-2/5xl lg:text-xl lg:mt-6 md:text-xl md:mt-6 font-extrabold">
            Subscribe to the CKS Newsletter
          </h4>
          <p className="p-2 w-container mx-auto text-center">
            All the king's horses and all the king's men... they wrote a
            newsletter.
          </p>
          {!props.misc.subscribedToNewsletter ? (
            <form
              onSubmit={event => {
                event.preventDefault();
                const form = event.target;
                const formData = new window.FormData(form);
                props.subscribeToNewsletter({ email: formData.get("email") });
                props.setEmail({ email: null });
              }}
              className="inline-flex relative w-3/5 lg:w-2/3 lg:mx-auto rounded-tr rounded-br h-10 items-center mt-4 md:mb-6 sm:mb-6 overflow-hidden"
            >
              <input
                type="email"
                name="email"
                aria-label="email"
                required="required"
                className="p-2 w-full h-10 rounded-tr rounded-br"
                value={props.misc.newsletterEmail || ""}
                placeholder="Email address"
                onChange={e => {
                  let value = e.target.value;
                  props.setEmail({ email: value });
                  e.target.setCustomValidity("");
                }}
                onInvalid={e => {
                  e.target.setCustomValidity(
                    'Must be valid email and should contain "@"'
                  );
                }}
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,3}$"
              />
              <button
                aria-label="subscribe"
                type="submit"
                className="absolute pin-r pl-2 h-10  bg-red-darker text-white cursor-pointer hover:bg-grey-light hover:text-red-darker w-16"
              >
                <FontAwesomeIcon icon={faAngleRight} className="fa-2x h-10 " />
              </button>
            </form>
          ) : (
            <p className="text-2xl font-bold text-red mt-8">
              Thank you for subscribing!
            </p>
          )}
          {/* <div
            style={{ textShadow: "0 1px 4px #000" }}
            className="p-2 px-8 bg-yellow-dark text-white text-2xl w-container mt-2 mx-auto rounded font-bold text-center cursor-pointer hover:bg-grey-light">
            Subscribe
          </div> */}
          <p className="p-2 mt-8 w-container mx-auto text-center sm:hidden md:hidden text-base lg:hidden">
            Copyright © 2019 Crop King Seeds
          </p>
        </div>
        <div className="p-2 w-1/5 xl:w-1/4 sm:w-full md:w-full lg:w-1/3 sm:mx-0 md:mx-0 sm:p-0 md:p-0 sm:block md:block lg:hidden lg:w-1/8 md:mt-8 pt:mt-8">
          <div className="w-225 bg-red-darker p-1 flex justify-center md:hidden sm:hidden mx-auto items-center mt-4">
            <p
              onClick={() => {
                props.toggleLowGPUMode(!props.misc.lowGPUMode);
              }}
              className="uppercase cursor-pointer text-white hover:text-grey font-bold flex justify-center items-center w-full text-lg"
            >
              <FontAwesomeIcon icon={faCog} className="mr-2 fa-lg" />
              Animations {!props.misc.lowGPUMode ? "Off" : "On"}
            </p>
          </div>
          <div className="mt-2 text-white sm:text-center md:text-center lg:text-center text-center">
            <h3 className="text-red p-1 text-center font-extrabold text-2xl uppercase sm:text-center md:text-center lg:text-center">
              Follow us
            </h3>
            <div className="pl-2 inline-flex mt-1 sm:w-full sm:mx-auto sm:justify-center md:w-full md:mx-auto md:justify-center md:text-right sm:text-right">
              <a
                aria-label="instagram"
                className="text-white"
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/cropkingseeds/?hl=en"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="fa-2x px-1 text-white cursor-pointer hover:text-grey-light"
                />
              </a>
              <a
                aria-label="facebook"
                className="text-white"
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/CropKingSeeds/"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="fa-2x px-1 text-white cursor-pointer hover:text-grey-light"
                />
              </a>
              <a
                aria-label="twitter"
                className="text-white"
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/CropKingSeed?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="fa-2x px-1 text-white cursor-pointer hover:text-grey-light"
                />
              </a>
              <a
                aria-label="pinterest"
                className="text-white"
                target="_blank"
                rel="noreferrer"
                href="https://www.pinterest.ca/officialCKS/"
              >
                <FontAwesomeIcon
                  icon={faPinterest}
                  className="fa-2x px-1 text-white cursor-pointer hover:text-grey-light"
                />
              </a>
            </div>
          </div>
          <div className="sm:mt-12 md:mt-12 pt-2 text-center sm:text-center md:text-center lg:text-center">
            <h3 className="text-red mt-2 p-1 text-center font-extrabold text-2xl uppercase ">
              Contact us
            </h3>
            <p className="text-white text-base p-1">
              <a
                className="text-white hover:text-red"
                href="mailto:info@cropkingseeds.com"
              >
                info@cropkingseeds.com
              </a>
            </p>
            <a className="no-underline" href="tel:+1-844-276-7546">
              <p className="text-white text-base p-1 hover:text-red">
                {props.misc.ageVerification != null &&
                "United States" == props.misc.ageVerification.country ? (
                  <React.Fragment>
                    <span>+1-844-CROP-KING</span>
                    <span className="-ml-2 mr-2">/</span>
                    <span>(276-7546)</span>
                  </React.Fragment>
                ) : (
                  "+1 (604) 563-0291"
                )}
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full xl:hidden xxl:hidden">
        <p className="p-3 mt-4 w-full text-center text-white bg-grey-dark xl:hidden xxl:hidden md:mt-8 sm:mt-8">
          Copyright © 2019 Crop King Seeds
        </p>{" "}
      </div>
    </div>
  );
};

export default Footer;
