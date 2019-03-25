import Menu from "./menu";
// import SearchBar from "./searchBar";
import calcFps from "../../../store/utilities/calcFps";

const Header = props => {
  let HeaderStyle = {
    position: "fixed",
    width: "100%",
    zIndex: "50",
    boxShadow: "0 2px 3px rgba(47, 46, 46, 0.34)"
  };
  var times = [];
  var fps;
  var fpsArr = [];
  if (props.isClient && props.misc.lowGPUMode == null) {
    calcFps(times, fps, fpsArr, props);
  }
  // if (props.misc.poorFps == null) {
  //   calcFps(times, fps, fpsArr, props);
  // }
  if (props.misc.poorFps && props.misc.lowGPUMode == null) {
    if (window.confirm("Reduce animations and speed up performance?")) {
      props.toggleLowGPUMode(true);
      sessionStorage.setItem("lowGPU", true);
      props.disableFpsCalc();
    } else {
      props.toggleLowGPUMode(false);
      sessionStorage.setItem("lowGPU", false);
      props.disableFpsCalc();
    }
  }
  return (
    <div
      onClick={() => props.toggleStrainsMenu(false)}
      style={HeaderStyle}
      className="preserve-3d"
    >
      <Menu {...props} />
      {/* <SearchBar {...props} /> */}
    </div>
  );
};

export default Header;
