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
    <div
      style={{ height: "230px" }}
      className="w-full mt-24 inline-flex bg-grey relative">
      {" "}
      <div
        style={{ width: "1300px" }}
        className="w-container mx-auto inline-flex">
        <div style={{ width: "15%" }} className="">
          <img
            style={{ width: "180px", height: "auto" }}
            src="../static/img/cks-logo-footer.png"
            className="mt-8"
          />
        </div>
        <div style={{ width: "25%" }} className="mt-6 pl-6">
          <h3 className="text-yellow-dark pl-2 uppercase text-2xl font-extrabold">
            Menu
          </h3>
          <ul className="text-white font-bold p-2 inline-flex">
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
              <Link href="/delivery">
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
        <div style={{ width: "35%" }} className="text-white text-center mx-6">
          <h4 className="p-2 mt-4 mb-1 text-2/5xl font-extrabold">
            Subscribe to the CKS Newsletter
          </h4>
          <p className="p-2 w-container mx-auto text-center">
            All the king's horses and all the king's me... they wrote a
            newsletter.
          </p>
          <div className="inline-flex relative w-container items-center mt-4 overflow-y-hidden">
            <input
              type="email"
              className="p-2 w-full"
              id=""
              defaultValue=""
              placeholder="Email address"
            />
            <div className="absolute pin-r p-2 bg-yellow-dark text-grey cursor-pointer hover:bg-grey-dark hover:text-yellow-dark w-16">
              {/* <p className="p-2 font-extrabold uppercase">Subscribe!</p> */}
              <FontAwesomeIcon icon={faAngleRight} className="fa-2x h-10 " />
            </div>
          </div>
          {/* <div
            style={{ textShadow: "0 1px 4px #000" }}
            className="p-2 px-8 bg-yellow-dark text-white text-2xl w-container mt-2 mx-auto rounded font-bold text-center cursor-pointer hover:bg-grey-light">
            Subscribe
          </div> */}
          <p className="p-2 mt-4 w-container mx-auto text-center">
            Copyright © 2019 Crop King Seeds
          </p>
        </div>
        <div style={{ width: "20%" }} className="p-2 mr-4">
          <div className="mt-4 text-white text-right">
            <h3 className="text-yellow-dark font-extrabold text-2xl uppercase">
              Follow us
            </h3>
            <div className="pl-2 inline-flex mt-2">
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
          <div className="mt-10 text-right">
            <h3 className="text-yellow-dark font-extrabold text-2xl uppercase">
              Contact
            </h3>
            <p className="text-white text-xl p-1">info@cropkingseeds.com</p>
            <p className="text-white text-xl p-1">+1 (604) 563-0291</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
