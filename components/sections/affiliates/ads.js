const ads = props => {
    return (
        <div className="w-full flex sm:flex-wrap sm:justify-center md:flex-wrap md:justify-center mt-16 mx-auto justify-between">
            <div className="w-300 sm:my-4 sm:mx-4 md:my-4 md:mx-4 lg:w-175 lg:h-350 xl:w-250 xl:h-350 h-400 bg-white rounded-lg shadow-lg overflow-hidden">
                <h3 className="h-100 font-black sm:text-2xl lg:text-lg lg:h-24 xl:text-2xl text-3xl bg-red-dark text-center text-white px-8 pt-4">
                    Who can participate?
                </h3>
                <img className="w-150 lg:w-16 xl:w-19 block mt-6 mx-auto" src="../static/icons/affiliate/1.png" />
                <p className="text-lg lg:text-sm xl:text-base mt-8 text-center font-bold px-8">
                    Our target partners are those with websites, email lists, retail stores such as garden centers and
                    headshops.
                </p>
            </div>
            <div className="w-300 sm:my-4 sm:mx-4 md:my-4 md:mx-4 lg:w-175 lg:h-350 xl:w-250 xl:h-350 h-400 bg-white rounded-lg shadow-lg overflow-hidden">
                <h3 className="h-100 font-black sm:text-2xl lg:text-lg lg:h-24 xl:text-2xl text-3xl bg-red-dark text-center text-white px-8 pt-4">
                    What is the payout?
                </h3>
                <img className="w-100 lg:w-12 xl:w-16 block mt-6 mx-auto" src="../static/icons/affiliate/2.png" />
                <p className="text-lg lg:text-sm xl:text-base mt-8 text-center font-bold px-8">
                    We pay 20% commission on the first of each month when a minimum of $200 in commission is reached.
                </p>
            </div>

            <div className="w-300 sm:my-4 sm:mx-4 md:my-4 md:mx-4 lg:w-175 lg:h-350 xl:w-250 xl:h-350 h-400 bg-white rounded-lg shadow-lg overflow-hidden">
                <h2 className="h-100 font-black sm:text-2xl lg:text-lg lg:h-24 xl:text-2xl text-3xl bg-red-dark text-center text-white px-8 pt-4">
                    Why choose Crop King Seeds?
                </h2>
                <img className="w-100 lg:w-12 xl:w-16 block mt-6 mx-auto" src="../static/icons/affiliate/3.png" />
                <p className="text-lg lg:text-sm xl:text-base mt-8 text-center font-bold px-8">
                    Simple, look at our packaging, strains, 24 hour customer service and reputation. We are a retail
                    store with a lot of support to help make you some extra money.
                </p>
            </div>
        </div>
    );
};

export default ads;
