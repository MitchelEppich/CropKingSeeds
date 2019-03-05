import { faSeedling, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const extraData = props => {
  return (
    <div
      className={
        props.hover
          ? "w-full p-2 px-4 inline-flex text-grey text-center sm:hidden"
          : "hidden slow"
      }
    >
      <div className="w-1/2 text-sm mr-2 inline-flex bg-grey-lightest text-center">
        <div className="text-center w-full pt-1 inline-flex flex items-center justify-between">
          <FontAwesomeIcon icon={faClock} className="fa-lg ml-2 mb-1" />
          <p className="w-full font-extrabold p-1 text-center justify-center">
            {props.product.flowerTime}{" "}
          </p>
        </div>
      </div>
      <div className="w-1/2 text-sm ml-2 inline-flex bg-grey-lightest text-center">
        <div className="text-center w-full pt-1 inline-flex flex items-center justify-between">
          <FontAwesomeIcon icon={faSeedling} className="fa-lg ml-2 mb-1" />
          <p className="w-full font-extrabold p-1 text-center justify-center">
            {props.product.yield[2]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default extraData;
