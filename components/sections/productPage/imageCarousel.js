import React from "react";
import { ImageZoom } from "react-simple-image-zoom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis, faSearchPlus } from "@fortawesome/free-solid-svg-icons";

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
            <ImageZoom
                key={index}
                portalId="portal"
                largeImgSrc={currentImage}
                imageWidth={1080}
                imageHeight={860}
                zoomContainerWidth={400}
                activeClass="my-active "
                portalStyle={Object.assign(
                    { ...ImageZoom.defaultPortalStyle },
                    {
                        top: "0px",
                        background: "white",
                        width: "400px",
                        borderRadius: "3px",
                        boxShadow: "rgba(0, 0, 0, 0.3) 0px 2px 22px"
                    }
                )}
                zoomScale={1}
                responsive={true}>
                <img
                    style={{ objectFit: "contain" }}
                    className="cursor-pointer flex my-auto sm:h-200 xxl:h-400 xl:h-400 w-full h-300"
                    src={image}
                />
            </ImageZoom>
        );
    });

    let currentImage = imageZooms[props.viewProduct.currentImage];

    return (
        <div className="w-full relative lg:flex lg:justify-center">
            <div className="w-full h-400 sm:h-200 md:h-300 lg:h-300 lg:w-3/4 inline-flex justify-center flex">
                <div className="flex flex-wrap content-start w-16">{imageThumbs}</div>
                <div
                    style={{
                        // width: "300px",
                        // height: "420px",
                        textAlign: "center",
                        marginLeft: "30px"
                    }}
                    className="w-3/4 mx-4 z-50 bg-white flex sm:h-200 sm:mb-32 lg:mx-0 lg:my-0 my-auto">
                    <div className="text-xs bg-almost-white shadow flex pin-b pin-r rounded absolute text-black p-1 mr-4 mb-6 opacity-75 md:hidden sm:hidden">
                        <FontAwesomeIcon icon={faSearchPlus} className="mr-1" />
                        Zoom
                    </div>
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
