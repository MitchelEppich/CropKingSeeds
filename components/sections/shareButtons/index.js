import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faRedditSquare,
  faGooglePlus
} from "@fortawesome/free-brands-svg-icons";

const ShareButtons = props => {
  return (
    <div className="fixed pin-l mt-20 z-999 md:hidden sm:hidden ">
      <div className="w-16 shadow p-2 text-white rounded-lg bg-red-darker text-right -ml-4">
        <a
          className="text-white"
          target="_blank"
          href="https://www.instagram.com/cropkingseeds/?hl=en"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="fa-2x my-1 pr-1 hover:text-grey scale-item cursor-pointer"
          />
        </a>
        <a
          className="text-white"
          target="_blank"
          href="https://www.facebook.com/cropkingseedsreview/"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="fa-2x my-1 pr-1 hover:text-grey scale-item cursor-pointer"
          />
        </a>
        <a
          className="text-white"
          target="_blank"
          href="https://twitter.com/CropKingSeed?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="fa-2x my-1 pr-1 hover:text-grey scale-item cursor-pointer"
          />
        </a>
        <a
          className="text-white"
          target="_blank"
          href="https://plus.google.com/+CropKingSeeds"
        >
          <FontAwesomeIcon
            icon={faGooglePlus}
            className="fa-2x my-1 pr-1 hover:text-grey scale-item cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};

export default ShareButtons;
