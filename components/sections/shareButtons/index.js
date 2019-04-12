import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faRedditSquare,
  faGooglePlus,
  faPinterest
} from "@fortawesome/free-brands-svg-icons";

const ShareButtons = props => {
  return (
    <div className="fixed pin-l mt-20 z-40 md:hidden sm:hidden ">
      <div className="w-16 shadow p-2 text-white rounded-lg bg-red-darker text-right -ml-5">
        <a
          aria-label="instagram"
          className="text-white"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/cropkingseeds/?hl=en"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="fa-2x  px-1 hover:text-red-light scale-item cursor-pointer"
          />
        </a>
        <a
          aria-label="facebook"
          className="text-white"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/CropKingSeeds/"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="fa-2x  px-1 hover:text-red-light scale-item cursor-pointer"
          />
        </a>
        <a
          aria-label="twitter"
          className="text-white"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/CropKingSeed?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="fa-2x  px-1 hover:text-red-light scale-item cursor-pointer"
          />
        </a>
        <a
          aria-label="pinterest"
          className="text-white"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.pinterest.ca/officialCKS/"
        >
          <FontAwesomeIcon
            icon={faPinterest}
            className="fa-2x  px-1 hover:text-red-light scale-item cursor-pointer"
          />
        </a>
        {/* <a
                    aria-label="googlePlus"
                    className="text-white"
                    target="_blank"
                     rel="nofollow"
                    href="https://plus.google.com/+CropKingSeeds">
                    <FontAwesomeIcon
                        icon={faGooglePlus}
                        className="fa-2x my-1 pr-1 hover:text-red-light scale-item cursor-pointer"
                    />
                </a> */}
      </div>
    </div>
  );
};

export default ShareButtons;
