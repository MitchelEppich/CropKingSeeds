const Carousel = props => {
    let currentStep = props.germination.currentStep;
    let carouselPositions = props.germination.carouselPositions;

    let images = props.germination.steps.map((step, index) => {
        return <img key={index} style={{ width: "540px", height: "320px", marginTop: "25px" }} src={step.image} />;
    });
    let progressImages = props.germination.steps.map((step, index) => {
        let style =
            currentStep == index
                ? { transform: "translateY(-67px)", width: "140px", height: "140px" }
                : { transform: "translateY(-57px)", width: "120px", height: "120px" };
        return (
            <div key={index} className="w-200 h-8 text-center">
                <img
                    onClick={() => {
                        props.changeStep({
                            _incrOrDecr: 0,
                            _currentStep: index,
                            _totalSteps: props.germination.steps.length
                        });
                    }}
                    key={index}
                    style={style}
                    className="relative cursor-pointer z-50"
                    src={step.progressImage}
                />
                {/* <span
                    onClick={() => {
                        props.changeStep({
                            _incrOrDecr: 0,
                            _currentStep: index,
                            _totalSteps: props.germination.steps.length
                        });
                    }}
                    style={{
                        margin: "0 auto",
                        width: "20px",
                        height: "20px",
                        zIndex: 50,
                        color: "white",
                        borderRadius: "50%",
                        backgroundColor: "#A31621",
                        position: "absolute",
                        paddingLeft: "1px",
                        transform: "translateX(-65px)",
                        cursor: "pointer"
                    }}>
                    {index + 1}
                </span> */}
            </div>
        );
    });

    return (
        <div className="w-1200 shadow-lg h-400 pt-12 text-xl relative overflow-hidden mx-auto">
            <div className="w-1/3 ml-24 absolute z-0">
                <h2 className="px-4 my-4 text-center">Step {currentStep + 1}</h2>
                <p className="w-full slow px-4">{props.germination.steps[currentStep].instruction}</p>
            </div>
            <div
                style={{
                    width: "3600px",
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
                            _totalSteps: props.germination.steps.length
                        });
                    }}
                    className={
                        currentStep > 0
                            ? "text-white bg-red-dark w-60px p-2 font-bold slowish hover:bg-grey hover:text-white"
                            : "cursor-not-allowed text-white bg-grey-lighter w-60px p-2 font-bold slowish "
                    }>
                    Prev
                </button>

                <button
                    onClick={() => {
                        props.changeStep({
                            _incrOrDecr: 1,
                            _currentStep: currentStep,
                            _totalSteps: props.germination.steps.length
                        });
                    }}
                    className={
                        currentStep < props.germination.steps.length - 1
                            ? "text-white bg-red-dark w-60px p-2 font-bold slowish hover:bg-grey hover:text-white"
                            : "cursor-not-allowed text-white bg-grey-lighter w-60px p-2 font-bold slowish "
                    }>
                    Next
                </button>
            </div>
            <div className="w-full h-60px absolute pin-b">
                <div className="bg-grey-lighter h-2 w-full px-32 mt-8 flex justify-between mx-auto">
                    {progressImages}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
