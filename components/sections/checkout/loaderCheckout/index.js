const LoaderCheckout = props => {
  return (
    <div className="loader h-20 mx-auto text-center">
      <div className="lds-mini-ring w-200 flex justify-center">
        <div />
        <div />
        <div />
        <div />
      </div>
      {/* <img
        alt="cks-logo"
        src={props.misc.CFURL + "/logos/cks-logo-header.png"}
        className="cks-logo-loader z-999 p-0 w-100 scale-item cursor-pointer"
      /> */}
    </div>
  );
};

export default LoaderCheckout;
