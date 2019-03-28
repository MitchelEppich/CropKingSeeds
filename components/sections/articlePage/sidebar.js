import React from "react";
import RelatedStrains from "./relatedStrains";
import {
  faClock,
  faUserAlt,
  faEnvelope,
  faPrint,
  faLink
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGooglePlus,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = props => {
  return (
    <div>
      <div className="p-2 justify-center mx-auto inline-flex mt-2 bg-smoke-grey">
        <div className="w-10 mx-2 cursor-pointer text-center p-2">
          <a
            rel="nofollow"
            aria-label="share-facebook"
            className="no-underline text-grey-light hover:text-red-dark"
            target="_blank"
            href={
              "https://www.facebook.com/sharer/sharer.php?u=http%3A//localhost%3A3000/" +
              props.article.currentArticle.name.toLowerCase().replace(/ /g, "-")
            }
          >
            <FontAwesomeIcon icon={faFacebook} className="fa-lg scale-item" />
          </a>
        </div>
        <div className="w-10 mx-2 cursor-pointer text-center p-2">
          {" "}
          <a
            rel="nofollow"
            aria-label="share-twitter"
            className="no-underline text-grey-light hover:text-red-dark"
            target="_blank"
            href={
              "https://twitter.com/home?status=http%3A//localhost%3A3000/" +
              props.article.currentArticle.name.toLowerCase().replace(/ /g, "-")
            }
          >
            <FontAwesomeIcon icon={faTwitter} className="fa-lg scale-item" />
          </a>
        </div>
        <div className="w-10 mx-2 cursor-pointer text-center p-2">
          <a
            aria-label="share-google-plus"
            className="no-underline text-grey-light hover:text-red-dark"
            target="_blank"
            rel="nofollow"
            href={
              "https://plus.google.com/share?url=http%3A//localhost%3A3000/" +
              props.article.currentArticle.name.toLowerCase().replace(/ /g, "-")
            }
          >
            <FontAwesomeIcon icon={faGooglePlus} className="fa-lg scale-item" />
          </a>
        </div>
        <div className="w-10 mx-2 cursor-pointer text-center p-2">
          <a
            aria-label="share-linkin"
            rel="nofollow"
            className="no-underline text-grey-light hover:text-red-dark"
            href={
              "https://www.linkedin.com/shareArticle?mini=true&url=http%3A//localhost%3A3000/" +
              props.article.currentArticle.name
                .toLowerCase()
                .replace(/ /g, "-") +
              "&title=Crop%20King%20Seeds%20-%20Article&summary=&source="
            }
          >
            <FontAwesomeIcon icon={faLinkedin} className="fa-lg scale-item" />
          </a>
        </div>
        {document.queryCommandSupported("copy") ? (
          <div className="w-10 mx-2 cursor-pointer text-center p-2">
            <FontAwesomeIcon
              id="copyArticleLink"
              icon={faLink}
              className="fa-lg scale-item text-grey-light hover:text-red-dark"
            />
          </div>
        ) : null}
      </div>

      <RelatedStrains {...props} />
    </div>
  );
};

export default Sidebar;
