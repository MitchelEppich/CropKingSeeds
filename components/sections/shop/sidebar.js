const sidebar = props => {
  return (
    <div className="w-full">
      <div className="w-full mt-4 justify-center flex relative sm:pt-0 sm:border-t md:pt-0 md:border-t border-smoke-grey">
        <img
          src={
            props.misc.CFURL + "/sidebar/FreeShippingAnimated_mobile.gif"
          }
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="w-full mt-8 justify-center flex relative mt-2">
        <a
          href={
            props.misc.CFURL +
            "/catalogue/CropKingSeeds-2019-Catalogue.pdf"
          }
          target="_blank"
        >
          <img
            src={props.misc.CFURL + "/sidebar/downloadcatalogue.png"}
            className=""
          />
        </a>
      </div>

      <div className="border border-grey-lightest mt-8 sm:mt-4 md:mt-4 md:mb-0">
        <div className="shadow-md">
          <h3 className="text-left pl-4 font-bold mx-auto bg-white text-grey p-2 text-xl w-full ">
            Featured Strains
          </h3>
        </div>

        <FeaturedStrainThumbnails
          page={"shop"}
          specificMax={8}
          initialCount={1}
          {...props}
        />
      </div>
      <div className="w-full justify-center flex relative mt-2">
        <a
          href="https://ca.trustpilot.com/review/cropkingseeds.com"
          target="_blank"
        >
          <img
            src={props.misc.CFURL + "/sidebar/review_mobile.gif"}
            className=""
          />
        </a>
      </div>
    </div>
  );
};

export default sidebar;
