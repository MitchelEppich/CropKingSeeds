const HeaderMessage = props => {
  console.log(props.misc.dailyMessageShown);
  let viewMessage =
    props.misc.dailyMessageShown == null
      ? {
          transform: "translateY(8rem)",
          height: "3rem",
          transition: "all 1s ease-in-out",
          WebkitTransition: "all 1s ease-in-out",
          opacity: "1",
          zIndex: "11",
          position: "absolute"
        }
      : {
          transform: "translateY(0rem)",
          height: "3rem",
          transition: "all 1s ease-in-out",
          WebkitTransition: "all 1s ease-in-out",
          opacity: "0",
          zIndex: "11",
          position: "absolute"
        };
  return (
    <div>
      <div
        style={viewMessage}
        className="w-1300 xl:w-900 lg:w-700 mx-auto bg-white border-b border-red-light border-l border-r p-2 font-bold shadow-md slow"
      >
        {props.misc.dailyMessage}
      </div>
    </div>
  );
};

export default HeaderMessage;
