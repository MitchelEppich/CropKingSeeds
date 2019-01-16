import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";

const review = props => {
  let ratings = [];
  for (let i = 0; i < props.rating; i++) {
    ratings.push(
      <FontAwesomeIcon
        key={i}
        icon={faCannabis}
        className="text-red-dark fa-lg mx-1"
      />
    );
  }
  return (
    <div className="mx-auto flex justify-center w-container mt-2 pb-4 border-b-2 border-grey-lightest p-2">
      <div className="pr-4 w-1/4">
        <p className="font-bold text-xl mb-1">{props.name}</p>
        <p className="text-xs">September, 21th - 2018</p>
        <p className="mt-2">{ratings}</p>
      </div>
      <div className="w-3/4 text-justify">
        <p>{props.comment}</p>
      </div>
    </div>
  );
};

export default review;
