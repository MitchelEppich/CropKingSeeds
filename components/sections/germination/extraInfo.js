import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCaretRight,
  faExclamationTriangle,
  faCheckDouble,
  faCheck,
  faAngleRight,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

const ExtraInfo = props => {
  return (
    <div className="mt-2 bg-white w-95p sm:w-full sm:px-0 md:w-full md:px-0 xxl:w-main  mx-auto mb-10">
      <div className="w-full shadow-md">
        <p className="p-2 font-bold text-white bg-red-light text-xl text-center uppercase">
          Important Information
        </p>
        <div className="inline-flex w-full lg:flex-col md:flex-col sm:flex-col">
          <div className="px-4 p-2 mt-8 text-base w-3/5 lg:w-full md:w-full sm:w-full">
            <div className="inline-flex w-full p-1 scale-item">
              <div className="w-10 h-8 text-red-light flex items-center justify-center">
                <FontAwesomeIcon icon={faAngleRight} className="fa-2x pb-1" />
              </div>
              <div className="w-main">
                <p className="p-1 font-bold">
                  Please Remember to Follow Our Germination Steps.
                </p>
              </div>
            </div>
            <div className="inline-flex w-full p-1 scale-item">
              <div className="w-10 h-8 text-red-light flex items-center justify-center">
                <FontAwesomeIcon icon={faAngleRight} className="fa-2x pb-1" />
              </div>
              <div className="w-main">
                <p className="p-1 font-bold">
                  We strongly recommend you to go to a Dollar Store and invest
                  in a cheap bottle of spring water.
                </p>
              </div>
            </div>
            <div className="inline-flex w-full p-1 scale-item">
              <div className="w-10 h-8 text-red-light flex items-center justify-center">
                <FontAwesomeIcon icon={faAngleRight} className="fa-2x pb-1" />
              </div>
              <div className="w-main">
                <p className="p-1 font-bold">
                  Our best results are coming from Dollar Store spring water at
                  present.
                </p>
              </div>
            </div>

            <div className="inline-flex w-full p-1 scale-item">
              <div className="w-10 h-8 text-red-light flex items-center justify-center">
                <FontAwesomeIcon icon={faTimes} className="fa-lg" />
              </div>
              <div className="w-main">
                <p className="p-1 font-bold">
                  Do not germinate more than 3-5 seeds at a time.
                </p>
              </div>
            </div>

            <div className="inline-flex w-full p-1 scale-item">
              <div className="w-10 h-8 text-red-light flex items-center justify-center">
                <FontAwesomeIcon icon={faTimes} className="fa-lg" />
              </div>
              <div className="w-main">
                <p className="p-1 font-bold">
                  Do not use tap, rain, well, reverse osmosis or filtered
                  purified waters!
                </p>
              </div>
            </div>

            <div className="inline-flex w-full p-1 scale-item">
              <div className="w-10 h-8 text-red-light flex items-center justify-center">
                <FontAwesomeIcon icon={faTimes} className="fa-lg" />
              </div>
              <div className="w-main">
                <p className="p-1 font-bold">
                  Do not cover seeds with anything but paper towel.
                </p>
              </div>
            </div>

            <div className="inline-flex w-full p-1 scale-item">
              <div className="w-10 h-8 text-red-light flex items-center justify-center">
                <FontAwesomeIcon icon={faTimes} className="fa-lg" />
              </div>
              <div className="w-main">
                <p className="p-1 font-bold">
                  Do not use any type of plastic bags, plastic containers or any
                  other method not included in this guide.
                </p>
              </div>
            </div>
          </div>
          <div className="w-400 lg:w-main md:w-main sm:w-main lg:h-full md:h-full xl:h-full xl:mt-12 xl:mr-2 mx-auto my-6 sm:mt-4 shadow-md scale-item">
            <img
              alt="how to germinate marijuana seeds link"
              src={props.misc.CFURL + "/germ/ad_link"}
            />
            <p className="p-2">
              For more information, please visit this article about How to
              Germinate Marijuana Seeds Successfully from one of our partners.
            </p>
            <a
              rel="noopener nofollow"
              href="https://www.marijuanaseeds.com/how-to-germinate-marijuana-seeds-successfully/"
              target="_blank"
              className="cursor-pointer"
            >
              <p className="p-3 mt-4 bg-red-dark mx-auto w-full font-bold text-white text-center uppercase hover:bg-red-dark shadow-md cursor-pointer hover:bg-red-light">
                More Info
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraInfo;
