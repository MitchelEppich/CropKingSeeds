import React from "react";
import {
  faClock,
  faUserAlt,
  faEnvelope,
  faPrint
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGooglePlus,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ArticleContent = props => {
  let imgStyle = {
    objectFit: "cover",
    height: "350px",
    width: "100%",
    boxShadow: "rgba(0, 0, 0, 0.52) 0px 2px 11px"
  };

  return (
    <div>
      <div className="text-white bg-black-transparent p-6">
        <p className="text-xs italic pb-2 text-grey-light">Home / Articles </p>
        <h1 className="font-extrabold text-3/5xl">
          How to Grow Indica in Winter
        </h1>
        <div className="inline-flex w-full mt-6 text-grey-light">
          <div className="w-4/5">
            <div className="text-center inline-flex items-center flex">
              <FontAwesomeIcon icon={faUserAlt} className="" />
              <p className="italic px-2 text-sm">by Mitchel</p>
            </div>
          </div>
          <div className="w-1/5 justify-end text-right mr-4">
            <div className="text-center inline-flex items-center flex">
              <FontAwesomeIcon icon={faClock} className="" />
              <p className="italic px-2 text-sm">Jan 19, 2019</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <p className="px-4 py-6 text-grey-light italic">
          Young rats injected with a synthetic cannabinoid have more of the
          brain’s motivating dopaminergic signaling and fewer numbers of
          inhibitory neurons than controls.
        </p>
        <p className="text-content p-6 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className="w-full inline-flex flex-wrap">
          <div className="md:w-full sm:w-full w-3/5">
            <p className="text-content p-6 text-justify">
              Excepteur sint occaecat cupidatat non proident, lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt
              in culpa qui officia deserunt mollit anim id est laborum. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="md:w-full sm:w-full w-2/5 p-6">
            <img
              src="../../static/img/cannabis.jpg"
              style={imgStyle}
              className="w-full"
            />
            <p className="px-6 py-2 text-sm text-grey-light text-center">
              Cannabis image description here.{" "}
              <span>(Photo by Albert Einstein)</span>
            </p>
          </div>
        </div>
        <p className="text-content p-6 pt-0 text-justify">
          Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default ArticleContent;
