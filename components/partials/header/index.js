import Menu from "./menu";
// import SearchBar from "./searchBar";

const Header = props => {
  let HeaderStyle = {
    position: "fixed",
    width: "100%",
    zIndex: "50",
    boxShadow: "0 2px 3px rgba(47, 46, 46, 0.34)"
  };
  if (props.misc.poorFps && props.misc.lowGPUMode == null) {
    if (
      window.confirm(
        "Your using a Shit computer. Would you like us to reduce animations and speed up performance?"
      )
    ) {
      props.enableLowGPUMode();
      sessionStorage.setItem("lowGPU", true);
    } else {
      sessionStorage.setItem("lowGPU", false);
    }
    props.disableFpsCalc();
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
