import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";

import moment from "moment";

let rating;
const review = props => {
  let ratings = [];
  for (let i = 0; i < 5; i++) {
    ratings.push(
      <div key={i}>
        <img src="../../static/img/CrownIcon_Inv.svg" className="w-8 h-8" />
      </div>
    );
  }

  rating = props.rating != null ? props.rating : 0;
  return (
    <div className="lg:block md:block sm:block sm:w-full w-full sm:ml-0 sm:pl-2 pl-2 mb-2 pb-4 shadow rounded p-2 inline-flex">
      <div className="pr-4 w-1/4 md:w-full sm:w-full lg:w-full md:inline-flex sm:inline-flex lg:inline-flex md:pr-0 sm:pr-0 lg:pr-0">
        <div className="w-full pl-2">
          <p className="font-bold text-lg mb-1">{props.name}</p>
          <p className="text-xs w-full">{moment(props.date).fromNow()}</p>
        </div>
        <div className="sm:text-right sm:justify-end sm:flex md:text-right md:justify-end md:flex lg:text-right lg:justify-end lg:flex sm:w-1/2 md:w-1/2 lg:w-1/2">
          {/* <p className="mt-2 pl-1 text-xs">{ratings}</p> */}
          <div className="ml-1 w-150 relative text-left justify-center flex mx-auto">
            <div
              className="inline-flex bg-red-light"
              style={{
                width: `${150 * (rating / 5)}px`,
                height: "17px",
                marginTop: "7px"
              }}
            />
            <div
              className="inline-flex bg-grey-lightest"
              style={{
                width: `${150 * ((5 - rating) / 5)}px`,
                height: "17px",
                marginTop: "7px"
              }}
            />
            <div className="absolute pin-l inline-flex ">{ratings} </div>
          </div>
        </div>
      </div>
      <div className="w-3/4 xl:ml-6 lg:ml-6 xxl:ml-6 px-3 p-2 text-justify md:w-full sm:w-full lg:w-full sm:px-2 sm:mt-4 md:mt-4 lg:mt-4 text-sm">
        <div className="w-full">
          <p>{props.body}</p>
        </div>
      </div>
    </div>
  );
};

export default review;
