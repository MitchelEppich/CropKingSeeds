import PartnerCard from "./partnerCard";

const Partners = props => {
    let showPartners = () => {
        let partners = props.partner.partners;
        let arr = [];
        for (let partner of partners) {
            arr.push(
                <PartnerCard
                    key={partner.name}
                    {...props}
                    name={partner.name}
                    tag={partner.tag}
                    imgUrl={partner.imgUrl}
                    description={partner.description}
                />
            );
        }
        return arr;
    };

    return (
        <div className="w-full pt-2 pb-8">
            <h1 className="text-4xl font-extrabold p-2 pt-10 pl-8">Crop King's Trusted Partners</h1>
            <div className="w-2/3 p-2 pl-8">
                <p>Do you have a business or service that can help our valued growers?</p>
                <p>
                    If your company has the same high standards as Crop King Seeds, then contact us to put your
                    information in the list below.
                </p>
            </div>
            <div className="flex flex-wrap flex-wrap w-full mt-8">
                {showPartners()}
                {/* <PartnerCard {...props} />
                <PartnerCard {...props} />
                <PartnerCard {...props} />
                <PartnerCard {...props} />
                <PartnerCard {...props} />
                <PartnerCard {...props} />
                <PartnerCard {...props} />
                <PartnerCard {...props} />
                <PartnerCard {...props} />
                <PartnerCard {...props} />
                <PartnerCard {...props} />
                <PartnerCard {...props} />
                <PartnerCard {...props} /> */}
            </div>
        </div>
    );
};

export default Partners;
