const HeaderMessage = props => {
  if (props.misc.showHeaderMessage && props.misc.dailyMessageTimer != null) {
    setTimeout(
      () =>
        props.toggleHeaderMessage({
          value: false,
          time: null,
          shown: true
        }),
      props.misc.dailyMessageTimer
    );
  }

  let viewMessage = props.misc.showHeaderMessage
    ? "dailyMessage dailyMessage--view"
    : "dailyMessage";
  return (
    <div>
      <div className={viewMessage}>{props.misc.dailyMessage}</div>
    </div>
  );
};

export default HeaderMessage;
