import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCaretDown,
  faCaretUp,
  faMapMarkerAlt
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

      arr.push(
        <div
          style={{ background: "rgb(250, 250, 250)" }}
          className={`w-main mx-auto mt-4 rounded shadow-md relative ${
            active ? "pb-2" : ""
          }`}
        >
          <div
            onClick={() => {
              props.setVisibleScreen({ input: _id, group: category });
            }}
            className="w-full inline-flex p-2 font-bold cursor-pointer unselectable"
          >
            <div className="w-3/4 py-2">
              <p className="pl-6">{title}</p>
            </div>
            <div className="w-12 p-1 absolute pin-r">
              <FontAwesomeIcon icon={faCaretDown} className="fa-lg" />
            </div>
          </div>
          {active ? (
            <div
              style={{ background: "rgb(250, 250, 250)" }}
              className="p-2 inline-flex pt-2 relative"
            >
              <div className="px-2 ml-4">
                <img
                  src={imageUrl}
                  className="w-100 h-100 overflower-hidden"
                  style={styleImg}
                />
              </div>
              <div className="w-3/4 ml-4">
                <div className="inline-flex w-full">
                  <div className="w-1/2 text-left font-bold p-1">
                    <p>{moment(date, "LL").format("LL")}</p>
                  </div>
                  {location != null ? (
                    <div
                      className="w-1/2 justify-end items-center flex font-bold"
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
                <p className="mt-4 ml-1">
                  {body}
                  <span
                    className="mx-1 font-bold text-red-dark cursor-pointer hover:text-red-light p-1 text-sm"
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
            </div>
          ) : (
            <div />
          )}
        </div>
      );
    }
    return arr;
  };

  let showCategories = () => {
    let arr = [];
    let keys = Object.keys(news);
    keys.map((category, index) => {
      arr.push(
        <div
          className={`w-full w-main mx-auto ${index == 0 ? "" : "mt-12"} ${
            index == keys.length - 1 ? "mb-12" : ""
          }`}
        >
          <h3 className="mt-5 py-1 text-grey font-extrabold rounded text-center text-2lg bg-grey-lightest mx-auto w-main text-center">
            {category}s
          </h3>
          {showNewsEntry(news[category])}
        </div>
      );
    });
    return arr;
  };

  return (
    <div className="w-full mt-5">
      <h3 className="mt-5 text-grey font-extrabold text-center text-3/5xl mx-auto w-full text-center">
        News
      </h3>
      <div className="w-main mx-auto p-2 mt-12">
        <p className="text-center opacity-50">
          These are the next events lorem lorem are the next events lorem lorem
          lorem lorem are the next events lorem lorem lorem{" "}
        </p>
      </div>
      {showCategories()}
    </div>
  );
};

export default Media;
