import PartnerCard from "./partnerCard";

const Partners = props => {
    let partners = props.partner.partners.map((partner, index) => {
        return (
            <PartnerCard
                key={index}
                {...props}
                name={partner.name}
                tag={partner.tag}
                imgUrl={partner.imgUrl}
                description={partner.description}
            />
        );
    });

    return (
        <div className="w-full pt-2 pb-8">
            <div className="w-3/5 sm:w-3/4 xl:pl-4 xxl:pl-1 sm:mt-12 md:mt-8 lg:mt-10 mt-16 mx-auto font-bold">
                <h1 className="text-4xl sm:text-3/5xl md:text-3/5xl xl:text-3/5xl lg:text-3xl font-extrabold text-left">
                    Crop King's Trusted Partners
                </h1>
                <p className="pl-1 mt-2">Do you have a business or service that can help our valued growers?</p>
                <p className="pl-1 mt-2">
                    If your company has the same high standards as Crop King Seeds, then contact us to put your
                    information in the list below.
                </p>
                <div className="p-3 bg-red-dark text-white mt-8 mx-auto text-center cursor-pointer h-12 pt-3 xl:w-64 lg:w-64 md:w-48 sm:w-48 xxl:w-64 text-2xl font-extrabold scale-item">
                    Join Us!
                </div>
            </div>
            <div className="flex flex-wrap justify-center w-5/6 mx-auto mt-8">{partners}</div>
        </div>
    );
};

export default Partners;
