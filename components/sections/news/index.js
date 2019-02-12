import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCannabis,
  faMapMarkerAlt,
  faDollarSign,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import Link from "next/link";

const news = props => {
  let styleImg = {
    width: "100%",
    overflow: "hidden",
    objectFit: "cover",
    objectPosition: "top",
    boxShadow: "0 0px 10px rgba(0, 0, 0, 0.26)"
  };

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
          window.open(url, "_blank");
          window.focus();
        }}
        className={`${
          index < 3 ? "border-b-2 border-grey-lightest" : ""
        } w-full sm:mx-0 md:mx-0 mx-4 scale-item cursor-pointer`}
      >
        <div className="w-full py-2 inline-flex">
          <div className="w-3/4">
            <h3
              className={`px-2 pt-2 font-bold text-lg ${
                newsIndex == index ? "text-red-dark" : "text-grey"
              } `}
            >
              {title}
            </h3>
          </div>
          <div className="w-1/4 items-center flex justify-end">
            {sponsored ? (
              <div className="opacity-75 mr-2 px-1 py-px bg-grey-lightest round rounded text-black">
                <p className="flex font-bold text-red-dark opacity-50 text-sm uppercase">
                  <FontAwesomeIcon icon={faDollarSign} />
                </p>
              </div>
            ) : null}
            <p className="justify-end flex text-right opacity-75 font-bold text-sm">
              {category}
            </p>
          </div>
        </div>
        <div className="inline-flex w-full items-center flex">
          <p className="px-2 text-sm font-bold">{formatDate} </p>
          {location != null ? (
            <a
              onClick={e => {
                e.stopPropagation();
                window.open(locationUrl, "_blank");
                window.focus();
              }}
              className="px-2 text-sm hover:text-grey-light"
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} className="opacity-50" />{" "}
              {location}
            </a>
          ) : null}
        </div>

        <p className="p-2">
          {body}
          <span
            className="font-bold text-red-dark cursor-pointer hover:text-red-light p-1 text-sm"
            onClick={e => {
              e.stopPropagation();
              window.open(url, "_blank");
              window.focus();
            }}
          >
            Read More
          </span>
        </p>
      </div>
    );
  });

  return (
    <div className="lg:mt-12 w-full h-full">
      <div className="py-4 mt-6 w-full">
        <h2 className="text-3/5xl font-bold text-center w-full p-2 bg-red-darker text-white">
          Featured News
        </h2>
      </div>
      <div className="inline-flex w-full px-12 sm:px-4 md:px-4 py-4 sm:flex-col md:flex-col lg:flex-col">
        <div className="w-1/2 sm:w-full md:w-full lg:w-full p-2">
          <img
            style={styleImg}
            src={`${image}`}
            className="w-full about-img md:w-4/5 sm:h-200 md:h-64 h-450 xl:h-full lg:h-300 shadow-lg"
          />
        </div>
        <div className="w-1/2 sm:w-full md:w-full lg:w-full p-2">
          {showEvents}
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-end w-full">
          <Link href="/news">
            <p className="p-2 bg-red-dark text-white font-bold px-6 mr-8 w-200 text-right inline-flex items-center rounded shadow-md uppercase cursor-pointer hover:bg-red-light justify-center">
              See more news{" "}
              <FontAwesomeIcon icon={faAngleRight} className="ml-2 fa-lg" />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default news;
