const reviewBanner = props => {
  return (
    <div className="my-8 w-full justify-center flex relative sm:pt-8">
      <a
        href="https://ca.trustpilot.com/review/cropkingseeds.com"
        target="_blank"
        aria-label="trustpilot"
        rel="noopener noreferrer"
      >
        <img
          alt="review us banner"
          src={props.misc.CFURL + "/sidebar/reviewus_v1.gif"}
          className=""
        />
      </a>
    </div>
  );
};

export default reviewBanner;
