const imageCarousel = props => {
    let images = props.viewProduct.currentProduct.images;
    images = images.map((image, index) => {
        return (
            <div
                key={index}
                onClick={() => props.setCurrentImage(index)}
                className="w-12 shadow-md text-center cursor-pointer">
                <img className="h-12 my-2 mx-auto" src={image} />
            </div>
        );
    });
    return (
        <div className="w-full h-300 flex justify-center">
            <div className="flex flex-wrap content-start w-12">{images}</div>
            <div className="flex flex-wrap w-3/4 ml-4">
                <img
                    className="h-300 mx-auto"
                    src={props.viewProduct.currentProduct.images[props.viewProduct.currentImage]}
                />
            </div>
        </div>
    );
};

export default imageCarousel;
