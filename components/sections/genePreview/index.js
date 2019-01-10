import Link from "next/link";

const GenePreview = props => {
    let autoStyle,
        autoImage,
        autoScreen,
        autoPack,
        autoHeading,
        autoHeadingBottom,
        femStyle,
        femImage,
        femScreen,
        femPack,
        femHeading,
        femHeadingBottom,
        cbdStyle,
        cbdImage,
        cbdScreen,
        cbdPack,
        cbdHeading,
        cbdHeadingBottom,
        regStyle,
        regImage,
        regScreen,
        regPack,
        regHeading,
        regHeadingBottom;
    autoImage = femImage = cbdImage = regImage = {
        transform: "translateY(0%)"
    };
    autoScreen = femScreen = cbdScreen = regScreen = {
        transform: "translateX(-445px) rotate(-90deg)",
        transition: "all 0.5s ease-in-out",
        width: "120%",
        height: "100%"
    };
    autoPack = femPack = cbdPack = regPack = {
        transform: "rotate(90deg)",
        margin: "48px 106px",
        width: "280px"
    };
    autoHeading = {
        transform: "translateX(15px)",
        position: "absolute",
        bottom: "0",
        transition: "all 0.5s ease-in-out"
    };
    autoHeadingBottom = {
        transform: "translateX(-150px) translateY(-175px) rotate(90deg)",
        position: "absolute",
        bottom: "0",
        transition: "all 0.5s ease-in-out",
        opacity: 0
    };
    femHeading = {
        transform: "translateX(15px)",
        position: "absolute",
        bottom: "0",
        transition: "all 0.5s ease-in-out"
    };
    femHeadingBottom = {
        transform: "translateX(-115px) translateY(-180px) rotate(90deg)",
        position: "absolute",
        bottom: "0",
        transition: "all 0.5s ease-in-out",
        opacity: 0
    };
    cbdHeading = {
        transform: "translateX(15px)",
        position: "absolute",
        bottom: "0",
        transition: "all 0.5s ease-in-out"
    };
    cbdHeadingBottom = {
        transform: "translateX(-70px) translateY(-180px) rotate(90deg)",
        position: "absolute",
        bottom: "0",
        transition: "all 0.5s ease-in-out",
        opacity: 0
    };
    regHeading = {
        transform: "translateX(15px)",
        position: "absolute",
        bottom: "0",
        transition: "all 0.5s ease-in-out"
    };
    regHeadingBottom = {
        transform: "translateX(-125px) translateY(-180px) rotate(90deg)",
        position: "absolute",
        bottom: "0",
        transition: "all 0.5s ease-in-out",
        opacity: 0
    };
    autoStyle = {
        transform: "translateX(0)"
    };
    femStyle = {
        transform: "translateX(75%)"
    };
    cbdStyle = {
        transform: "translateX(150%)"
    };
    regStyle = {
        transform: "translateX(227%)"
    };

    switch (props.misc.geneHoverIndex) {
        case 0:
            // autoStyle = {
            //     transform: "translateX(0)"
            // };
            // femStyle = {
            //     transform: "translateX(97%)"
            // };
            // cbdStyle = {
            //     transform: "translateX(170%)"
            // };
            // regStyle = {
            //     transform: "translateX(235%)"
            // };
            femImage = {
                transform: "translateY(100%)",
                opacity: 0
            };
            femHeading = {
                ...femHeading,
                opacity: 0
            };
            femHeadingBottom = {
                ...femHeadingBottom,
                opacity: 1,
                transform: "translateX(-125px) translateY(-180px) rotate(90deg)"
            };
            femScreen = {
                ...femScreen,
                transform: "translateX(-130px) rotate(-90deg)"
            };
            break;

        case 1:
            // autoStyle = {
            //     transform: "translateX(0)"
            // };
            // femStyle = {
            //     transform: "translateX(65%)"
            // };
            // cbdStyle = {
            //     transform: "translateX(163%)"
            // };
            // regStyle = {
            //     transform: "translateX(230%)"
            // };
            autoImage = {
                transform: "translateY(100%)",
                opacity: 0
            };
            autoHeading = {
                ...autoHeading,
                opacity: 0
            };
            autoHeadingBottom = {
                ...autoHeadingBottom,
                opacity: 1,
                transform: "translateX(-155px) translateY(-175px) rotate(90deg)"
            };
            autoScreen = {
                ...autoScreen,
                transform: "translateX(-130px) rotate(-90deg)"
            };
            break;

        case 2:
            // autoStyle = {
            //     transform: "translateX(0)"
            // };
            // femStyle = {
            //     transform: "translateX(65%)"
            // };
            // cbdStyle = {
            //     transform: "translateX(130%)"
            // };
            // regStyle = {
            //     transform: "translateX(227%)"
            // };
            cbdImage = {
                transform: "translateY(100%)",
                opacity: 0
            };
            cbdHeading = {
                ...cbdHeading,
                opacity: 0
            };
            cbdHeadingBottom = {
                ...cbdHeadingBottom,
                opacity: 1,
                transform: "translateX(-100px) translateY(-180px) rotate(90deg)"
            };
            cbdScreen = {
                ...cbdScreen,
                transform: "translateX(-126px) rotate(-90deg)"
            };
            break;

        case 3:
            // autoStyle = {
            //     transform: "translateX(0)"
            // };
            // femStyle = {
            //     transform: "translateX(65%)"
            // };
            // cbdStyle = {
            //     transform: "translateX(135%)"
            // };
            // regStyle = {
            //     transform: "translateX(205%)"
            // };
            regImage = {
                transform: "translateY(100%)",
                opacity: 0
            };
            regHeading = {
                ...regHeading,
                opacity: 0
            };
            regHeadingBottom = {
                ...regHeadingBottom,
                opacity: 1,
                transform: "translateX(-113px) translateY(-180px) rotate(90deg)"
            };
            regScreen = {
                ...regScreen,
                transform: "translateX(-127px) rotate(-90deg)"
            };
            break;

        default:
            break;
    }

    return (
        <div className="flex w-full my-12 h-500 mx-auto relative overflow-hidden">
            <Link href="/shop">
                <div
                    style={autoStyle}
                    onClick={() => {
                        props.toggleFilter({
                            filter: props.shop.activeFilters,
                            genetic: "feminized",
                            multiple: true
                        });
                        window.scroll(0, 0);
                    }}
                    onMouseEnter={() => props.setGeneHoverIndex(0)}
                    onMouseLeave={() => props.setGeneHoverIndex(0)}
                    className="auto h-500 z-10">
                    <img className="absolute w-full slow" src="../static/img/feminized.png" style={femImage} />
                    <div style={femScreen} className="bg-almost-black text-white uppercase">
                        <img src="../static/img/strains/package/GTF.png" style={femPack} />
                        <p style={femHeading} className="absolute text-3/5xl">
                            Feminized
                        </p>
                        <p style={femHeadingBottom} className="absolute bg-red-dark px-24 text-3/5xl">
                            Feminized
                        </p>
                    </div>
                </div>
            </Link>
            <Link href="/shop">
                <div
                    style={femStyle}
                    onClick={() => {
                        props.toggleFilter({
                            filter: props.shop.activeFilters,
                            genetic: "autoflower",
                            multiple: true
                        });
                        window.scroll(0, 0);
                    }}
                    onMouseEnter={() => props.setGeneHoverIndex(1)}
                    onMouseLeave={() => props.setGeneHoverIndex(1)}
                    className="fem h-500 z-20">
                    <img className="absolute w-full slow" src="../static/img/autoflower.png" style={autoImage} />
                    <div style={autoScreen} className="bg-almost-black text-white uppercase">
                        <img src="../static/img/strains/package/AHA.png" style={autoPack} />
                        <p style={autoHeading} className="absolute text-3/5xl">
                            Autoflower
                        </p>
                        <p style={autoHeadingBottom} className="absolute bg-purple px-24 text-3/5xl">
                            Autoflower
                        </p>
                    </div>
                </div>
            </Link>
            <Link href="/shop">
                <div
                    style={cbdStyle}
                    onClick={() => {
                        props.toggleFilter({ filter: props.shop.activeFilters, genetic: "cbd", multiple: true });
                        window.scroll(0, 0);
                    }}
                    onMouseEnter={() => props.setGeneHoverIndex(2)}
                    onMouseLeave={() => props.setGeneHoverIndex(2)}
                    className="cbd h-500 z-30">
                    <img className="absolute w-full slow" src="../static/img/cbd.png" style={cbdImage} />
                    <div style={cbdScreen} className="bg-almost-black text-white uppercase">
                        <img src="../static/img/strains/package/CBD.png" style={cbdPack} />
                        <p style={cbdHeading} className="absolute text-3/5xl">
                            CBD
                        </p>
                        <p style={cbdHeadingBottom} className="absolute bg-grey-light px-32 text-3/5xl">
                            CBD
                        </p>
                    </div>
                </div>
            </Link>
            <Link href="/shop">
                <div
                    style={regStyle}
                    onClick={() => {
                        props.toggleFilter({
                            filter: props.shop.activeFilters,
                            genetic: "regular",
                            multiple: true
                        });
                        window.scroll(0, 0);
                    }}
                    onMouseEnter={() => props.setGeneHoverIndex(3)}
                    onMouseLeave={() => props.setGeneHoverIndex(3)}
                    className="reg h-500 z-40">
                    <img className="absolute w-full slow" src="../static/img/regular.png" style={regImage} />
                    <div style={regScreen} className="bg-almost-black text-white uppercase">
                        <img src="../static/img/strains/package/OSR.png" style={regPack} />
                        <p style={regHeading} className="absolute text-3/5xl">
                            Regular
                        </p>
                        <p style={regHeadingBottom} className="absolute bg-green px-24 text-3/5xl">
                            Regular
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default GenePreview;
