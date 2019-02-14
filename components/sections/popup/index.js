import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const PopUpBanner = props => {
  let popUpScreen = {
    transform: !props.misc.visibleScreen.includes("showPopUpBanner")
      ? "translateX(0)"
      : "translate(-100vw)",
    transition: "all 0.4s ease"
  };

  return (
    <div
      style={popUpScreen}
      className="fixed bg-black-transparent z-999 w-full h-screen flex justify-center items-center"
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
