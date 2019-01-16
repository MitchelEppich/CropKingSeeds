import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faGooglePlus,
  faRedditSquare,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Share = props => {
  return (
    <div className="text-white mt-6 shadow border border-grey-lightest w-container mx-auto">
      <div className="bg-white h-8 items-center flex font-extrabold text-grey-lighter inline-flex">
        {/* <div className="mr-2 items-center h-8 p-2 bg-grey-light font-bold pt-3 flex uppercase text-white">
          Share
        </div> */}
        <div className="p-2">
          <FontAwesomeIcon
            icon={faInstagram}
            className="fa-2x p-1 mr-2 hover:text-grey scale-item cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faFacebook}
            className="fa-2x p-1 mx-2 hover:text-grey scale-item cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="fa-2x p-1 mx-2 hover:text-grey scale-item cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faGooglePlus}
            className="fa-2x p-1 mx-2 hover:text-grey scale-item cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faRedditSquare}
            className="fa-2x p-1 mx-2 hover:text-grey scale-item cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="fa-2x p-1 mx-2 hover:text-grey scale-item cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            className="fa-2x p-1 ml-2 hover:text-grey scale-item cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Share;
