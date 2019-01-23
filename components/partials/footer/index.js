import React from "react";
import Link from "next/link";
import { faSignInAlt, faArrowRight, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = props => {
    return (
        <div className="w-full border-b-8 border-grey-dark mt-24 inline-flex justify-between xxl:px-12 xl:px-12 sm:block md:block lg:block bg-grey relative pb-1 sm:pb-0 md:pb-0 lg:pb-0">
            {" "}
            <div className="mx-auto inline-flex sm:block md:block w-1300 sm:w-full md:w-full lg:w-full">
                <div className="w-1/8 sm:w-full md:w-full lg:w-full sm:hidden md:hidden lg:hidden xl:hidden">
                    {" "}
                    <img
                        style={{ width: "180px", height: "auto" }}
                        src="../static/img/cks-logo-footer.png"
                        className="mt-8"
                    />
                </div>
                <div className="mt-6 sm:pb-4  sm:pt-4 md:pt-10 pl-6 w-1/4 lg:w-1/3 lg:pl-6 md:w-full sm:w-full sm:pl-0 md:pl-0 sm:block md:block">
                    {" "}
                    <h3 className="text-yellow-dark pl-2 uppercase text-2xl font-extrabold sm:pl-0 md:pl-0 sm:text-center md:text-center">
                        Menu
                    </h3>
                    <ul className="text-white font-bold px-2 inline-flex sm:w-full sm:flex sm:mx-auto sm:justify-center md:w-full md:flex md:mx-auto md:justify-center">
                        <div className="sm:ml-4 md:ml-4">
                            <Link href="/about">
                                <li className="text-xl lg:text-lg md:text-lg p-1 pt-3 hover:text-grey-light cursor-pointer md:text-right sm:text-right">
                                    About
                                </li>
                            </Link>
                            <Link href="/contact">
                                <li className="text-xl lg:text-lg md:text-lg p-1 pt-3 hover:text-grey-light cursor-pointer md:text-right sm:text-right">
                                    Contact Us
                                </li>
                            </Link>{" "}
                            <Link href="/germination">
                                <li className="text-xl lg:text-lg md:text-lg p-1 pt-3 hover:text-grey-light cursor-pointer md:text-right sm:text-right">
                                    Germination
                                </li>
                            </Link>{" "}
                            <Link href="/partners">
                                <li className="text-xl lg:text-lg md:text-lg p-1 pt-3 hover:text-grey-light cursor-pointer md:text-right sm:text-right">
                                    Partners
                                </li>
                            </Link>
                            <Link href="/articles">
                                <li className="text-xl lg:text-lg md:text-lg p-1 pt-3 hover:text-grey-light cursor-pointer md:text-right sm:text-right">
                                    Articles
                                </li>
                            </Link>
                        </div>
                        <div className="ml-4">
                            <Link href="/faq#delivery">
                                <li className="text-xl lg:text-lg md:text-lg p-1 pt-3 hover:text-grey-light cursor-pointer">
                                    Delivery
                                </li>
                            </Link>
                            <Link href="/faq#payment">
                                <li className="text-xl lg:text-lg md:text-lg p-1 pt-3 hover:text-grey-light cursor-pointer">
                                    Payment
                                </li>
                            </Link>
                            <Link href="/privacy">
                                <li className="text-xl lg:text-lg md:text-lg p-1 pt-3 hover:text-grey-light cursor-pointer">
                                    Privacy Policy
                                </li>
                            </Link>

                            <Link href="/affiliates">
                                <li className="text-xl lg:text-lg md:text-lg p-1 pt-3 hover:text-grey-light cursor-pointer">
                                    Affiliates
                                </li>
                            </Link>
                            <Link href="/faq">
                                <li className="text-xl lg:text-lg md:text-lg p-1 pt-3 hover:text-grey-light cursor-pointer">
                                    FAQ
                                </li>
                            </Link>
                        </div>
                    </ul>
                </div>
                <div
                    className="text-white text-center mx-6 sm:mx-0 md:mx-0 sm:pt-2 sm:pb-4 md:pt-1 sm:bg-grey-dark
                  md:bg-grey-dark w-3/8 md:mt-8 pt:mt-8 md:w-full lg:w-1/3 sm:w-full sm:block md:block">
                    <h4 className="p-2 mt-4 mb-1 text-2/5xl lg:text-xl lg:mt-6 md:text-xl md:mt-6 font-extrabold">
                        Subscribe to the CKS Newsletter
                    </h4>
                    <p className="p-2 w-container mx-auto text-center">
                        All the king's horses and all the king's me... they wrote a newsletter.
                    </p>
                    <div className="inline-flex relative w-container lg:w-2/3 lg:mx-auto rounded-tr rounded-br h-10 items-center mt-4 md:mb-6 sm:mb-6 overflow-hidden">
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
                    <p className="p-2 mt-10 w-container mx-auto text-center sm:hidden md:hidden lg:hidden">
                        Copyright © 2019 Crop King Seeds
                    </p>
                </div>
                <div className="p-2 mr-4 w-1/5 sm:w-full md:w-full lg:w-1/3 sm:mx-0 md:mx-0 sm:p-0 md:p-0 sm:block md:block md:mt-8 pt:mt-8 ">
                    {" "}
                    <div className="mt-4 text-white sm:text-center md:text-center lg:text-center text-right">
                        <h3 className="text-yellow-dark font-extrabold text-2xl uppercase sm:text-center md:text-center lg:text-center">
                            Follow us
                        </h3>
                        <div className="pl-2 inline-flex mt-2 sm:w-full sm:mx-auto sm:justify-center md:w-full md:mx-auto md:justify-center md:text-right sm:text-right">
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
                    <div className="mt-16 text-right sm:text-center md:text-center lg:text-center">
                        <h3 className="text-yellow-dark font-extrabold text-2xl uppercase ">Contact</h3>
                        <p className="text-white text-xl p-1 lg:text-lg">info@cropkingseeds.com</p>
                        <p className="text-white text-xl p-1 lg:text-lg">+1 (604) 563-0291</p>
                    </div>
                </div>
            </div>
            <div className="w-full xl:hidden xxl:hidden">
                <p className="p-3 mt-4 w-full text-center text-white bg-grey-dark font-bold  xl:hidden xxl:hidden md:mt-8 sm:mt-8">
                    Copyright © 2019 Crop King Seeds
                </p>{" "}
            </div>
        </div>
    );
};

export default Footer;
