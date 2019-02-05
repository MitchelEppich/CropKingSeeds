import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
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
                key={index}
                onMouseEnter={() => {
                    props.setCurrentEvent(index);
                }}
                onClick={() => {
                    props.setCurrentEvent(index);
                    console.log(props.misc.upcomingEvents[index], index);
                }}
                className="w-full mx-4 scale-item cursor-pointer border-b-2 border-grey-lightest">
                <div className="w-full p-2 inline-flex">
                    <div className="w-3/4">
                        <h3
                            className={`px-2 p-1 font-bold text-2xl ${
                                currentEvents == val ? "text-red-dark" : "text-grey"
                            } `}>
                            <FontAwesomeIcon
                                icon={faCannabis}
                                className={` ${
                                    currentEvents == val ? "text-red-dark" : "text-grey"
                                } fa-md mr-2  opacity-50`}
                            />{" "}
                            {val.name}
                        </h3>
                    </div>
                    <div className="w-1/4 items-center flex justify-end">
                        <p className="justify-end flex text-right opacity-75 font-bold text-sm">Event</p>
                    </div>
                </div>
                <div>
                    <p className="px-2 text-sm font-bold">{formatDate} </p>
                    <p className="px-2 text-sm hover:text-grey-light pt-4">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="opacity-50" /> San Francisco, United States
                    </p>
                    <p className="p-2">{val.desc}</p>
                </div>
            </div>
        );
    });

    return (
        <div className="lg:mt-12 w-full h-full">
            <div className="p-4 mt-6 w-full">
                <h2 className="text-3/5xl font-bold text-center w-full p-2 bg-red-darker text-white">
                    Upcoming Events
                </h2>
            </div>
            <div className="inline-flex w-full px-12 py-4 sm:flex-col md:flex-col lg:flex-col">
                <div className="w-1/2 sm:w-full md:w-full lg:w-full p-2">
                    <img
                        style={styleImg}
                        src={`${currentImg}`}
                        className="w-full about-img md:w-4/5 sm:h-200 md:h-64 h-450 xl:h-250 lg:h-450 shadow-lg"
                    />
                </div>
                <div className="w-1/2 sm:w-full md:w-full lg:w-full p-2">{showEvents}</div>{" "}
            </div>
        </div>
    );
};

export default news;
