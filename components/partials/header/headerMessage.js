const HeaderMessage = props => {
  let viewMessage = props.misc.showHeaderMessage
    ? {
        transform: "translateY(0px)",
        transition: "all 0.3s ease-in-out",
        WebkitTransition: "all 0.3s ease-in-out",
        opacity: "1",
        zIndex: "1"
      }
    : {
        // transform: "translateY(70px)",
        transform: "translateY(-190px)",
        transition: "all 0.3s ease-in-out",
        WebkitTransition: "all 0.3s ease-in-out",
        opacity: "0",
        zIndex: "-999999999999999"
      };
  return (
    <div>
      <div
        style={viewMessage}
        className="w-full lg:w-700 lg:mx-auto bg-white border-b border-red-light border-l border-r p-2 font-bold shadow-md"
      >
        Welcome to our new website!
      </div>
    </div>
  );
};

export default HeaderMessage;
