import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";

const ReviewStats = props => {
  return (
    <div className="w-full">
      <div className="w-full mt-2 p-2 text-red-dark">
        <div className="inline-flex p-1 mx-2 items-center flex w-full cursor-pointer scale-item">
          <div className="items-center flex">
            <span className="text-grey font-bold text-xs">5</span>
            <FontAwesomeIcon icon={faCannabis} className="fa-md mx-1" />
          </div>
          <div className="w-full bg-grey-lightest py-3 items-center flex ml-2 relative rounded">
            <div
              className="bg-red-dark rounded py-3 absolute"
              style={{ width: "40%", background: "#358406" }}
            />
          </div>
          <div className="absolute pin-r text-xs text-grey font-bold justify-end flex mr-2 opacity-50">
            27.5%
          </div>
        </div>
        <div className="inline-flex p-1 mx-2 items-center flex w-full cursor-pointer scale-item">
          <div className="items-center flex">
            <span className="text-grey font-bold text-xs">4</span>
            <FontAwesomeIcon icon={faCannabis} className="fa-md mx-1" />
          </div>
          <div className="w-full bg-grey-lightest py-3 items-center flex ml-2 relative rounded">
            <div
              className="bg-red-dark rounded py-3 absolute"
              style={{ width: "60%", background: "#5ca232" }}
            />
          </div>
          <div className="absolute pin-r text-xs text-grey font-bold justify-end flex mr-2 opacity-50">
            38.5%
          </div>
        </div>
        <div className="inline-flex p-1 mx-2 items-center flex w-full cursor-pointer scale-item">
          <div className="items-center flex">
            <span className="text-grey font-bold text-xs">3</span>
            <FontAwesomeIcon icon={faCannabis} className="fa-md mx-1" />
          </div>
          <div className="w-full bg-grey-lightest py-3 items-center flex ml-2 relative rounded">
            <div
              className="bg-red-dark rounded py-3 absolute"
              style={{ width: "20%", background: "#74b34f" }}
            />
          </div>
          <div className="absolute pin-r text-xs text-grey font-bold justify-end flex mr-2 opacity-50">
            10.5%
          </div>
        </div>
        <div className="inline-flex p-1 mx-2 items-center flex w-full cursor-pointer scale-item">
          <div className="items-center flex">
            <span className="text-grey font-bold text-xs">2</span>
            <FontAwesomeIcon icon={faCannabis} className="fa-md mx-1" />
          </div>
          <div className="w-full bg-grey-lightest py-3 items-center flex ml-2 relative rounded">
            <div
              className="bg-red-dark rounded py-3 absolute"
              style={{ width: "40%", background: "#88c762" }}
            />
          </div>
          <div className="absolute pin-r text-xs text-grey font-bold justify-end flex mr-2 opacity-50">
            18.5%
          </div>
        </div>
        <div className="inline-flex p-1 mx-2 items-center flex w-full cursor-pointer scale-item">
          <div className="items-center flex">
            <span className="text-grey font-bold text-xs">1</span>
            <FontAwesomeIcon icon={faCannabis} className="fa-md mx-1" />
          </div>
          <div className="w-full bg-grey-lightest py-3 items-center flex ml-2 relative rounded">
            <div
              className="bg-red-dark rounded py-3 absolute"
              style={{ width: "20%", background: "#b0dc96" }}
            />
          </div>
          <div className="absolute pin-r text-xs text-grey font-bold justify-end flex mr-2 opacity-50">
            10.5%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewStats;
