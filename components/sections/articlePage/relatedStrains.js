import OtherProducts from "../productPage/otherProducts";

const RelatedStrains = props => {
    return (
        <div>
            <h3 className="text-3xl mt-6 p-2">Related Strains</h3>
            <div className="w-full p-2 inline-flex mt-2 flex-wrap md:px-16 ">
                <OtherProducts {...props} />
            </div>
        </div>
    );
};

export default RelatedStrains;
