import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactInfo = props => {
  return (
    <div className="w-full pt-32 -mt-12 bg-grey-lightest mb-12 pb-12">
      {" "}
      {/* // style={{ background: "#26413C" }} */}
      <div className="w-container mx-auto p-2">
        <p className="p-4 text-grey font-extrabold text-3/5xl">Call us</p>
      </div>
      <div className="w-container mx-auto mt-4 p-4">
        <p>
          Commodo incididunt excepteur laborum pariatur amet commodo id ut amet
          magna enim pariatur. Minim anim dolor anim magna nostrud eiusmod aute
          anim voluptate nisi exercitation. Ex labore voluptate consequat anim
          adipisicing qui qui ea voluptate eu minim nulla est. Occaecat pariatur
          eiusmod veniam Lorem labore. Id labore deserunt adipisicing sunt eu.
          Labore deserunt ea mollit laboris.
        </p>
        <div className="pt-4">
          <p className="p-2">
            <FontAwesomeIcon icon={faPhone} className="fa-lg mr-2" /> Canada:
            (604) 563 0291
          </p>
          <p className="p-2">
            <FontAwesomeIcon icon={faPhone} className="fa-lg mr-2" /> USA: 1 844
            276 7546
          </p>
          <p className="p-2">
            <FontAwesomeIcon icon={faPhone} className="fa-lg mr-2" /> Worldwide:
            +1 (604) 563 0291
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
