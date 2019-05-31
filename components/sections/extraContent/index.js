import React from "react";
import StrainsHome from "./strains";

const ExtraContent = props => {
  return (
    <div>
      <div className="w-full mx-auto mt-8">
        <h1 className="p-2 bg-red-dark text-center text-white uppercase font-bold text-3xl sm:text-xl md:text-2xl">
          Buy Marijuana Seeds from Crop King
        </h1>

        <div className="p-2 w-95p mx-auto mt-2">
          <p className="my-1">
            Whether you’re a medical patient, a closer grower or an experience
            grow master, Crop King Seeds has a strain for you. Choose between
            indica, sativa and hybrid cannabis plants, all with options for high
            yielders, high THC levels and high CBD levels. Crop King Seeds began
            in Canada, but now ships worldwide with state-of-the-art cannabis
            seed packaging.
          </p>

          <p className="my-1">
            Our low seed prices and international stealth delivery will allow
            you to harvest the best plants indoors and out, no matter where you
            live. Our private payment system allows you to buy marijuana seeds
            using Visa, Mastercard, Bitcoins, Credit Card and Money Orders by
            placing your order online or contacting us over the phone or using
            our online chat service.
          </p>
          <p className="font-bold mt-4">
            Choosing the Right Type of Cannabis Seeds for You
          </p>
          <p className="my-1">
            Before you purchase seeds you should do some research. Do you want
            large yields and a high THC content? Or do you prefer low THC and
            high CBD levels? Click through our strains and read the descriptions
            or use the filters on our ‘Shop’ page to find the perfect strain
            quickly and easily.
          </p>
          <p className="font-bold mt-4">
            Feminized and Auto-Flowering Cannabis Seeds
          </p>

          <p className="my-1">
            Want plants that will always produce the smokable buds? Our
            feminized seeds are the perfect choice! Want seeds that flower
            quickly? Our feminized auto-flowers are fast growers and will flower
            automatically during any light cycle. Still have questions? Call us
            at 1-844-276-7546 or click on the chat button to talk to one of our
            service representatives today.
          </p>
        </div>

        <div>
          <StrainsHome {...props} />
        </div>
      </div>
    </div>
  );
};

export default ExtraContent;
