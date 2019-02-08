import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const imageZoom = props => {
    return (
        <div className="bg-black-transparent fixed w-screen h-screen z-999999 pin-t pin-l text-center">
            <div
                onClick={() =>
                    props.setCurrentImage({
                        max: props.viewProduct.currentProduct.images.length,
                        index: props.viewProduct.currentImage - 1
                    })
                }
                className="inline-block h-screen w-24">
                <FontAwesomeIcon icon={faAngleLeft} className="fa-5x text-white" />
            </div>
            <img
                className="h-auto xxl:h-600 w-auto mx-auto inline-block mt-32"
                src={props.viewProduct.currentProduct.images[props.viewProduct.currentImage]}
            />
            <div
                onClick={() =>
                    props.setCurrentImage({
                        max: props.viewProduct.currentProduct.images.length,
                        index: props.viewProduct.currentImage + 1
                    })
                }
                className="inline-block h-screen w-24">
                <FontAwesomeIcon icon={faAngleRight} className="fa-5x text-white" />
            </div>

            <div onClick={() => props.toggleImageZoom(false)} className="absolute pin-t pin-r mr-64 mt-32">
                <FontAwesomeIcon icon={faTimes} className="fa-3x text-white" />
            </div>
        </div>
    );
};
export default imageZoom;
