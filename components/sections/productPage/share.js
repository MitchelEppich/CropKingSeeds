import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGooglePlus
} from "@fortawesome/free-brands-svg-icons";
import {
  faLink,
  faShare,
  faShareAltSquare,
  faShareAlt,
  faEnvelope,
  faPrint
} from "@fortawesome/free-solid-svg-icons";

// let print = () => {
//   window.print();
// };

let copyEmbedLink = () => {
  const el = document.createElement("textarea");
  el.value = window.location.href;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

let embedLink;

const Share = props => {
  return (
    <div className="text-white mt-6 sm:w-full md:w-full shadow border border-grey-lightest w-container mx-auto rounded overflow-hidden">
      <div className="bg-white h-8 items-center flex font-extrabold w-full justify-between text-grey-lighter inline-flex ">
        {/* <div className="items-center h-8 p-2 bg-red-light font-bold flex w-150 justify-center uppercase text-white">
          Share <FontAwesomeIcon icon={faShareAlt} className="ml-2" />
        </div> */}
        <div className="p-2 flex w-full justify-center opacity-75">
          <a
            className="no-underline text-grey-light"
            target="_blank"
            rel="noreferrer"
            href={
              "https://www.facebook.com/sharer/sharer.php?u=https%3A//" +
              window.location.href.split("//")[1]
            }
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="fa-2x p-1 mx-2 lg:mx-1 md:mx-1 hover:text-grey scale-item cursor-pointer"
            />
          </a>
          <a
            className="no-underline text-grey-light"
            target="_blank"
            href={
              "https://twitter.com/home?status=https%3A//" +
              window.location.href.split("//")[1]
            }
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="fa-2x p-1 mx-2 lg:mx-1 md:mx-1 hover:text-grey scale-item cursor-pointer"
            />
          </a>
          {/* <span
            onClick={() => {
              window.print();
            }}
            className="no-underline text-grey-light"
          >
            <FontAwesomeIcon
              icon={faPrint}
              className="fa-2x p-1 mx-2 lg:mx-1 md:mx-1 hover:text-grey scale-item cursor-pointer"
            />
          </span> */}
          {/* {document.queryCommandSupported("copy") ? ( */}

          <span
            onClick={() => {
              copyEmbedLink();
            }}
          >
            {" "}
            <FontAwesomeIcon
              id="copyLinkButton"
              icon={faLink}
              className="fa-2x p-1 ml-2 lg:ml-1 md:ml-1 hover:text-grey text-grey-light scale-item cursor-pointer"
            />
          </span>
          {/* ) : null} */}
        </div>
      </div>
    </div>
  );
};

export default Share;
