import React from "react";
import Link from "next/link";
import {
  faSignInAlt,
  faArrowRight,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

const Footer = props => {
  return (
    <div className="w-full mt-24 inline-flex sm:block md:block bg-grey relative">
      {" "}
      <div className="mx-auto inline-flex sm:block md:block w-1300 sm:w-full md:w-full lg:w-full">
        <div className="w-1/8 sm:w-full md:w-full lg:w-full sm:hidden md:hidden lg:hidden">
          {" "}
          <img
            style={{ width: "180px", height: "auto" }}
            src="../static/img/cks-logo-footer.png"
            className="mt-8"
          />
        </div>
        <div className="mt-6 sm:pt-10 md:pt-10 pl-6 w-1/4 lg:w-1/4 lg:pl-2 md:w-full sm:w-full sm:pl-0 md:pl-0 sm:block md:block">
          {" "}
          <h3 className="text-yellow-dark pl-2 uppercase text-2xl font-extrabold sm:pl-0 md:pl-0 sm:text-center md:text-center">
            Menu
          </h3>
          <ul className="text-white font-bold p-2 inline-flex sm:w-full sm:flex sm:mx-auto sm:justify-center md:w-full md:flex md:mx-auto md:justify-center">
            <div className="mr-4">
              <Link href="/about">
                <li className="text-xl p-1 pt-3 hover:text-grey-light cursor-pointer">
                  About
                </li>
              </Link>
              <Link href="/articles">
                <li className="text-xl p-1 pt-3 hover:text-grey-light cursor-pointer">
                  Articles
                </li>
              </Link>
              <Link href="/contact">
                <li className="text-xl p-1 pt-3 hover:text-grey-light cursor-pointer">
                  Contact Us
                </li>
              </Link>
              <Link href="/faq">
                <li className="text-xl p-1 pt-3 hover:text-grey-light cursor-pointer">
                  FAQ
                </li>
              </Link>
            </div>
            <div className="ml-2">
              <Link href="/privacy">
                <li className="text-xl p-1 pt-3 hover:text-grey-light cursor-pointer">
                  Privacy Policy
                </li>
              </Link>
              <Link href="/faq">
                <li className="text-xl p-1 pt-3 hover:text-grey-light cursor-pointer">
                  Delivery/Payment
                </li>
              </Link>
              <Link href="/partners">
                <li className="text-xl p-1 pt-3 hover:text-grey-light cursor-pointer">
                  Partners
                </li>
              </Link>
              <Link href="/affiliates">
                <li className="text-xl p-1 pt-3 hover:text-grey-light cursor-pointer">
                  Affiliates
                </li>
              </Link>
            </div>
          </ul>
        </div>
        <div
          className="text-white text-center mx-6 sm:mx-0 md:mx-0 sm:py-4 md:py-4 sm:bg-grey-dark
                  md:bg-grey-dark w-3/8 md:mt-8 pt:mt-8 md:w-full lg:w-2/4 sm:w-full sm:block md:block">
          <h4 className="p-2 mt-4 mb-1 text-2/5xl font-extrabold">
            Subscribe to the CKS Newsletter
          </h4>
          <p className="p-2 w-container mx-auto text-center">
            All the king's horses and all the king's me... they wrote a
            newsletter.
          </p>
          <div className="inline-flex relative w-container rounded-tr rounded-br h-10 items-center mt-4 overflow-hidden">
            <input
              type="email"
              className="p-2 w-full h-10 rounded-tr rounded-br"
              id=""
              defaultValue=""
              placeholder="Email address"
            />
            <div className="absolute pin-r pl-2 h-10  bg-yellow-dark text-grey cursor-pointer hover:bg-grey-dark hover:text-yellow-dark w-16">
              <FontAwesomeIcon icon={faAngleRight} className="fa-2x h-10 " />
            </div>
          </div>
          {/* <div
            style={{ textShadow: "0 1px 4px #000" }}
            className="p-2 px-8 bg-yellow-dark text-white text-2xl w-container mt-2 mx-auto rounded font-bold text-center cursor-pointer hover:bg-grey-light">
            Subscribe
          </div> */}
          <p className="p-2 mt-4 w-container mx-auto text-center sm:hidden md:hidden">
            Copyright © 2019 Crop King Seeds
          </p>
        </div>
        <div className="p-2 mr-4 w-1/5 sm:w-full md:w-full lg:w-1/4 sm:mx-0 md:mx-0 sm:p-0 md:p-0 sm:block md:block md:mt-8 pt:mt-8 ">
          {" "}
          <div className="mt-4 text-white text-right">
            <h3 className="text-yellow-dark font-extrabold text-2xl uppercase sm:text-center md:text-center">
              Follow us
            </h3>
            <div className="pl-2 inline-flex mt-2 sm:w-full sm:mx-auto sm:justify-center md:w-full md:mx-auto md:justify-center">
              <FontAwesomeIcon
                icon={faInstagram}
                className="fa-2x text-white mx-2 cursor-pointer hover:text-grey-light"
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className="fa-2x text-white mx-2 cursor-pointer hover:text-grey-light"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="fa-2x text-white mx-2 cursor-pointer hover:text-grey-light"
              />
            </div>
          </div>
          <div className="mt-10 text-right sm:text-center md:text-center">
            <h3 className="text-yellow-dark font-extrabold text-2xl uppercase ">
              Contact
            </h3>
            <p className="text-white text-xl p-1">info@cropkingseeds.com</p>
            <p className="text-white text-xl p-1">+1 (604) 563-0291</p>
            <p className="p-3 mt-4 w-full text-center text-white bg-grey-dark font-bold lg:hidden xl:hidden xxl:hidden md:mt-8 pt:mt-8 ">
              Copyright © 2019 Crop King Seeds
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
