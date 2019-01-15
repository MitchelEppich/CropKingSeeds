import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faPlus,
  faMinus
} from "@fortawesome/free-solid-svg-icons";

const PopUpSection = props => {
  return (
    <div className="w-full">
      <div className="w-full p-2 px-4">
        <div
          onClick={() => {
            props.setVisibleScreen({ input: "showPayment", clearAll: true });
          }}
          className="h-10 bg-grey-lightest w-full inline-flex items-center cursor-pointer hover:bg-grey-light hover:text-white ">
          <div className="w-full p-2">
            <h3 className="font-bold pl-6 text-2xl">{props.title}</h3>
          </div>
          <div className="w-12 h-10 text-center ">
            {props.misc.visibleScreen.includes("showPayment") ? (
              <FontAwesomeIcon icon={faMinus} className="fa-lg mt-2" />
            ) : (
              <FontAwesomeIcon icon={faPlus} className="fa-lg mt-2" />
            )}
          </div>
        </div>
        {props.misc.visibleScreen != null &&
        props.misc.visibleScreen.includes("showPayment") ? (
          <div className="p-2 w-full">
            <p className="p-1">
              Incididunt non aliqua quis ex commodo ut aliqua mollit officia.
              Nulla ea aliqua amet et dolore deserunt minim anim nulla.
              Excepteur minim quis Lorem nisi laboris. Non ad esse nostrud
              commodo ad cillum aute commodo magna id consectetur exercitation
              labore proident. Nostrud minim reprehenderit fugiat ipsum minim ut
              ad tempor mollit do culpa duis dolor labore. Ea pariatur nulla
              cupidatat fugiat magna ipsum et fugiat sunt est. Incididunt non
              aliqua quis ex commodo ut aliqua mollit officia.{" "}
            </p>
            <p className="p-1">
              {" "}
              Nulla ea aliqua amet et dolore deserunt minim anim nulla.
              Excepteur minim quis Lorem nisi laboris. Non ad esse nostrud
              commodo ad cillum aute commodo magna id consectetur exercitation
              labore proident. Nostrud minim reprehenderit fugiat ipsum minim ut
              ad tempor mollit do culpa duis dolor labore. Ea pariatur nulla
              cupidatat fugiat magna ipsum et fugiat sunt est.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PopUpSection;
