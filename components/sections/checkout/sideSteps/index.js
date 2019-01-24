const SideSteps = props => {
  let _orderDetails = props.checkout.orderDetails;
  return (
    <div
      style={{
        borderLeft: "6px solid rgb(146, 3, 0)",
        background: "white",
        // background: "rgb(239, 87, 83)",
        overflow: "hidden",
        borderRadius: "5px"
      }}
      className="absolute z-50 w-16 h-500 pin-r pt-2 shadow-lg uppercase -mr-6 sm:-mr-2 font-bold xl:hidden xxl:hidden lg:hidden">
      <div
        className={`w-full text-red-dark font-bold relative my-4 unselectable ${
          props.misc.stepsCheckout == 0 ? "steps-active-mobile" : null
        }`}>
        <div
          onClick={e => {
            e.preventDefault();
            props.toggleStepsCheckout(0);
          }}
          className={`p-2 text-md ml-4 cursor-pointer`}>
          <span className="flex text-xl">1.</span>
        </div>
      </div>
      <div
        className={`w-full text-red-dark font-bold relative my-4 unselectable ${
          props.misc.stepsCheckout == 1 ? "steps-active-mobile" : null
        }`}>
        <div
          onClick={e => {
            e.preventDefault();
            props.toggleStepsCheckout(1);
          }}
          className={`p-2 text-md ml-4 cursor-pointer ${
            _orderDetails["shipping"] == null || props.misc.stepsCheckout < 1
              ? "opacity-50 pointer-events-none"
              : ""
          }`}>
          <span className="flex text-xl">2.</span>
        </div>
      </div>
      <div
        className={`w-full text-red-dark font-bold relative my-4 unselectable ${
          props.misc.stepsCheckout == 2 ? "steps-active-mobile" : null
        }`}>
        <div
          onClick={e => {
            e.preventDefault();
            props.toggleStepsCheckout(2);
          }}
          className={`p-2 text-md ml-4 cursor-pointer ${
            _orderDetails["billing"] == null || props.misc.stepsCheckout < 2
              ? "opacity-50 pointer-events-none"
              : ""
          }`}>
          <span className="flex text-xl">3. </span>
        </div>
      </div>
      <div
        className={`w-full text-red-dark font-bold relative my-4 unselectable ${
          props.misc.stepsCheckout == 3 ? "steps-active-mobile" : null
        }`}>
        <div
          onClick={e => {
            e.preventDefault();
            props.toggleStepsCheckout(3);
          }}
          className={`p-2 text-md ml-4 cursor-pointer ${
            _orderDetails["payment"] == null || props.misc.stepsCheckout < 3
              ? "opacity-50 pointer-events-none"
              : ""
          }`}>
          <span className="flex text-xl">4.</span>
        </div>
      </div>
      <div
        className={`w-full text-red-dark font-bold relative my-4 unselectable ${
          props.misc.stepsCheckout == 4 ? "steps-active-mobile" : null
        }`}>
        <div
          onClick={e => {
            e.preventDefault();
            props.toggleStepsCheckout(4);
          }}
          className={`p-2 text-md ml-4 cursor-pointer ${
            _orderDetails["confirm"] == null || props.misc.stepsCheckout < 4
              ? "opacity-50 pointer-events-none"
              : ""
          }`}>
          <span className="flex text-xl">5. </span>
        </div>
      </div>
    </div>
  );
};

export default SideSteps;
