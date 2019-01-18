const Carousel = props => {
    let carousel = props.germination.carousel;
    let currentStep = carousel.currentStep;
    let carouselPositions = carousel[props.misc.mediaSize].positions;
    let carouselWidth = carousel[props.misc.mediaSize].width;
    let images = props.germination.carousel.steps.map((step, index) => {
        return <img key={index} className="germinationCarouselImg" src={step.image} />;
    });
    let progressDivs = carousel.steps.map((step, index) => {
        let style =
            currentStep == index
                ? {
                      transform: "translateY(-40px)",
                      width: "50px",
                      height: "50px",

                      fontSize: "1.5rem",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat"
                  }
                : {
                      transform: "translateY(-35px)",
                      width: "40px",
                      height: "40px",

                      fontSize: "1.5rem",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat"
                  };
        return (
            <div
                onClick={() => {
                    props.changeStep({ _incrOrDecr: 0, _currentStep: index, _totalSteps: carousel.steps.length });
                }}
                className="bg-white z-50 pt-3 cursor-pointer scale-item"
                key={index}>
                <div style={{ ...style, backgroundImage: "url(" + step.icon + ")" }} />
            </div>
        );
    });

    return (
        <div className="sm:w-full sm:pt-4 shadow-lg sm:h-400 md:h-400 lg:h-250 xl:h-300 xxl:h-400 xl:pt-1 xxl:pt-12 text-xl relative overflow-hidden mx-auto bg-white">
            <div className="w-1/3 sm:mb-6 md:mb-6 sm:pin-b md:pin-b sm:h-48 md:h-48 sm:w-full md:w-full lg:ml-24 xl:ml-24 xxl:ml-24 absolute z-0">
                <h2 className="px-4 sm:my-2 lg:my-2 xl:my-2 xxl:my-4 text-center">Step {currentStep + 1}</h2>
                <p className="w-full slow sm:px-8 sm:text-sm md:text-base md:px-24 lg:px-2 xl:px-4 xxl:px-4 lg:text-base">
                    {carousel.steps[currentStep].instruction}
                </p>
            </div>
            <div
                style={{
                    width: carouselWidth,
                    height: "100%",
                    top: "0",
                    position: "absolute",
                    transform: "translateZ(1000px) " + carouselPositions[currentStep],
                    display: "flex",
                    justifyContent: "space-around",
                    transition: "0.8s all ease-in-out"
                }}>
                {images}
            </div>
            <div className="w-full h-full text-center absolute pin-t z-50 flex justify-between">
                <button
                    onClick={() => {
                        props.changeStep({
                            _incrOrDecr: -1,
                            _currentStep: currentStep,
                            _totalSteps: carousel.steps.length
                        });
                    }}
                    className={
                        currentStep > 0
                            ? "sm:hidden text-white bg-red-dark w-60px p-2 font-bold slowish hover:bg-grey hover:text-white"
                            : "sm:hidden cursor-not-allowed text-white bg-grey-lightest w-60px p-2 font-bold slowish"
                    }>
                    Prev
                </button>

                <button
                    onClick={() => {
                        props.changeStep({
                            _incrOrDecr: 1,
                            _currentStep: currentStep,
                            _totalSteps: carousel.steps.length
                        });
                    }}
                    className={
                        currentStep < carousel.steps.length - 1
                            ? "sm:hidden text-white bg-red-dark w-60px p-2 font-bold slowish hover:bg-grey hover:text-white"
                            : "sm:hidden cursor-not-allowed text-white bg-grey-lightest w-60px p-2 font-bold slowish"
                    }>
                    Next
                </button>
            </div>
            <div className="w-full h-60px absolute pin-b">
                <div className="bg-grey-light h-1px w-full sm:px-8 px-32 mt-8 flex justify-between mx-auto">
                    {progressDivs}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
