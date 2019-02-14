import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const PopUpBanner = props => {
  let popUpScreen = {
    opacity: !props.misc.visibleScreen.includes("showPopUpBanner") ? "1" : "0",
    transition: "opacity 0.6s ease-in-out",
    pointerEvents: !props.misc.visibleScreen.includes("showPopUpBanner")
      ? "auto"
      : "none"
  };

  return (
    <div
      style={popUpScreen}
      className="fixed showPopUpScreen bg-black-transparent z-999 w-full h-screen flex justify-center items-center"
    >
      <div className="z-999 fixed justify-center flex items-center p-8">
        <img src="../../static/img/FirstTime_PopUp.jpg" className="" />
        <FontAwesomeIcon
          onClick={() => {
            props.setVisibleScreen({ input: "showPopUpBanner" });
          }}
          icon={faTimes}
          className="fa-2x absolute pin-r pin-t text-white cursor-pointer hover:text-grey-light"
        />
      </div>
    </div>
  );
};

export default PopUpBanner;
