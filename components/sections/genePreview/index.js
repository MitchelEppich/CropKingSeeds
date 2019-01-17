import Link from "next/link";

const GenePreview = props => {
    let isSmallMediumDevice = ["sm", "md"].includes(props.misc.mediaSize);
    let types = [
        {
            name: "feminized",
            strainImg: "../static/img/feminized.png",
            packImg: "../static/img/strains/package/feminizedPack.png",
            background: "url(../static/img/Red.png)"
        },
        {
            name: "autoflower",
            strainImg: "../static/img/autoflower.png",
            packImg: "../static/img/strains/package/autoflowerPack.png",
            background: "url(../static/img/Purple.png)"
        },
        {
            name: "cbd",
            strainImg: "../static/img/cbd.png",
            packImg: "../static/img/strains/package/CBDPack.png",
            background: "url(../static/img/White.png)"
        },
        {
            name: "regular",
            strainImg: "../static/img/regular.png",
            packImg: "../static/img/strains/package/RegularPack.png",
            background: "url(../static/img/green.png)"
        }
    ];
    let windows = types.map((val, index) => {
        let strainImgStyle = { position: "absolute", bottom: "0" },
            headingStyle,
            screenStyle,
            packStyle = { opacity: 0 };

        if (props.misc.geneHoverIndex == index) {
            strainImgStyle = {
                ...strainImgStyle,
                transform: "translateY(100%)",
                opacity: 0
            };
            headingStyle = { opacity: 0 };
            screenStyle = { transform: "translateX(-130px) rotate(-90deg)" };
            packStyle = { opacity: 1 };
        }
        return (
            <Link href="/shop" key={index}>
                <div
                    style={{ position: "relative", backgroundImage: val.background }}
                    onClick={() => {
                        props.toggleFilter({
                            filter: props.shop.activeFilters,
                            genetic: val.name,
                            multiple: true
                        });
                        window.scroll(0, 0);
                    }}
                    onMouseEnter={() => {
                        if (!isSmallMediumDevice) props.setGeneHoverIndex(index);
                    }}
                    onMouseLeave={() => {
                        if (!isSmallMediumDevice) props.setGeneHoverIndex(index);
                    }}
                    className="genePreview">
                    <img
                        className="sm:hidden md:hidden absolute w-full slow"
                        src={val.strainImg}
                        style={strainImgStyle}
                    />
                    <div style={screenStyle} className="screenClass bg-almost-black text-white uppercase">
                        <img src={val.packImg} style={packStyle} className="sm:hidden packClass slow" />
                        <p
                            style={headingStyle}
                            className="headingClass absolute sm:text-3xl md:text-3/5xl lg:text-3xl xl:text-3/5xl xxl:text-3/5xl">
                            {val.name}
                        </p>
                    </div>
                </div>
            </Link>
        );
    });

    return (
        <div className="flex flex-wrap w-full xl:my-12 xl:h-500 mx-auto relative overflow-hidden">
            <h2 className="w-full mt-8 mb-4 pt-2 text-center text-3/5xl font-extrabold p-2 shadow-md">Categories</h2>
            {windows}
        </div>
    );
};

export default GenePreview;
