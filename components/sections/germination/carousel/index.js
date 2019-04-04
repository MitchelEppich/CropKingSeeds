import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Carousel = props => {
  let carousel = props.germination.carousel;
  let currentStep = carousel.currentStep;
  let carouselPositions = carousel[props.misc.mediaSize].positions;
  let carouselWidth = carousel[props.misc.mediaSize].width;
  let images = props.germination.carousel.steps.map((step, index) => {
    return (
      <img
        alt="carouselImageGermination"
        key={index}
        className="germinationCarouselImg"
        src={props.misc.CFURL + step.image}
      />
    );
  });
  // let progressDivs = carousel.steps.map((step, index) => {
  //   let style =
  //     currentStep == index
  //       ? {
  //           transform: "translateY(-40px)",
  //           width: "50px",
  //           height: "50px",
  //           transition: "all .2s ease",
  //           fontSize: "1.5rem",
  //           backgroundSize: "cover",
  //           backgroundPosition: "center",
  //           backgroundRepeat: "no-repeat"
  //         }
  //       : {
  //           transform: "translateY(-35px)",
  //           width: "40px",
  //           height: "40px",
  //           fontSize: "1.5rem",
  //           backgroundSize: "cover",
  //           backgroundPosition: "center",
  //           backgroundRepeat: "no-repeat"
  //         };
  //   return (
  //     <div
  //       onClick={() => {
  //         props.changeStep({
  //           _incrOrDecr: 0,
  //           _currentStep: index,
  //           _totalSteps: carousel.steps.length
  //         });
  //       }}
  //       className="bg-white z-50 pt-3 cursor-pointer"
  //       key={index}
  //     >
  //       <div
  //         style={{
  //           ...style,
  //           backgroundImage: "url(" + props.misc.CFURL + step.icon + ")"
  //         }}
  //       />
  //     </div>
  //   );
  // });

  let paragraphs = carousel.steps[currentStep].instruction.map(
    (paragraph, index) => {
      return (
        <React.Fragment key={index}>
          <p className="my-2 p-1">{paragraph}</p>
        </React.Fragment>
      );
    }
  );

  return (
    <div className="xl:w-95p lg:w-95p md:w-95p sm:w-full w-main mx-auto mt-24 md:mt-24 sm:mt-24 shadow-md sm:pt-4 sm:h-450 md:h-450 lg:h-350 xl:h-300 xxl:h-400 xl:pt-4 xxl:pt-12 text-xl relative overflow-hidden mx-auto bg-white">
      <div className="w-1/3 sm:mb-6 md:mb-12 sm:pin-b md:pin-b sm:h-200 md:h-48 sm:w-full md:w-full md:pt-4 lg:ml-12 xl:ml-12 xxl:ml-24 absolute z-0">
        <h2 className="px-4 sm:my-2 text-2xl bg-red-light text-white p-1 uppercase lg:my-2 xl:my-2 xxl:my-4 lg:text-left xl:text-left xxl:text-left text-center sm:bg-white md:bg-white sm:text-red-light md:text-red-light">
          Step {currentStep + 1}
        </h2>
        <div className="w-full slow sm:px-4 sm:text-sm md:text-base text-base md:px-10 lg:px-2 xl:px-4 xxl:px-4 lg:text-base xl:text-base">
          {paragraphs}
        </div>
      </div>
      <div
        className="xxl:mt-10 lg:mt-16 md:mt-8"
        style={{
          width: carouselWidth,
          // height: "100%",
          alignItems: "center",
          top: "0",
          position: "absolute",
          transform: "translateZ(1000px) " + carouselPositions[currentStep],
          display: "flex",
          justifyContent: "space-around",
          transition: "0.8s all ease-in-out"
        }}
      >
        {images}
      </div>
      <div className="w-full h-full text-center absolute pin-t z-50 flex justify-between">
        <button
          name="decreaseItem"
          onClick={() => {
            props.changeStep({
              _incrOrDecr: -1,
              _currentStep: currentStep != 0 ? currentStep : 5,
              _totalSteps: carousel.steps.length
            });
          }}
          className="text-red-light w-10 p-2 font-bold slowish sm:bg-transparent sm:text-red-light hover:text-red-dark items-center flex"
        >
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="fa-2x sm:mt-12 md:mt-10"
          />
        </button>

        <button
          name="increaseItem"
          onClick={() => {
            props.changeStep({
              _incrOrDecr: 1,
              _currentStep: currentStep != 4 ? currentStep : -1,
              _totalSteps: carousel.steps.length
            });
          }}
          className="text-red-light w-10 p-2 font-bold slowish sm:bg-transparent sm:text-red-light hover:text-red-dark items-center flex"
        >
          <FontAwesomeIcon
            icon={faAngleRight}
            className="fa-2x sm:mt-12 md:mt-10"
          />
        </button>
      </div>
      {/* <div className="w-full h-60px absolute pin-b">
        <div className="bg-grey-lightest h-1px w-full sm:px-8 px-32 mt-8 flex justify-between mx-auto">
          {progressDivs}
        </div>
      </div> */}
    </div>
  );
};

export default Carousel;
