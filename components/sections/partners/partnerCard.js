const PartnerCard = props => {
  return (
    <div className="w-250 h-250 sm:w-150 sm:h-150 sm:m-1 md:h-200 md:w-200 md:m-1 lg:h-200 lg:w-200 lg:mx-1 lg:my-1 xl:mx-4 xl:my-4 xxl:mx-4 xxl:my-4 sm:m-0 text-center scale-item m-2">
      <div className="h-full w-full shadow-md p-3 flex flex-wrap justify-center">
        <div className="h-32 lg:h-12 md:h-12 sm:h-8 text-center ">
          <a
            rel="noreferrer"
            href={props.url}
            target="_blank"
            className="cursor-pointer"
          >
            <img alt="partnerLogo" src={props.imgUrl} />
          </a>
        </div>
        <h2 className="text-red-dark mt-8 sm:mt-12 lg:mt-12 px-2 sm:text-sm md:text-lg md:mt-12 lg:text-lg text-2xl font-black">
          {props.name}
        </h2>
        <p className="w-full font-extrabold lg:text-sm sm:text-xs text-grey-light">
          {" "}
          {props.tag}
        </p>
        {/* <p className="mt-4 text-sm px-8 text-justify mb-6 text-grey-light">{props.description}</p> */}
      </div>
    </div>
  );
};

export default PartnerCard;
