const PartnerCard = props => {
    return (
        <div className="w-250 h-250 text-center scale-item m-2">
            <div className="h-full w-full shadow-md sm:m-0 lg:mx-4 lg:my-4 xl:mx-4 xl:my-4 xxl:mx-4 xxl:my-4 p-3 flex flex-wrap justify-center">
                <div className="h-32 text-center">
                    <img src={props.imgUrl} />
                </div>
                <h2 className="text-red-dark mt-8 px-2 text-2xl font-black">{props.name}</h2>
                <p className="w-full font-extrabold text-grey-light"> {props.tag}</p>
                {/* <p className="mt-4 text-sm px-8 text-justify mb-6 text-grey-light">{props.description}</p> */}
            </div>
        </div>
    );
};

export default PartnerCard;
