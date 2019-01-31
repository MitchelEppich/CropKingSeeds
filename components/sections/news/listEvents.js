import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCannabis } from "@fortawesome/free-solid-svg-icons";

const ListEvents = props => {
  return (
    <div className="w-full mx-4 scale-item cursor-pointer">
      <div className="w-full p-2 border-b-2 border-grey-lightest">
        <h3 className="px-2 p-1 font-bold text-2xl hover:text-red-dark">
          <FontAwesomeIcon
            icon={faCannabis}
            className="fa-md mr-2 text-grey-light opacity-50"
          />{" "}
          420 Event Cannabis Crazy
        </h3>
        <p className="px-2 text-sm font-bold">February, 23th - 2019</p>
        <p className="p-2">
          Proident occaecat nostrud duis mollit voluptate ullamco cillum magna
          irure excepteur reprehenderit officia labore.
        </p>
      </div>
    </div>
  );
};

export default ListEvents;
