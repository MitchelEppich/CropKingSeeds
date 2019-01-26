import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Share = props => {
    return (
        <div className="text-white mt-6 sm:w-full md:w-full shadow border border-grey-lightest w-container mx-auto">
            <div className="bg-white h-8 items-center flex font-extrabold w-full justify-between text-grey-lighter inline-flex">
                {/* <div className="mr-2 items-center h-8 p-2 bg-grey-light font-bold pt-3 flex uppercase text-white">
          Share
        </div> */}
                <div className="p-2 w-full flex justify-center">
                    <a
                        className="no-underline text-grey-lighter"
                        target="_blank"
                        href={
                            "https://www.facebook.com/sharer/sharer.php?u=http%3A//localhost%3A3000/product/" +
                            props.viewProduct.currentProduct.name.toLowerCase().replace(/ /g, "-")
                        }>
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className="fa-2x p-1 mx-2 lg:mx-1 md:mx-1 hover:text-grey scale-item cursor-pointer"
                        />
                    </a>
                    <a
                        className="no-underline text-grey-lighter"
                        target="_blank"
                        href={
                            "https://twitter.com/home?status=http%3A//localhost%3A3000/product/" +
                            props.viewProduct.currentProduct.name.toLowerCase().replace(/ /g, "-")
                        }>
                        <FontAwesomeIcon
                            icon={faTwitter}
                            className="fa-2x p-1 mx-2 lg:mx-1 md:mx-1 hover:text-grey scale-item cursor-pointer"
                        />
                    </a>
                    <a
                        className="no-underline text-grey-lighter"
                        target="_blank"
                        href={
                            "https://plus.google.com/share?url=http%3A//localhost%3A3000/product/" +
                            props.viewProduct.currentProduct.name.toLowerCase().replace(/ /g, "-")
                        }>
                        <FontAwesomeIcon
                            icon={faGooglePlus}
                            className="fa-2x p-1 mx-2 lg:mx-1 md:mx-1 hover:text-grey scale-item cursor-pointer"
                        />{" "}
                    </a>
                    {document.queryCommandSupported("copy") ? (
                        <FontAwesomeIcon
                            id="copyLinkButton"
                            icon={faLink}
                            className="fa-2x p-1 ml-2 lg:ml-1 md:ml-1 hover:text-grey scale-item cursor-pointer"
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Share;
