import moment from "moment";

const About = props => {
  let currentHistoryObj =
    props.about.historyObjs[props.about.currentHistoryObj];
  let content = currentHistoryObj.content;
  let currentImgSrc = currentHistoryObj.imgSrc;
  let date = moment(currentHistoryObj.date).format("MMM, Do - YYYY");
  let historyThumbnails = props.about.historyObjs.map((val, index) => {
    return (
      <div
        onClick={() => props.setCurrentHistoryObj(index)}
        key={index}
        className="m-3 sm:m-2 md:w-16 sm:w-16 sm:h-12 md:h-12 w-1/4 h-16 xl:h-12 xl:m-2 cursor-pointer"
      >
        <img src={val.imgSrc} className="rounded w-full h-full shadow-md" />
      </div>
    );
  });
  let whoWeAre = props.about.whoWeAre.map((val, index) => {
    return (
      <div
        key={index}
        className="w-250 md:my-5 sm:my-5  flex flex-wrap justify-center content-start "
      >
        <img className="h-150 w-150 rounded-full shadow-md" src={val.src} />
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
      <div className="w-full bg-smoke-grey rounded overflow-hidden shadow-md mt-20">
        <div>
          <h3 className="font-extrabold text-center text-3xl uppercase p-2 bg-red-dark text-white">
            History
          </h3>
        </div>
        <div className="w-full p-2">
          <div className="flex lg:flex-wrap md:flex-wrap sm:flex-wrap lg:justify-center mt-4 h-250 xl:h-200 lg:h-500 md:h-600 sm:h-650">
            <div className="w-1/3 sm:h-200 md:h-250 sm:w-full md:w-full lg:w-1/2 lg:pt-16 xl:pl-3 xl:pt-2 md:text-center">
              <img
                src={currentImgSrc}
                className="w-full md:w-4/5 sm:h-200 md:h-64 h-250 xl:h-175 lg:h-175 shadow-lg"
              />{" "}
            </div>
            <div className="w-1/3 sm:w-full md:w-full sm:hidden md:hidden lg:hidden relative">
              <p className="p-2 w-full text-justify px-6">{content}</p>
              <p className="text-center font-bold text-xl mt-12 absolute pin-b pin-x">
                {date}
              </p>
            </div>
            <div className="w-1/3 sm:w-full md:w-full lg:w-1/2 flex-wrap wrap flex justify-center content-center">
              {historyThumbnails}
            </div>
            <div className="w-1/3 h-full lg:w-full sm:w-full md:w-full xxl:hidden xl:hidden">
              <p className="p-2 w-full text-justify px-6">{content}</p>
              <p className="text-center font-bold text-xl mt-12 ">{date}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-24">
        <div>
          <h3 className="font-extrabold text-center mb-8 text-3/5xl text-grey-light uppercase">
            Who We Are
          </h3>
        </div>
        <div className="w-full flex flex-wrap justify-around">{whoWeAre}</div>
      </div>
    </div>
  );
};

export default About;
