import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faRedditSquare,
  faGooglePlus
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ShareButtons = props => {
  return (
    <div className="fixed sm:hidden md:hidden pin-l mt-32">
      <div
        style={{ background: "rgba(90, 90, 90, 0.63)" }}
        className="w-16 shadow p-2 text-white rounded-lg text-right -ml-4">
        <FontAwesomeIcon
          icon={faInstagram}
          className="fa-2x my-1 pr-1 hover:text-red-dark scale-item cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faFacebook}
          className="fa-2x my-1 pr-1 hover:text-red-dark scale-item cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faTwitter}
          className="fa-2x my-1 pr-1 hover:text-red-dark scale-item cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faGooglePlus}
          className="fa-2x my-1 pr-1 hover:text-red-dark scale-item cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faRedditSquare}
          className="fa-2x my-1 pr-1 hover:text-red-dark scale-item cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ShareButtons;
