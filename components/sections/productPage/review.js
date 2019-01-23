import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";

import moment from "moment";

const review = props => {
  let ratings = [];
  for (let i = 0; i < 5; i++) {
    ratings.push(
      <FontAwesomeIcon
        key={i}
        icon={faCannabis}
        className={`text-red-dark fa-lg mx-1 ${
          props.rating <= i ? "opacity-25" : ""
        }`}
      />
    );
  }
  return (
    <div className="mx-auto flex justify-center lg:block md:block sm:block sm:w-full w-full ml-12 pl-4 mt-2 pb-4 border-b-2 border-grey-lightest p-2">
      <div className="pr-4 w-1/4 md:w-full sm:w-full lg:w-full md:inline-flex sm:inline-flex lg:inline-flex md:pr-0 sm:pr-0 lg:pr-0">
        <div className="sm:w-1/2 md:w-1/2 lg:w-1/2">
          <p className="font-bold text-xl mb-1">{props.name}</p>
          <p className="text-xs">{moment(props.date).fromNow()}</p>
        </div>
        <div className="sm:text-right sm:justify-end sm:flex md:text-right md:justify-end md:flex lg:text-right lg:justify-end lg:flex sm:w-1/2 md:w-1/2 lg:w-1/2">
          <p className="mt-2">{ratings}</p>
        </div>
      </div>
      <div className="w-3/4 text-justify md:w-full sm:w-full lg:w-full sm:mt-4 md:mt-4 lg:mt-4 text-sm">
        <p>{props.body}</p>
      </div>
    </div>
  );
};

export default review;
