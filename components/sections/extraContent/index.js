import React from "react";
import StrainsHome from "./strains";

const ExtraContent = props => {
  return (
    <div>
      <div className="w-full mx-auto mt-8">
        <h2 className="p-2 bg-red-dark text-center text-white uppercase font-bold text-3xl">
          Buy Cannabis Seeds from Crop King Seeds
        </h2>

        <div className="p-2 w-95p mx-auto mt-2">
          <p className="my-1">
            If you are a medical patient, a closet grower or an experienced grow
            master, we have the best strains for sale for large yields, high
            levels of THC and various varieties of Indica, Sativa and Hybrid
            cannabis plants. Crop King Seeds has shipping available for Canada
            and all countries in the world that come with a catalog and our
            state of the art pot seed packaging.
          </p>

          <p className="my-1">
            Our cheap marijuana seed prices and discount stealth delivery to all
            countries will allow you to harvest the best weed plants in both
            indoors and outdoor environments. Our private payment system allows
            you to buy marijuana seeds using Visa, Mastercard, Bitcoins, Credit
            Card and Money Orders by placing your order online or contacting us
            over the phone or using our online chat service.
          </p>
          <p className="font-bold mt-4">
            Choosing the Right Type of Marijuana Seeds for You
          </p>
          <p className="my-1">
            Before you purchase pot seeds you should know that price is not
            always the most important thing. Cheap marijuana seeds are cheap for
            a reason because they might have a poor germination rate or might
            not be viable for germinating. Most of our customers choose strains
            that have large yields and high THC content with a High or Low CBD
            (cannabidiol) rating as well as CBN (cannabinol) levels.
          </p>
          <p className="font-bold mt-4">
            Feminized or Autoflowering Marijuana Seeds For Sale
          </p>

          <p className="my-1">
            We have a large selection of indoor or outdoor marijuana seeds for
            sale from Cannabis Cup winners such as White Widow and Northern
            Lights. Feminized marijuana seeds will produce only female plants
            from which produce the flower or the bud which is the smokeable part
            which contains THC. Autoflowering marijuana seeds are fast flowering
            strains that will flower automatically during any light cycle.
          </p>
        </div>

        <div>{/* <StrainsHome {...props} /> */}</div>
      </div>
    </div>
  );
};

export default ExtraContent;
