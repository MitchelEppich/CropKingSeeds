import React from "react";
import HistorySection from "./history";

const About = props => {
  return (
    <div className="w-full mt-6">
      <div className="font-bold text-2xl">
        <h1 class="text-3/5xl font-extrabold mb-6 p-2">About Us</h1>
      </div>
      <HistorySection />
    </div>
  );
};

export default About;
