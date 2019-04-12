import FeaturedStrains from "./featuredStrains";
import Catalogue from "./catalogue";
import ReviewBanner from "./reviewBanner";
import SeedTracker from "./seedtracker";
import LoaderSmall from "../loader/loaderSmall";

const sidebar = props => {
  let mobile = ["sm", "md"].includes(props.misc.mediaSize);
  let products =
    props.page == "product"
      ? props.misc.relatedStrains
      : props.misc.featuredStrains;
  return (
    <div>
      {!mobile ? (
        <React.Fragment>
          <div className="my-8 w-full justify-center flex relative sm:pt-8">
            <img
              alt="Free Shipping Banner"
              src={props.misc.CFURL + "/sidebar/FreeShippingAnimated.gif"}
              className=""
            />
          </div>
          {products != null ? <FeaturedStrains {...props} /> : <LoaderSmall />}
          <SeedTracker {...props} />
          <Catalogue {...props} />
          <ReviewBanner {...props} />
        </React.Fragment>
      ) : null}

      {mobile ? (
        <div className="w-full">
          <div className="w-full pt-6 mt-12 justify-center flex relative sm:pt-0 sm:border-t md:pt-0 md:border-t border-smoke-grey">
            <img
              alt="Free Shipping Banner"
              src={
                props.misc.CFURL + "/sidebar/FreeShippingAnimated_mobile.gif"
              }
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="w-full mt-8 justify-center flex relative mt-2">
            <a rel="nofollow" href="http://www.seedtracker.com" target="_blank">
              <img
                alt="Seed Tracker Banner"
                src={props.misc.CFURL + "/sidebar/seedtracker.png"}
                className=""
              />
            </a>
          </div>
          <div className="w-full mt-8 justify-center flex relative mt-2">
            <a
              href={
                props.misc.CFURL + "/catalogue/CropKingSeeds-2019-Catalogue.pdf"
              }
              target="_blank"
              aria-label="cks-catalogue"
              rel="noreferrer"
            >
              <img
                alt="Download our CKS Catalog"
                src={props.misc.CFURL + "/sidebar/downloadcatalogue.png"}
                className=""
              />
            </a>
          </div>

          <div className="">
            {products != null ? (
              <FeaturedStrains
                page={"shop"}
                specificMax={8}
                initialCount={1}
                {...props}
              />
            ) : (
              <LoaderSmall />
            )}
          </div>
          <div className="w-full justify-center flex relative mt-2">
            <a
              href="https://ca.trustpilot.com/review/cropkingseeds.com"
              target="_blank"
              aria-label="trustpilot"
              rel="nofollow"
            >
              <img
                alt="Review Us Banner"
                src={props.misc.CFURL + "/sidebar/review_mobile.gif"}
                className=""
              />
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default sidebar;
