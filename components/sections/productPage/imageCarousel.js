import React from "react";
// import { ImageZoom } from "react-simple-image-zoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis, faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import ReactImageMagnify from "react-image-magnify";

const imageCarousel = props => {
    let images = props.viewProduct.currentProduct.images;
    let imageThumbs = images.map((image, index) => {
        return (
            <div
                key={index}
                onClick={() => props.setCurrentImage(index)}
                className="w-16 shadow text-center cursor-pointer my-1">
                <img className="h-20 my-2 mx-auto" src={image} />
            </div>
        );
    });

    let imageZooms = images.map((image, index) => {
        return (
            //   <ImageZoom
            //     key={index}
            //     portalId="portal"
            //     // largeImgSrc={currentImage}
            //     imageWidth={1080}
            //     imageHeight={860}
            //     zoomContainerWidth={400}
            //     activeClass="my-active "
            //     portalStyle={Object.assign(
            //       { ...ImageZoom.defaultPortalStyle },
            //       {
            //         top: "0px",
            //         background: "white",
            //         width: "400px",
            //         borderRadius: "3px",
            //         boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 22px"
            //       }
            //     )}
            //     zoomScale={1}
            //     responsive={true}
            //   >
            //     <img
            //       style={{ objectFit: "contain" }}
            //       className="cursor-pointer flex my-auto xxl:h-400 xl:h-400 w-full h-300"
            //       src={image}
            //     />
            //   </ImageZoom>
            // <ReactImageMagnify
            //   {...{
            //     smallImage: {
            //       alt: "Wristwatch by Ted Baker London",
            //       isFluidWidth: true,
            //       src: image
            //     },
            //     largeImage: {
            //       src: image,
            //       isFluidWidth: true,
            //       width: 1200,
            //       height: 1800
            //     }
            //   }}
            // />
            <div className="w-full h-full mx-auto flex justify-center">
                <div className="w-500 h-full mx-auto flex justify-center" id="zoomedImg">
                    <ReactImageMagnify
                        {...{
                            smallImage: {
                                src: image,
                                width: 249,
                                height: 420
                            },
                            largeImage: {
                                src: image,
                                width: 800,
                                height: 1400
                            },
                            enlargedImageContainerStyle: {
                                backgroundColor: "#ffffff",
                                marginLeft: "26px"
                            },
                            enlargedImageContainerDimensions: {
                                width: "140%",
                                height: "100%"
                            },

                            isHintEnabled: true
                        }}
                    />
                </div>
            </div>
        );
    });

    let currentImage = imageZooms[props.viewProduct.currentImage];

    return (
        <div className="w-full relative">
            <div className="w-full h-400 sm:h-300 md:h-300 inline-flex justify-center flex">
                <div className="flex flex-wrap content-start w-16">{imageThumbs}</div>
                <div
                    style={{
                        textAlign: "center",
                        marginLeft: "30px"
                    }}
                    className="w-3/4 mx-4 z-50 bg-white flex my-auto">
                    {/* <div className="text-xs bg-almost-white shadow flex pin-b pin-r rounded absolute text-black p-1 mr-4 mb-6 opacity-75 md:hidden sm:hidden">
            <FontAwesomeIcon icon={faSearchPlus} className="mr-1" />
            Zoom
          </div> */}
                    {currentImage}
                </div>
                <div className="bg-white md:hidden sm:hidden">
                    <div id="portal" className="bg-white rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    );
};

export default imageCarousel;
