import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const About = props => {
  let bgHistory = {
    background: `url(${props.misc.CFURL}/banners/bgAbout.jpg)`,
    backgroundSize: "cover",
    backgroundPositionY: "bottom"
  };

  let historySection = {
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    left: "0",
    right: "0",
    top: "150px",
    boxShadow: "rgba(0, 0, 0, 0.5) 0px 3px 32px"
  };

  let currentHistoryObj =
    props.about.historyObjs[props.about.currentHistoryObj];
  let content = currentHistoryObj.content;

  let currentItem = props.about.currentHistoryObj;
  let currentImgSrc = props.misc.CFURL + currentHistoryObj.imgSrc;
  let date = currentHistoryObj.date;
  // let date = moment(currentHistoryObj.date).format("MMM, Do - YYYY");

  let historyThumbnails = props.about.historyObjs.map((val, index) => {
    //check thumbnail active and scale when active
    let activeThumb =
      currentItem == index
        ? {
            transform: "scale(1.10)",
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
        className="m-2 sm:m-2 md:w-16 sm:w-16 sm:h-16 md:h-16 w-1/4 h-20 xl:h-16 xl:m-2 cursor-pointer"
      >
        <img
          style={activeThumb}
          src={props.misc.CFURL + val.imgSrc}
          className="w-full h-full about-img shadow-md"
        />
      </div>
    );
  });

  let carouselImg = (
    <div className="inline-flex unselectable w-full justify-center items-center h-full flex relative">
      <div
        onClick={() => {
          if (currentItem > 0) {
            props.setCurrentHistoryObj(currentItem - 1);
          }
        }}
        className={`${
          currentItem != 0
            ? "cursor-pointer hover:text-red-light text-white slowish absolute pin-l ml-1 opacity-50"
            : "opacity-0 cursor-default text-red slowish absolute pin-l ml-1"
        }`}
      >
        <FontAwesomeIcon icon={faAngleLeft} className="fa-3x" />
      </div>

      <div className="h-full w-full">
        <img
          alt={currentImgSrc}
          src={currentImgSrc}
          style={{ objectFit: "cover" }}
          className="w-full md:w-full sm:h-200 md:h-64 h-250 xl:h-250 lg:h-250 shadow-lg"
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
            ? "cursor-pointer hover:text-red-light text-white slowish absolute pin-r mr-1 opacity-50"
            : "opacity-0 cursor-default text-red slowish absolute pin-r mr-1"
        }`}
      >
        <FontAwesomeIcon icon={faAngleRight} className="fa-3x" />
      </div>
    </div>
  );

  let whoWeAre = props.about.whoWeAre.map((val, index) => {
    return (
      <div
        key={index}
        className="xxl:w-300 w-250 lg:w-200 md:w-main md:block md:text-center sm:w-main sm:block sm:text-center bg-white rounded-lg md:my-5 sm:my-5 flex flex-wrap justify-center content-start p-4 shadow-lg sm:shadow-md sm:rounded md:rounded md:shadow-md scale-item"
      >
        <img
          style={{ objectFit: "cover" }}
          className="h-200 w-200 lg:w-150 lg:h-150 rounded-full border-8 border-grey-lighter scale-item"
          src={props.misc.CFURL + val.src}
        />
        <h3 className="mt-6 text-3/5xl lg:text-3xl font-bold text-red-light">
          {val.title}
        </h3>
        <p className="w-250 mx-auto md:w-main sm:w-main text-center mt-6">
          {val.content}
        </p>
      </div>
    );
  });
  return (
    <div className="w-full mt-3 pb-6 relative">
      <div style={bgHistory} className="h-500 relative">
        <div>
          <h1 className="text-3/5xl pt-16 font-bold text-white p-2 text-center text-shadow">
            About Us
          </h1>
          <p className="text-white text-xl text-center font-bold uppercase text-shadow">
            Crop King Seeds - World Class Cannabis Seeds{" "}
          </p>
        </div>
        <div
          style={historySection}
          className="mt-24 lg:mt-12 w-main mx-auto bg-white rounded overflow-hidden text-grey mt-20 h-350 md:h-full sm:h-auto xl:h-400 lg:h-500 my-auto"
        >
          <div className="">
            <h3 className="font-bold text-center items-center flex justify-center bg-grey-lightest text-3/5xl p-2 text-grey-light mb-6">
              Our History
            </h3>
          </div>
          <div className="w-full pb-6 px-4">
            <div className="flex lg:flex-wrap md:flex-wrap sm:flex-wrap lg:justify-center mt-4 h-250 xl:h-full lg:h-full md:h-full sm:h-full">
              <div className="w-1/3 sm:h-200 md:h-250 sm:w-full md:w-full lg:w-1/2 lg:pt-2 xl:pl-3 xl:pt-2 md:text-center inline-flex items-center flex">
                {carouselImg}
              </div>
              <div className="w-1/3 text-lg ml-4 bg-smoke-grey sm:w-full md:w-full sm:hidden md:hidden lg:hidden p-2 xxl:relative">
                <p className="p-2 w-full text-justify px-6 xl:px-2">
                  {content}
                </p>
                <p className="text-center font-bold text-xl mt-12 absolute pin-b pin-x mb-2">
                  {date}
                </p>
              </div>
              <div className="w-1/3 sm:hidden md:hidden sm:w-full md:w-container md:mx-auto lg:w-1/2 flex-wrap wrap flex justify-center content-center">
                {historyThumbnails}
              </div>
              <div className="w-1/3 h-full lg:w-full sm:w-full md:w-full xxl:hidden xl:hidden">
                <p className="p-2 w-full text-justify px-6 sm:px-2 mt-6">
                  {content}
                </p>
                <p className="text-center font-bold text-xl sm:text-base mt-6 mb-2">
                  {date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-48 lg:mt-64 relative h-500 md:h-full sm:h-full mb-12 xl:mb-24 md:mt-mobile-about sm:mt-400">
        <div
          style={{ borderTop: "15px solid #e9e8e8" }}
          className="h-24 w-full items-center flex justify-center shadow bg-red-darker "
        >
          <h3 className="w-full h-full font-bold pt-6 text-center mb-8 p-2 text-3/5xl text-white">
            Who We Are
          </h3>
        </div>
        <div className="absolute md:relative sm:relative pin-t mt-20 md:mt-4 sm:mt-4 w-full flex flex-wrap justify-around">
          {whoWeAre}
        </div>
      </div>
    </div>
  );
};

export default About;
