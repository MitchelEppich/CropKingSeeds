import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const news = props => {
  let styleImg = {
    height: "460px",
    width: "100%",
    overflow: "hidden",
    objectFit: "cover",
    objectPosition: "top",
    boxShadow: "0 0px 10px rgba(0, 0, 0, 0.26)"
  };

  let currentEvents = props.misc.upcomingEvents[props.misc.currentEventObj];
  let activeEvent = props.misc.currentEventObj;
  let desc = currentEvents.desc;
  let name = currentEvents.name;
  let date = currentEvents.date;
  let currentImg = currentEvents.img;

  let showEvents = props.misc.upcomingEvents.map((val, index) => {
    let formatDate = moment(val.date).format("LL");
    return (
      <div
        onMouseEnter={() => {
          props.setCurrentEvent(index);
        }}
        onClick={() => {
          props.setCurrentEvent(index);
          console.log(props.misc.upcomingEvents[index], index);
        }}
        className="w-full mx-4 scale-item cursor-pointer"
      >
        <div className="w-full p-2 border-b-2 border-grey-lightest">
          <h3 className="px-2 p-1 font-bold text-2xl hover:text-red-dark">
            <FontAwesomeIcon
              icon={faCannabis}
              className="fa-md mr-2 text-grey-light opacity-50"
            />{" "}
            {val.name}
          </h3>
          <p className="px-2 text-sm font-bold">{formatDate}</p>
          <p className="p-2">{val.desc}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="lg:mt-12 w-full sm:h-300 md:h-300 h-full lg:h-200">
      <div className="p-4 mt-6 w-full">
        <h2 className="text-3/5xl font-bold text-center w-full p-2 bg-red-darker text-white">
          Upcoming Events
        </h2>
      </div>
      <div className="inline-flex w-full px-12 py-4">
        <div className="w-1/2 p-2">
          <img
            style={styleImg}
            src={`${currentImg}`}
            className="w-full about-img md:w-4/5 sm:h-200 md:h-64 h-250 xl:h-250 lg:h-250 shadow-lg"
          />
        </div>
        <div className="w-1/2 p-2">{showEvents}</div>{" "}
      </div>
    </div>
  );
};

export default news;
