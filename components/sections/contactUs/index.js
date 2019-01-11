import React from "react";
import Forms from "./forms";
import Tabs from "./tabs";
import ContactInfo from "./contactInfo";

const ContactUs = props => {
  return (
    <div className="w-full p-2">
      <div>
        <h1 className="text-3/5xl font-extrabold mb-6 p-2">Contact Us</h1>
      </div>
      <Tabs {...props} />

      {props.misc.visibleScreen == "dogs" ||
      props.misc.visibleScreen.includes("contactForm") ? (
        <Forms {...props} />
      ) : null}
      {props.misc.visibleScreen != null &&
      props.misc.visibleScreen.includes("contactInfo") ? (
        <ContactInfo {...props} />
      ) : null}
    </div>
  );
};

export default ContactUs;
