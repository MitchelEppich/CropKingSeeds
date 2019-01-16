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
                      transform: "translateY(-25px)",
                      width: "30px",
                      height: "30px",
                      paddingTop: "2px",
                      fontSize: "1.5rem",
                      background: "#bb1724"
                  }
                : { transform: "translateY(-25px)", width: "30px", height: "30px" };
        return (
            <div
                onClick={() => {
                    props.changeStep({ _incrOrDecr: 0, _currentStep: index, _totalSteps: carousel.steps.length });
                }}
                className="bg-white p-4 z-50 cursor-pointer scale-item"
                key={index}>
                <div
                    style={style}
                    className="bg-grey-light hover:bg-red-dark justify-center flex items-center text-center text-white ">
                    <span
                        onClick={() => {
                            props.changeStep({
                                _incrOrDecr: 0,
                                _currentStep: index,
                                _totalSteps: carousel.steps.length
                            });
                        }}
                        style={{ margin: "0 auto", zIndex: 50, cursor: "pointer" }}>
                        {index + 1}
                    </span>
                </div>
            </div>
        );
    });

    return (
        <div className="sm:w-full sm:pt-4 shadow-lg h-400 pt-12 text-xl relative overflow-hidden mx-auto bg-white">
            <div className="w-1/3 sm:w-2/3 sm:ml-16 ml-24 absolute z-0">
                <h2 className="px-4 my-4 text-center">Step {currentStep + 1}</h2>
                <p className="w-full slow px-4">{carousel.steps[currentStep].instruction}</p>
            </div>
            <div
                style={{
                    width: carouselWidth,
                    height: "340px",
                    top: "0",
                    position: "absolute",
                    transform: "translateZ(1000px) " + carouselPositions[currentStep],
                    display: "flex",
                    justifyContent: "space-between",
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
                <div className="bg-grey-light h-1px w-full px-32 mt-8 flex justify-between mx-auto">{progressDivs}</div>
            </div>
        </div>
    );
};

export default Carousel;
