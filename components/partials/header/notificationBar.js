
const NotificationBar = props => {
  let style = {
    transform: "translateY(-10px)",
    zIndex: "-100"
  }

  return (
    <div style={style} className="w-1300 h-16 relative mx-auto border rounded-lg bg-white">
      <p>{props.misc.notification}</p>

    </div>
  );
}

export default NotificationBar;