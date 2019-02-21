import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCannabis,
  faMapMarkerAlt,
  faDollarSign,
  faAngleRight,
  faSignOutAlt,
  faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import Link from "next/link";

const news = props => {
  if (props.misc.featuredNews.length == 0) return <div />;

  let newsIndex = props.misc.currentEventObj;
  let newsEntry = props.misc.featuredNews[newsIndex];
  let image = newsEntry != null ? newsEntry.imageUrl : "";

  let showEvents = props.misc.featuredNews.map((item, index) => {
    let {
      body,
      category,
      date,
      location,
      locationUrl,
      sponsored,
      title,
      url
    } = item;

    let formatDate = moment(date, "LL").format("LL");

    return (
      <div
        key={index}
        onMouseEnter={() => {
          props.setCurrentEvent({
            index,
            currentEventObj: newsIndex,
            events: props.misc.featuredNews
          });
        }}
        onClick={() => {
          // window.open(url, "_blank");
          window.focus();
        }}
        className={`${
          index < 3 ? " mb-2 relative" : ""
        } w-full sm:mx-0 md:mx-0 xxl:mx-4 scale-item md:p-2 sm:p-2 cursor-pointer sm:shadow md:shadow relative`}
      >
        <div
          className={`w-full p-1 inline-flex sm:flex-col md:flex-col rounded ${
            newsIndex == index
              ? "bg-grey-light text-white"
              : "bg-grey-lighter text-grey"
          }`}
        >
          <div className="w-3/4 sm:w-full md:w-full">
            <h3 className={`sm:px-0 md:px-0 px-2 font-bold text-lg`}>
              {title}
            </h3>
          </div>
          <div className="w-1/4 sm:w-full md:w-full items-center flex sm:pt-2 md:pt-2 justify-end sm:justify-start md:justify-start mr-2">
            {sponsored ? (
              <div className="opacity-75 mr-2 px-1 py-px bg-grey-lightest round rounded text-black">
                <p className="flex font-bold text-grey-light text-sm uppercase">
                  <FontAwesomeIcon icon={faDollarSign} />
                </p>
              </div>
            ) : null}
            <p className="justify-end flex text-right font-bold text-sm">
              {category}
            </p>
          </div>
        </div>
        <div className="inline-flex w-full items-center flex sm:flex-col md:flex-col py-2">
          <p className="px-2 sm:px-0 md:px-0 sm:w-full md:w-full text-sm sm:py-2 md:py-2 font-bold">
            {formatDate}{" "}
          </p>
          {location != null ? (
            <a
              onClick={e => {
                e.stopPropagation();
                window.open(locationUrl, "_blank");
                window.focus();
              }}
              className="px-2 sm:px-0 md:px-0 sm:w-full md:w-full text-sm hover:text-grey-light"
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} className="opacity-50" />{" "}
              {location}
            </a>
          ) : null}
        </div>

        <p className="p-2 sm:text-sm md:text-sm sm:px-0 md:px-0">{body}</p>
        <div
          className="font-bold ml-auto w-125 p-1 cursor-pointer bg-red-dark text-white scale-item text-sm sm:mt-18 sm:mr-2 md:mt-18 md:mr-2 flex justify-center absolute pin-t pin-r mt-8"
          onClick={e => {
            e.stopPropagation();
            window.open(url, "_blank");
            window.focus();
          }}
        >
          More Details
          <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" />
        </div>
      </div>
    );
  });

  return (
    <div className="lg:mt-12 w-full h-full">
      <div className="py-4 mt-6 w-full">
        <h2 className="text-3xl font-bold text-center w-full p-2 bg-red-darker text-white">
          Featured News
        </h2>
      </div>
      <div className="inline-flex w-full px-12 sm:px-2 md:px-2 py-4 sm:flex-col md:flex-col lg:flex-col xl:flex-col">
        <div className="w-1/2 sm:w-full md:w-full lg:w-full xl:w-full">
          <img
            style={{ objectFit: "contain" }}
            src={`${image}`}
            className="w-full sm:h-200 md:h-200 w-full h-450 lg:h-300 xl:mt-4 xxl:mt-4 xl:h-300 xl:w-full shadow-md"
          />
        </div>
        <div className="w-1/2 sm:w-full md:w-full lg:w-full xl:w-full p-2">
          {showEvents}
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-end w-full">
          <Link href="/news">
            <p className="p-2 bg-grey-lighter text-grey font-bold px-6 mr-8 w-200 text-right inline-flex items-center rounded uppercase cursor-pointer hover:bg-red-light hover:text-white justify-center md:w-full sm:w-full md:mr-0 sm:mr-0">
              See all news{" "}
              <FontAwesomeIcon icon={faAngleRight} className="ml-2 fa-lg" />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default news;
