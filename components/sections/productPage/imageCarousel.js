const imageCarousel = props => {
  let images = props.viewProduct.currentProduct.images;
  images = images.map((image, index) => {
    return (
      <div
        key={index}
        onClick={() => props.setCurrentImage(index)}
        className="w-12 shadow text-center cursor-pointer my-1">
        <img className="h-12 my-2 mx-auto" src={image} />
      </div>
    );
  });
  return <div className="w-full h-productImg sm:h-300 flex md:w-400 sm:w-300">
      <div className="flex flex-wrap content-start w-12">{images}</div>
      <div className="flex flex-wrap w-3/4 mx-4">
        <img className="h-productImg mx-auto sm:h-250 sm:w-150 sm:my-auto md:h-300 md:w-250 md:my-auto lg:h-300 lg:w-250 lg:my-auto" src={props.viewProduct.currentProduct.images[props.viewProduct.currentImage]} />
      </div>
    </div>;
};

export default imageCarousel;
