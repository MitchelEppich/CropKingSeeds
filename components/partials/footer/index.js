import React from "react";
import Link from "next/link";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = props => {
  return (
    <div
      // style={{ background: "#161925" }}
      className="w-full h-300 mt-24 inline-flex bg-grey relative"
    >
      <div className="w-container mx-auto inline-flex">
        <div
          style={{
            width: "20%"
          }}
          className="mt-4"
        >
          <ul className="text-white font-bold pl-6 p-2">
            <Link href="/about">
              <li className="text-2xl p-1 hover:text-grey-light cursor-pointer">
                About
              </li>
            </Link>
            <Link href="/articles">
              <li className="text-2xl p-1 hover:text-grey-light cursor-pointer">
                Articles
              </li>
            </Link>
            <Link href="/contact">
              <li className="text-2xl p-1 hover:text-grey-light cursor-pointer">
                Contact Us
              </li>
            </Link>
            <Link href="/privacy">
              <li className="text-2xl p-1 hover:text-grey-light cursor-pointer">
                Privacy Policy
              </li>
            </Link>
            <Link href="/delivery">
              <li className="text-2xl p-1 hover:text-grey-light cursor-pointer">
                Delivery/Payment
              </li>
            </Link>
            <Link href="/partners">
              <li className="text-2xl p-1 hover:text-grey-light cursor-pointer">
                Partners
              </li>
            </Link>
            <Link href="/affiliates">
              <li className="text-2xl p-1 hover:text-grey-light cursor-pointer">
                Affiliates
              </li>
            </Link>
            <Link href="/faq">
              <li className="text-2xl p-1 hover:text-grey-light cursor-pointer">
                FAQ
              </li>
            </Link>
          </ul>
        </div>
        <div
          style={{
            width: "40%"
          }}
          className=""
        >
          {/* <img
            style={{
              width: "380px",
              position: "absolute",
              height: "auto",
              bottom: "0px"
            }}
            src="../static/img/cropkingseeds-footer.png"
            className="ml-12"
          /> */}
        </div>
        <div
          style={{
            width: "40%"
          }}
          className="text-white text-center"
        >
          <h4 className="p-2 mt-4 mb-4 text-2/5xl font-extrabold">
            Subscribe to the CKS Newsletter
          </h4>

          <div className="inline-flex relative w-container items-center">
            <input
              type="email"
              className="p-2 w-full"
              id=""
              defaultValue=""
              placeholder="Email address"
            />
            <FontAwesomeIcon
              icon={faSignInAlt}
              className="fa-lg text-grey-light  mr-2 absolute pin-r cursor-pointer hover:text-red"
            />
          </div>
          <p className="p-2 mt-8 w-container mx-auto text-center">
            All the king's horses and all the king's me... they wrote a
            newsletter.
          </p>
          <p className="p-2 mt-8 w-container mx-auto text-center">
            Copyright © 2019 Crop King Seeds
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
