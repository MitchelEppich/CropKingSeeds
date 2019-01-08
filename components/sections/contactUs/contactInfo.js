import React from "react";

const ContactInfo = props => {
  return (
    <div // style={{ background: "#26413C" }}
      className="w-full pt-32 -mt-12 bg-grey-lightest mb-12 pb-12">
      <div className="w-container mx-auto p-2">
        <p className="p-4 text-grey font-extrabold text-3/5xl">Contact Info</p>
      </div>
      <div className="w-full mt-4 p-4">
        <p>Canada: (604) 563 0291</p>
        <p>USA: </p>
        <p>Phone: </p>
      </div>
    </div>
  );
};

export default ContactInfo;
