import Menu from "./Menu";
import NotificationBar from "./notificationBar";

const Header = props => {
  let HeaderStyle = {
    position: "fixed",
    width: "100%",
    zIndex: "50",
    boxShadow: "0 2px 3px rgba(47, 46, 46, 0.34)"
  };

  return (
    <div style={HeaderStyle} className="preserve-3d">
      <Menu {...props} />
      {props.misc.notification != null ? <NotificationBar {...props} /> : null}
    </div>
  );
};

export default Header;
