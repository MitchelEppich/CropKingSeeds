import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faPhone,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

const Tabs = props => {
  console.log(props);
  return (
    <div className="w-full inline-flex mt-6">
      <div
        onClick={() =>
          props.setVisibleScreen({
            input: "contactInfo",
            clearAll: true
          })
        }
        className="w-1/3 mx-12 p-2 text-center shadow-lg bg-white relative h-300 scale-item cursor-pointer">
        <FontAwesomeIcon
          icon={faPhone}
          className="fa-7x text-grey-lighter my-6"
        />
        <h3 className="p-2 text-3/5xl font-extrabold">Contact Info</h3>
        <p>Sunt exercitation officia id sunt deserunt est.</p>
        <div className="bg-red-dark text-white px-4 p-3 mx-auto absolute-center shadow-md font-extrabold text-lg mt-12 w-32">
          See more
        </div>
      </div>
      <div
        onClick={() =>
          props.setVisibleScreen({
            input: "contactForm",
            clearAll: true
          })
        }
        className="w-1/3 mx-12 p-2 text-center shadow-lg bg-white relative h-300 scale-item cursor-pointer">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="fa-7x text-grey-lighter my-6"
        />
        <h3 className="p-2 text-3/5xl font-extrabold">Email Us</h3>
        <p>Sunt exercitation officia id sunt deserunt est.</p>
        <div className="bg-red-dark text-white px-4 p-3 mx-auto absolute-center shadow-md font-extrabold text-lg mt-12 w-32">
          See more
        </div>
      </div>

      <div className="w-1/3 mx-12 p-2 text-center shadow-lg bg-white relative h-300 scale-item cursor-pointer">
        <FontAwesomeIcon
          icon={faComments}
          className="fa-7x text-grey-lighter my-6"
        />
        <h3 className="p-2 text-3/5xl font-extrabold">Talk to Us</h3>
        <p>Sunt exercitation officia id sunt deserunt est.</p>
        <div className="bg-red-dark text-white px-4 p-3 mx-auto absolute-center shadow-md font-extrabold text-lg mt-12 w-32">
          See more
        </div>
      </div>
    </div>
  );
};

export default Tabs;
