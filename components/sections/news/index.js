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
  if (props.misc.news.length == 0) return <div />;
  if (props.misc.featuredNews.length == 0) return <div />;

  let categories = Object.keys(props.misc.news);

  let showCategories = categories.map((category, index) => {
    let items = props.misc.news[category];
    // displaying the last 3
    let showContent = items.slice(0, 2).map((item, index) => {
      let {
        body,
        category,
        imageUrl,
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
          className={`${
            index < 3 ? "mb-2 relative" : ""
          } xl:w-main w-250 h-400 xl:h-350 my-4 xxl:my-0 xl:w-250 lg:w-full md:w-full sm:w-full xl:mx-auto xl:justify-center sm:mx-0 md:mx-0 md:p-2 sm:p-2 sm:shadow md:shadow bg-white relative shadow-md rounded  scale-item`}
        >
          <div className="absolute w-8 h-12 bg-grey-lightest text-grey-dark z-50 ml-2">
            {" "}
            <p className="font-bold text-xl text-center pt-1">
              {formatDateDay}
            </p>
            <p className="text-xs text-center uppercase">{formatDateMonth}</p>
          </div>
          <div className="w-1/4 sm:w-full md:w-full items-center flex justify-end pr-2 absolute pin-t pin-r z-50 p-1">
            <div className="ribbon mr-2 px-1 py-px round rounded text-black">
              <span className="flex font-bold text-grey-light text-sm uppercase">
                {sponsored ? <FontAwesomeIcon icon={faDollarSign} /> : null}{" "}
                {category}
              </span>
            </div>
          </div>
          <div className="w-full h-175 bg-white sm:w-full md:w-full lg:w-full xl:w-full relative lg:justify-center md:justify-center sm:justify-center items-center flex">
            <img
              alt="eventImage"
              style={{ objectFit: category == "Article" ? "cover" : "contain" }}
              src={`${imageUrl}`}
              className="w-full h-175 xl:mt-4 xxl:mt-4 xl:w-full p-2"
            />
          </div>
          <div className="flex-col w-full relative mt-4">
            <div className="w-full p-1 inline-flex sm:flex-col md:flex-col bg-smoke-grey text-grey">
              <div className="w-full">
                <h3
                  className={`px-2 justify-center text-center text-base p-1 flex items-center`}
                >
                  {title}
                </h3>
              </div>
            </div>
            {location != null ? (
              <div className="inline-flex w-full text-left justify-start items-center flex py-2">
                <a
                  aria-label="event-location"
                  href={locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer sm:w-full md:w-full text-sm hover:text-grey-light pl-2 ml-2"
                >
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="opacity-50"
                  />{" "}
                  {location}
                </a>
              </div>
            ) : null}

            <p className="p-2 text-sm md:text-sm sm:px-0 md:px-0 mb-4">
              {body}
            </p>
          </div>
          <a
            aria-label="event-more-info"
            className="font-bold ml-auto absolute pin-b pin-r p-1 cursor-pointer text-grey hover:text-red-light text-sm sm:mr-2 md:mr-2 flex justify-end font-bold"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <span className="font-bold flex items-center">
              {category == "Article" ? "Read More" : "More Info"}
            </span>
            <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1" />
          </a>
        </div>
      );
    });

    return (
      <div
        key={index + category}
        className="w-2col sm:w-full md:w-full bg-white shadow"
      >
        <div className="bg-grey-lightest w-95p mx-auto text-grey opacity-25 text-center p-2 my-2">
          <p className="text-xl font-bold uppercase">{category}s</p>
        </div>
        <div className="w-full bg-white sm:w-full inline-flex md:w-full lg:w-full xl:w-full p-2 justify-around flex xl:flex-col lg:flex-col md:flex-col sm:flex-col">
          {showContent}
        </div>
      </div>
    );
  });

  let newsIndex = props.misc.currentEventObj;
  let newsEntry = props.misc.featuredNews[newsIndex];
  let image = newsEntry != null ? newsEntry.imageUrl : "";

  return (
    <div className="lg:mt-12 w-full h-full ">
      <div className="pb-4 mt-6 w-full bg-white">
        <h2 className="text-3xl bg-smoke-grey font-bold h-20 pt-4 mt-10 text-center w-full p-2 text-grey md:text-3xl sm:text-2xl uppercase">
          Featured Events {"&"} News
        </h2>
      </div>
      <div className="w-95p mx-auto -mt-12 sm:-mt-8">
        <div className="inline-flex w-full sm:px-2 md:px-2 py-4 sm:flex-col md:flex-col lg:flex-col xl:flex-col">
          <div className="w-full flex sm:flex-col md:flex-col justify-around inline-flex">
            {showCategories}
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-end w-full">
          <Link href="/news">
            <p className="p-2 bg-grey-light text-grey-lightest font-bold px-6 mr-8 my-4 text-right inline-flex items-center uppercase cursor-pointer hover:bg-red-light hover:text-white justify-center md:w-full sm:w-full md:mr-0 sm:mr-0">
              See all events {"&"} news{" "}
              <FontAwesomeIcon icon={faAngleRight} className="ml-2 fa-lg" />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default news;
