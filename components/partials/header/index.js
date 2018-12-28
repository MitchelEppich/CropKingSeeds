import Menu from "./menu"

const Header = props => {
    return (
        <div className="preserv-3d">
            <Menu {...props}/>
        {/*
            <div 
            className="test2 relative">
                <div style={{
                    transform: "rotate(3deg)",
                    top: "30px",
                    left: "54px",
                    position: "absolute"
                }} 
                className="">
                    <h1 className="text-white">Crop King Seeds</h1>
            </div>
            </div>
        */}
        
        </div>
    )
}

export default Header;