import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCannabis,
  faMapMarkerAlt,
  faDollarSign,
  faAngleRight,
  faSignOutAlt,
  faExternalLinkAlt,
  faCalendarAlt,
  faCircle,
  faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import Link from "next/link";

const news = props => {
  if (props.misc.featuredNews.length == 0) return <div />;

  let newsIndex = props.misc.currentEventObj;
  let newsEntry = props.misc.featuredNews[newsIndex];
  let image = newsEntry != null ? newsEntry.imageUrl : "";
  // displaying the last 3
  let showEvents = props.misc.featuredNews.slice(0, 3).map((item, index) => {
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

    let formatDateDay = moment(date, "LL").format("DD");
    let formatDateMonth = moment(date, "LL").format("MMM");

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
          index < 3 ? "mb-2 relative" : ""
        }  w-full sm:mx-0 md:mx-0 md:p-2 sm:p-2 sm:shadow md:shadow relative shadow-md rounded relative`}
      >
        <div className="absolute w-12 h-12 bg-grey-light text-white -ml-1 -mt-1">
          {" "}
          <p className="font-bold text-xl text-center pt-1">{formatDateDay}</p>
          <p className="font-bold text-sm text-center uppercase">
            {formatDateMonth}
          </p>
        </div>
        <div
          className={`w-full p-1 inline-flex sm:flex-col md:flex-col ${
            newsIndex == index
              ? "bg-grey-lighter text-grey"
              : "bg-grey-lightest text-grey"
          }`}
        >
          <div className="w-3/4 sm:w-full md:w-full">
            <h3
              className={`px-2 font-bold text-lg pl-12 ml-2 h-10 flex items-center`}
            >
              {title}
            </h3>
          </div>
          <div className="w-1/4 sm:w-full md:w-full items-center flex justify-end mr-2 md:hidden sm:hidden">
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
        <div className="inline-flex w-full items-center flex py-2">
          {location != null ? (
            <a
              aria-label="event-location"
              href={locationUrl}
              target="_blank"
              rel="nofollow"
              className="cursor-pointer sm:w-full md:w-full text-sm hover:text-grey-light pl-12 sm:pl-2 ml-2"
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} className="opacity-50" />{" "}
              {location}
            </a>
          ) : null}
        </div>
        <p className="p-2 sm:text-sm md:text-sm sm:px-0 md:px-0">{body}</p>
        <a
          aria-label="event-more-info"
          className="font-bold ml-auto p-1 cursor-pointer text-grey hover:text-red-light text-sm sm:mr-2 md:mr-2 flex justify-end font-bold"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <span className="font-bold flex items-center">More Info</span>
          <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1" />
        </a>
      </div>
    );
  });

  return (
    <div className="lg:mt-12 w-full h-full bg-white">
      <div className="pb-4 mt-6 w-full">
        <h2 className="text-3xl font-bold h-24 pt-8 md:pt-4 sm:pt-4 mt-10 text-center w-full p-2 text-grey md:text-3xl bg-smoke-grey text-grey sm:text-2xl uppercase">
          Featured Events {"&"} News
        </h2>
      </div>
      <div className="w-95p mx-auto -mt-8 sm:-mt-4 md:-mt-4 shadow-md">
        <div className="inline-flex w-full sm:px-2 md:px-2 py-2 bg-white sm:flex-col md:flex-col lg:flex-col xl:flex-col">
          <div className="w-2/5 bg-white sm:w-full md:w-full lg:w-full xl:w-full p-3">
            <img
              alt="eventImage"
              style={{ objectFit: "contain" }}
              src={`${image}`}
              className="w-full sm:h-200 md:h-200 w-full h-450 lg:h-300 xl:mt-4 xxl:mt-4 xl:h-300 xl:w-full p-2"
            />
          </div>
          <div className="w-3/5 bg-white sm:w-full md:w-full lg:w-full xl:w-full p-2 xxl:pr-6">
            {showEvents}
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-end w-full">
          <Link href="/news">
            <a>
              <p className="p-2 bg-red-dark text-white font-bold px-6 mr-8 my-4 text-right inline-flex items-center uppercase cursor-pointer hover:bg-red-light hover:text-white justify-center md:w-full sm:w-full md:mr-0 sm:mr-0">
                See More Event {"&"} News{" "}
                <FontAwesomeIcon icon={faAngleRight} className="ml-2 fa-lg" />
              </p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default news;
