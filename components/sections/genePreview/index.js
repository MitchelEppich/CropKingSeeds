import Link from "next/link";

const GenePreview = props => {
    let autoStyle, autoImage, autoScreen, autoPack, autoHeading,
        femStyle, femImage, femScreen, femPack, femHeading,
        cbdStyle,  cbdImage, cbdScreen, cbdPack, cbdHeading,
        regStyle,  regImage, regScreen, regPack, regHeading;
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
            margin: "85px 70px",
            width: "400px"
        };
        autoHeading  = {
            transform: "translateX(15px)",
            position: "absolute",
            bottom: "0",
            transition: "all 0.5s ease-in-out"
        };
        femHeading = {
            transform: "translateX(15px)",
            position: "absolute",
            bottom: "0",
            transition: "all 0.5s ease-in-out"
        };
        cbdHeading = {
            transform: "translateX(15px)",
            position: "absolute",
            bottom: "0",
            transition: "all 0.5s ease-in-out"
        };
        regHeading = {
            transform: "translateX(15px)",
            position: "absolute",
            bottom: "0",
            transition: "all 0.5s ease-in-out"
        };

    switch(props.misc.geneHoverIndex){
        case 0:
            autoStyle = {
                transform: "translateX(0)",
            };
            femStyle = {
                transform: "translateX(97%)",
            };
            cbdStyle = {
                transform: "translateX(170%)",
            };
            regStyle = {
                transform: "translateX(235%)",
            };
            femImage = {
                transform: "translateY(100%)",
                opacity: 0
            };
            femHeading = {
                ...femHeading,
                transform: "translateX(-65px) translateY(-180px) rotate(90deg)",
                position: "absolute",
                bottom: "0"
            };
            femScreen = {
                ...femScreen,
                transform: "translateX(-89px) rotate(-90deg)",
            };
            break;

        case 1:
            autoStyle = {
                transform: "translateX(0)",
            };
            femStyle = {
                transform: "translateX(65%)",
            };
            cbdStyle = {
                transform: "translateX(163%)",
            };
            regStyle = {
                transform: "translateX(230%)",
            };
            autoImage = {
                transform: "translateY(100%)",
                opacity: 0
            };
            autoHeading = {
                ...autoHeading,
                transform: "translateX(-100px) translateY(-175px) rotate(90deg)",
                position: "absolute",
                bottom: "0"
            };
            autoScreen = {
                ...autoScreen,
                transform: "translateX(-89px) rotate(-90deg)",
            };
            break;

        case 2:
            autoStyle = {
                transform: "translateX(0)",
            };
            femStyle = {
                transform: "translateX(65%)",
            };
            cbdStyle = {
                transform: "translateX(130%)",
            };
            regStyle = {
                transform: "translateX(227%)",
            };
            cbdImage = {
                transform: "translateY(100%)",
                opacity: 0
            };
            cbdHeading = {
                ...cbdHeading,
                transform: "translateX(0px) translateY(-180px) rotate(90deg)",
                position: "absolute",
                bottom: "0"
            };
            cbdScreen = {
                ...cbdScreen,
                transform: "translateX(-89px) rotate(-90deg)",
            };
            break;

        case 3:
            autoStyle = {
                transform: "translateX(0)",
            };
            femStyle = {
                transform: "translateX(65%)",
            };
            cbdStyle = {
                transform: "translateX(135%)",
            };
            regStyle = {
                transform: "translateX(205%)",
            };
            regImage = {
                transform: "translateY(100%)",
                opacity: 0
            };
            regHeading = {
                ...regHeading,
                transform: "translateX(-45px) translateY(-180px) rotate(90deg)",
                position: "absolute",
                bottom: "0"
            };
            regScreen = {
                ...regScreen,
                transform: "translateX(-89px) rotate(-90deg)",
            };
            break;

        default:
            autoStyle = {
                transform: "translateX(0)",
            };
            femStyle = {
                transform: "translateX(75%)",
            };
            cbdStyle = {
                transform: "translateX(150%)",
            };
            regStyle = {
                transform: "translateX(227%)",
            };

        break;
    }
        
   

    return (
        <div className="flex w-full my-12 h-500 mx-auto relative overflow-hidden">
            <Link href="/shop#feminized">
                <div style={autoStyle} onClick={() => window.scroll(0, 0)}
                    onMouseEnter={() => props.setGeneHoverIndex(0)} 
                    onMouseLeave={() => props.setGeneHoverIndex(0)} className="auto h-500 z-10">
                    <img className="absolute w-full slow" src="../static/img/feminized.png" style={femImage} />
                    <div style={femScreen} className="bg-almost-black text-white uppercase">
                        <img src="../static/img/femPack.png" style={femPack} />
                        <p style={femHeading} className="absolute text-3/5xl">Feminized</p>
                    </div>
                </div>
            </Link>
            <Link href="/shop#autoflower">
                <div style={femStyle} onClick={() => window.scroll(0, 0)}
                    onMouseEnter={() => props.setGeneHoverIndex(1)} 
                    onMouseLeave={() => props.setGeneHoverIndex(1)} className="fem h-500 z-20">
                    <img className="absolute w-full slow" src="../static/img/autoflower.png" style={autoImage} />
                    <div style={autoScreen} className="bg-almost-black text-white uppercase">
                        <img src="../static/img/autoPack.png" style={autoPack} />
                        <p style={autoHeading} className="absolute text-3/5xl">Autoflower</p>
                    </div>
                </div>
            </Link>
            <Link href="/shop#cbd">
                <div style={cbdStyle} onClick={() => window.scroll(0, 0)}
                    onMouseEnter={() => props.setGeneHoverIndex(2)} 
                    onMouseLeave={() => props.setGeneHoverIndex(2)} className="cbd h-500 z-30">
                    <img className="absolute w-full slow" src="../static/img/cbd.png" style={cbdImage} />
                    <div style={cbdScreen} className="bg-almost-black text-white uppercase">
                        <img src="../static/img/cbdPack.png" style={cbdPack} />
                        <p style={cbdHeading} className="absolute text-3/5xl">CBD</p>
                    </div>
                </div>
            </Link>
            <Link href="/shop#regular">
                <div style={regStyle} onClick={() => window.scroll(0, 0)}
                    onMouseEnter={() => props.setGeneHoverIndex(3)} 
                    onMouseLeave={() => props.setGeneHoverIndex(3)} className="reg h-500 z-40">
                    <img className="absolute w-full slow" src="../static/img/regular.png" style={regImage} />
                    <div style={regScreen} className="bg-almost-black text-white uppercase">
                        <img src="../static/img/regPack.png" style={regPack} />
                        <p style={regHeading} className="absolute text-3/5xl">Regular</p>
                    </div>
                </div>
            </Link>
            
            
           
            
        </div>
    )
}

export default GenePreview