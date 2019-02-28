import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCaretDown,
  faCaretUp,
  faMapMarkerAlt,
  faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";

import moment from "moment";

const Media = props => {
  let news = props.misc.news;

  let group = "news";

  let styleImg = {
    height: "100px",
    width: "100px",
    overflow: "hidden",
    objectFit: "cover",
    objectPosition: "top",
    boxShadow: "0 0px 10px rgba(0, 0, 0, 0.26)"
  };

  let showNewsEntry = items => {
    let arr = [];
    let i = 100;
    for (let item of items) {
      let {
        body,
        category,
        date,
        location,
        locationUrl,
        imageUrl,
        sponsored,
        title,
        url,
        _id
      } = item;

      let active = props.misc.visibleScreen.includes(category + "::" + _id);

      let styleItem = {
        height: active ? "170px" : "0px",
        transition: "all 0.3s ease-in-out"
      };
      console.log("Ran");
      arr.push(
        <div
          key={i}
          //   style={{ background: "rgb(250, 250, 250)" }}
          className={`w-main lg:w-full sm:w-full h-full bg-smoke-grey mx-auto mt-4 rounded shadow-md relative ${
            active ? "mb-2" : ""
          }`}
        >
          <div
            onClick={() => {
              props.setVisibleScreen({ input: _id, group: category });
            }}
            className="w-full inline-flex p-2 font-bold cursor-pointer unselectable"
          >
            <div className="w-3/4 py-2">
              <p className="pl-6 sm:pl-2">{title}</p>
            </div>
            <div className="w-12 sm:w-10 p-1 absolute pin-r justify-center flex">
              <FontAwesomeIcon icon={faCaretDown} className="fa-lg" />
            </div>
          </div>
          <div style={styleItem} className="overflow-hidden">
            <div className="p-4 inline-flex bg-white relative sm:p-2 md:p-2 h-150 md:h-200 sm:h-200">
              <div className="px-2 ml-4 sm:ml-0 md:ml-0 lg:ml-0">
                <img
                  src={imageUrl}
                  className="w-100 overflower-hidden"
                  style={styleImg}
                />
              </div>
              <div className="w-3/4 ml-4">
                <div className="inline-flex w-full lg:flex-col md:flex-col sm:flex-col ">
                  <div className="w-1/2 text-left font-bold p-1 lg:w-full md:w-full sm:w-full sm:text-sm md:text-sm">
                    <p>{moment(date, "LL").format("LL")}</p>
                  </div>
                  {location != null ? (
                    <div
                      className="w-1/2 lg:w-full md:w-full sm:w-full lg:justify-start md:justify-start sm:justify-start justify-end items-center flex font-bold sm:text-xs md:text-xs"
                      onClick={e => {
                        e.stopPropagation();
                        window.open(locationUrl, "_blank");
                        window.focus();
                      }}
                    >
                      <p className="cursor-pointer hover:text-grey-light">
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> {location}
                      </p>
                    </div>
                  ) : null}
                </div>
                <p className="mt-4 ml-1 sm:mt-2 lg:mt-2 md:mt-2 sm:text-sm md:text-sm">
                  {body}
                  <span
                    className="mx-1 font-bold text-red-dark cursor-pointer hover:text-red-light p-1 text-sm lg:hidden xl:hidden xxl:hidden"
                    onClick={e => {
                      e.stopPropagation();
                      window.open(url, "_blank");
                      window.focus();
                    }}
                  >
                    Read More
                  </span>
                </p>
                <div
                  className="font-bold ml-auto w-125 p-1 cursor-pointer bg-grey-light text-white scale-item text-sm sm:mt-18 sm:mr-2 md:mt-4 md:mr-2 flex justify-center absolute sm:pin-t md:pin-t lg:pin-b xl:pin-b xxl:mb-2 xxl:mr-2 xl:mb-2 xl:mr-2 lg:mb-2 lg:mr-2 xxl:pin-b pin-r mt-4 md:hidden sm:hidden"
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
            </div>
          </div>
        </div>
      );
      i++;
    }
    return arr;
  };

  let showCategories = () => {
    let arr = [];
    let keys = Object.keys(news);
    keys.map((category, index) => {
      arr.push(
        <div
          key={index}
          className={`w-main mx-auto sm:w-full md:w-full ${
            index == 0 ? "" : "mt-12"
          } ${index == keys.length - 1 ? "mb-12" : ""}`}
        >
          <h3 className="mt-5 p-3 text-white font-extrabold rounded text-center text-xl uppercase bg-red-dark mx-auto sm:w-full w-main lg:w-full text-center">
            {category == "Event" ? "Upcoming" : "Recent"} {category}s
          </h3>
          {showNewsEntry(news[category])}
        </div>
      );
    });
    return arr;
  };

  let imageHeader = {
    background: `url(${props.misc.CFURL}/banners/newsHeader.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "left"
  };

  return (
    <div className="w-full mt-2">
      <div style={imageHeader} className="w-full h-200 items-center flex">
        <h3 className="mt-5 text-white text-shadow font-extrabold text-center text-3/5xl mx-auto w-full text-center p-3 items-center flex justify-center uppercase">
          News {" & "} Events
        </h3>
      </div>
      <div className="w-main mx-auto p-2 mt-6">
        <p className="text-center font-bold">
          These are the next events Crop King Seeds will be attending and or
          sponsoring. We hope to see you there!
        </p>
      </div>
      {showCategories()}
    </div>
  );
};

export default Media;
