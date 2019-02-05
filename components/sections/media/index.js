import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCaretDown,
  faCaretUp,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";

const Media = props => {
  return (
    <div className="w-full mt-5">
      <h3 className="mt-5 text-grey font-extrabold text-center text-3/5xl mx-auto w-full text-center">
        Events
      </h3>
      <div className="w-main mx-auto p-2 mt-12">
        <p className="text-center opacity-50">
          These are the next events lorem lorem are the next events lorem lorem
          lorem lorem are the next events lorem lorem lorem{" "}
        </p>
      </div>
      <div
        style={{ background: "rgb(250, 250, 250)" }}
        className="w-main mx-auto mt-12 rounded shadow-md relative"
      >
        <div
          onClick={() => {
            props.setVisibleScreen({ input: "viewContent" });
          }}
          className="w-full inline-flex p-2 font-bold cursor-pointer unselectable"
        >
          <div className="w-3/4 p-1">
            <p className="pl-6">
              ICBC - International Cannabis Business Conference
            </p>
          </div>
          <div className="w-1/4 p-1 text-center">
            <p>February 7, 2019</p>
          </div>
          <div className="w-12 p-1">
            <FontAwesomeIcon icon={faCaretDown} className="fa-lg" />
          </div>
        </div>
        {props.misc.visibleScreen.includes("viewContent") ? (
          <div
            style={{ background: "rgb(250, 250, 250)" }}
            className="p-2 inline-flex pt-6 relative"
          >
            <div className="w-1/4 p-2">
              <img src="../../static/img/cannabis.jpg" />
            </div>
            <div className="w-3/4 p-2">
              <p>
                Enim commodo magna incididunt ut ullamco commodo consequat
                veniam ad pariatur excepteur consequat. Commodo dolor proident
                proident eiusmod. Cillum commodo occaecat sunt do veniam. Qui ex
                sint velit do ipsum. Sit elit adipisicing eiusmod do aliquip
                velit sunt commodo fugiat exercitation culpa. Enim commodo magna
                incididunt ut ullamco commodo consequat veniam ad pariatur
                excepteur consequat. Commodo dolor proident proident eiusmod.
                Cillum commodo occaecat sunt do veniam. Qui ex sint velit do
                ipsum. Sit elit adipisicing eiusmod do aliquip velit sunt
                commodo fugiat exercitation culpa....
                <span className="mx-1 font-bold text-red-dark cursor-pointer hover:text-red-light p-1">
                  Read More
                </span>
              </p>
            </div>
            <div className="absolute pin-r pin-b pb-3 pr-3 font-bold">
              <p className="cursor-pointer hover:text-grey-light">
                <FontAwesomeIcon icon={faMapMarkerAlt} /> San Francisco, United
                States
              </p>
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default Media;
