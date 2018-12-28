import Link from "next/link";

const GenePreview = props => {
    let autoStyle, femStyle, cbdStyle, regStyle, femImage, autoImage, cbdImage, regImage;

    switch(props.misc.geneHoverIndex){
        case 0:
            autoStyle = {
                transform: "translateX(0)",
            };
            femStyle = {
                transform: "translateX(100%)",
            };
            cbdStyle = {
                transform: "translateX(170%)",
            };
            regStyle = {
                transform: "translateX(235%)",
            };
            femImage = {
                // transform: "rotateY(90deg)"
                opacity: 0
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
                transform: "translateX(160%)",
            };
            regStyle = {
                transform: "translateX(230%)",
            };
            autoImage = {
                transform: "rotateY(90deg)"
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
                transform: "translateX(230%)",
            };
            cbdImage = {
                transform: "translateY(100%)"
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
                transform: "translateX(100%)"
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
                transform: "translateX(225%)",
            };
        break;
    }
        
   

    return (
        <div className="flex w-full my-12 h-500 mx-auto overflow-hidden">
            <Link href="/shop#feminized">
                <div style={autoStyle} onClick={() => window.scroll(0, 0)}
                    onMouseEnter={() => props.setGeneHoverIndex(0)} 
                    onMouseLeave={() => props.setGeneHoverIndex(0)} className="auto h-500 z-10">
                    <img className="absolute w-full slow" src="../static/img/feminized.png" style={femImage} />
                </div>
            </Link>
            <Link href="/shop#autoflower">
                <div style={femStyle} onClick={() => window.scroll(0, 0)}
                    onMouseEnter={() => props.setGeneHoverIndex(1)} 
                    onMouseLeave={() => props.setGeneHoverIndex(1)} className="fem h-500 z-20">
                    <img className="absolute w-full slow" src="../static/img/autoflower.png" style={autoImage} />
                </div>
            </Link>
            <Link href="/shop#cbd">
                <div style={cbdStyle} onClick={() => window.scroll(0, 0)}
                    onMouseEnter={() => props.setGeneHoverIndex(2)} 
                    onMouseLeave={() => props.setGeneHoverIndex(2)} className="cbd h-500 z-30">
                    <img className="absolute w-full slow" src="../static/img/cbd.png" style={cbdImage} />
                </div>
            </Link>
            <Link href="/shop#regular">
                <div style={regStyle} onClick={() => window.scroll(0, 0)}
                    onMouseEnter={() => props.setGeneHoverIndex(3)} 
                    onMouseLeave={() => props.setGeneHoverIndex(3)} className="reg h-500 z-40">
                    <img className="absolute w-full slow" src="../static/img/regular.png" style={regImage} />
                </div>
            </Link>
            
            
           
            
        </div>
    )
}

export default GenePreview