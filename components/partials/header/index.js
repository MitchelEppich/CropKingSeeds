import Menu from "./menu";
import NotificationBar from "./notificationBar";

const Header = props => {
    let HeaderStyle = {
        position: "fixed",
        width: "100%",
        zIndex: "999"
    };

    return (
        <div style={HeaderStyle} className="preserve-3d">
            <Menu {...props} />
            {props.misc.notification != null ? <NotificationBar {...props} /> : null}
        </div>
    );
};

export default Header;
