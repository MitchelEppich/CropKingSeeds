const PartnerCard = props => {
    return (
        <div
            style={{
                width: "30%",
                boxShadow: "rgba(16, 16, 16, 0.07) 0px 0px 10px"
            }}
            className="mx-5 text-center p-3 my-4 scale-item">
            <div className="min-h-32 w-full h-64 items-center flex">
                <img src={props.imgUrl} />
            </div>
            <p className="font-extrabold mt-2 text-grey-light"> {props.tag}</p>
            <h2 className="text-red-dark px-2 text-2/5xl font-black">{props.name}</h2>
            <p className="mt-4 text-sm px-8 text-justify mb-6 text-grey-light">{props.description}</p>
        </div>
    );
};

export default PartnerCard;
