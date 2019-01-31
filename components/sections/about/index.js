import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const About = props => {
  let currentHistoryObj =
    props.about.historyObjs[props.about.currentHistoryObj];
  let content = currentHistoryObj.content;

  let currentItem = props.about.currentHistoryObj;
  let title = currentHistoryObj.title;
  let currentImgSrc = currentHistoryObj.imgSrc;
  let date = moment(currentHistoryObj.date).format("MMM, Do - YYYY");

  let historyThumbnails = props.about.historyObjs.map((val, index) => {
    //check thumbnail active and scale when active
    let activeThumb =
      currentItem == index
        ? {
            transform: "scale(1.15)",
            transition: "all .3s ease"
          }
        : {
            transform: "scale(1.0)",
            transition: "all .3s ease"
          };

    return (
      <div
        onClick={() => {
          props.setCurrentHistoryObj(index);
        }}
        key={index}
        className="m-3 sm:m-2 md:w-16 sm:w-16 sm:h-16 md:h-16 w-1/4 h-16 xl:h-16 xl:m-2 cursor-pointer"
      >
        <img
          style={activeThumb}
          src={val.imgSrc}
          className="w-full h-full about-img shadow-md"
        />
      </div>
    );
  });

  let carouselImg = (
    <div className="inline-flex unselectable w-full justify-center items-center h-full flex">
      <div
        onClick={() => {
          if (currentItem > 0) {
            props.setCurrentHistoryObj(currentItem - 1);
          }
        }}
        className={`${
          currentItem != 0
            ? "cursor-pointer hover:text-grey text-red-light slowish"
            : "opacity-0 cursor-default text-red slowish"
        }`}
      >
        <FontAwesomeIcon icon={faAngleLeft} className="fa-3x mx-2" />
      </div>

      <div className="h-full">
        <img
          src={currentImgSrc}
          className="w-full about-img md:w-4/5 sm:h-200 md:h-64 h-250 xl:h-250 lg:h-250 shadow-lg"
        />{" "}
      </div>
      <div
        onClick={() => {
          if (currentItem < props.about.historyObjs.length - 1) {
            props.setCurrentHistoryObj(currentItem + 1);
          }
        }}
        className={`${
          currentItem != props.about.historyObjs.length - 1
            ? "cursor-pointer hover:text-grey text-red-light slowish"
            : "opacity-0 cursor-default text-red slowish"
        }`}
      >
        <FontAwesomeIcon icon={faAngleRight} className="fa-3x mx-2" />
      </div>
    </div>
  );

  let whoWeAre = props.about.whoWeAre.map((val, index) => {
    return (
      <div
        key={index}
        className="w-250 md:my-5 sm:my-5 flex flex-wrap justify-center content-start "
      >
        <img
          className="h-200 w-200 rounded-full border-8 border-grey-lighter scale-item"
          src={val.src}
        />
        <h2 className="w-250 my-5 mx-auto text-center uppercase ">
          {val.title}
        </h2>
        <p className="w-250 mx-auto text-center">{val.content}</p>
      </div>
    );
  });
  return (
    <div className="w-full mt-3 pb-6">
      <div className="font-bold text-2xl">
        <h1 className="text-3/5xl font-extrabold mb-6 p-2 text-center">
          About Us
        </h1>
      </div>
      <div className="w-full bg-smoke-grey rounded overflow-hidden mt-20">
        <div>
          <h3 className="font-extrabold text-center text-3xl uppercase p-2 bg-red-dark text-white">
            History
          </h3>
        </div>
        <div className="w-full pb-6 px-4">
          <div className="flex lg:flex-wrap md:flex-wrap sm:flex-wrap lg:justify-center mt-4 h-250 xl:h-full lg:h-full md:h-full sm:h-full">
            <div className="w-1/3 sm:h-200 md:h-250 sm:w-full md:w-full lg:w-1/2 lg:pt-2 xl:pl-3 xl:pt-2 md:text-center inline-flex items-center flex">
              {carouselImg}
            </div>
            <div className="w-1/3 sm:w-full md:w-full sm:hidden md:hidden lg:hidden relative">
              <h3 className="font-bold text-xl p-2 px-6">{title}</h3>
              <p className="p-2 w-full text-justify px-6 xl:pb-8">{content}</p>
              <p className="text-center font-bold text-xl mt-12 absolute pin-b pin-x">
                {date}
              </p>
            </div>
            <div className="w-1/3 sm:hidden md:hidden sm:w-full md:w-container md:mx-auto lg:w-1/2 flex-wrap wrap flex justify-center content-center">
              {historyThumbnails}
            </div>
            <div className="w-1/3 h-full lg:w-full sm:w-full md:w-full xxl:hidden xl:hidden">
              <h3 className="font-bold text-xl p-2 px-6">{title}</h3>
              <p className="p-2 w-full text-justify px-6">{content}</p>
              <p className="text-center font-bold text-xl mt-12 ">{date}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-24">
        <div>
          <h3 className="font-extrabold text-center mb-8 text-3xl text-grey-light uppercase">
            Who We Are
          </h3>
        </div>
        <div className="w-full flex flex-wrap justify-around">{whoWeAre}</div>
      </div>
    </div>
  );
};

export default About;
