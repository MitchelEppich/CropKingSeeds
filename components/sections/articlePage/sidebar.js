import React from "react";
import RelatedStrains from "./relatedStrains";
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

const Sidebar = props => {
  return (
    <div>
      <div className="p-2 w-full inline-flex mt-2 bg-smoke-grey">
        <div className="w-10 mx-2 cursor-pointer text-center p-2">
          <FontAwesomeIcon icon={faFacebook} className="fa-lg scale-item" />
        </div>
        <div className="w-10 mx-2 cursor-pointer text-center p-2">
          <FontAwesomeIcon icon={faInstagram} className="fa-lg scale-item" />
        </div>
        <div className="w-10 mx-2 cursor-pointer text-center p-2">
          <FontAwesomeIcon icon={faTwitter} className="fa-lg scale-item" />
        </div>
        <div className="w-10 mx-2 cursor-pointer text-center p-2">
          <FontAwesomeIcon icon={faGooglePlus} className="fa-lg scale-item" />
        </div>
        <div className="w-10 mx-2 cursor-pointer text-center p-2">
          <FontAwesomeIcon icon={faLinkedin} className="fa-lg scale-item" />
        </div>
        <div className="w-10 mx-2 cursor-pointer text-center p-2">
          <FontAwesomeIcon icon={faEnvelope} className="fa-lg scale-item" />
        </div>
        <div className="w-10 mx-2 cursor-pointer text-center p-2">
          <FontAwesomeIcon icon={faPrint} className="fa-lg scale-item" />
        </div>
      </div>

      <RelatedStrains />
    </div>
  );
};

export default Sidebar;
