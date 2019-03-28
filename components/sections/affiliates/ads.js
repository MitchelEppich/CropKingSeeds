const ads = props => {
  return (
    <div className="w-main xl:w-95p lg:w-95p flex sm:flex-wrap sm:justify-center md:flex-wrap md:justify-center -mt-16 md:-mt-12 sm:mt-0 justify-between">
      <div className="w-300 sm:h-auto sm:pb-4 sm:my-4 sm:mx-4 md:my-4 md:mx-4 md:w-300 md:h-300 lg:w-175 lg:h-350 xl:w-250 xl:h-350 h-400 bg-white rounded-lg shadow-lg overflow-hidden">
        <h3 className="xxl:h-100 xl:h-20 xl:items-center xl:flex xl:justify-center xl:p-2 lg:p-2 lg:h-20 lg:items-center lg:flex lg:justify-center font-black sm:text-2xl md:text-2xl md:p-2 md:h-auto lg:text-lg xl:text-2xl text-3xl bg-red-dark text-center text-white px-8 pt-4">
          Who can participate?
        </h3>
        <img
          className="w-150 lg:w-16 md:w-19 xl:w-19 block mt-6 mx-auto lg:w-12"
          src="../static/icons/affiliate/1.png"
        />
        <p className="text-base lg:text-sm xl:text-base mt-8 md:mt-4 md:px-4 text-center font-bold lg:px-4 px-8 text-justify">
          Our target partners are those with websites, email lists, retail
          stores such as garden centers and headshops.
        </p>
      </div>
      <div className="w-300 sm:h-auto sm:pb-4 sm:my-4 sm:mx-4 md:my-4 md:mx-4 md:w-300 md:h-300 lg:w-175 lg:h-350 xl:w-250 xl:h-350 h-400 bg-white rounded-lg shadow-lg overflow-hidden">
        <h3 className="xxl:h-100 xl:h-20 xl:items-center xl:flex xl:justify-center xl:p-2 lg:p-2 lg:h-20 lg:items-center lg:flex lg:justify-center font-black sm:text-2xl md:text-2xl md:p-2 md:h-auto lg:text-lg xl:text-2xl text-3xl bg-red-dark text-center text-white px-8 pt-4">
          What is the payout?
        </h3>
        <img
          className="w-100 lg:w-12 md:w-16 xl:w-16 block mt-6 mx-auto"
          src="../static/icons/affiliate/2.png"
        />
        <p className="text-base lg:text-sm xl:text-base mt-8 md:mt-4 md:px-4 text-center font-bold lg:px-4 px-8 text-justify">
          We pay 20% commission on the first of each month when a minimum of
          $200 in commission is reached.
        </p>
      </div>

      <div className="w-300 sm:h-auto sm:pb-4 sm:my-4 sm:mx-4 md:my-4 md:mx-4 md:w-300 md:h-300 lg:w-175 lg:h-350 xl:w-250 xl:h-350 h-400 bg-white rounded-lg shadow-lg overflow-hidden">
        <h2 className="xxl:h-100 xl:h-20 xl:items-center xl:flex xl:justify-center xl:p-2 lg:p-2 lg:h-20 lg:items-center lg:flex lg:justify-center font-black sm:text-2xl md:text-2xl md:p-2 md:h-auto lg:text-lg xl:text-2xl text-3xl bg-red-dark text-center text-white px-8 pt-4">
          Why choose Crop King Seeds?
        </h2>
        <img
          className="w-100 lg:w-12 md:w-16 xl:w-16 block mt-6 mx-auto"
          alt="../static/icons/affiliate/3.png"
          src="../static/icons/affiliate/3.png"
        />
        <p className="text-base lg:text-sm xl:text-base mt-8 md:mt-4 md:px-4 text-center font-bold lg:px-4 px-8 text-justify">
          Simple, look at our packaging, strains, 24 hour customer service and
          reputation. We are a retail store with a lot of support to help make
          you some extra money.
        </p>
      </div>
    </div>
  );
};

export default ads;
