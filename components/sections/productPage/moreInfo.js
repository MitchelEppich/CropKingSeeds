import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";

const moreInfo = props => {
  let paragraphs = props.viewProduct.currentProduct.moreInfo.map(
    (paragraph, index) => {
      return (
        <React.Fragment key={index}>
          <p>{paragraph}</p>
          <br />
        </React.Fragment>
      );
    }
  );
  return <div className="w-full px-12 md:px-8 mt-6 sm:px-6">{paragraphs}</div>;
};

export default moreInfo;
