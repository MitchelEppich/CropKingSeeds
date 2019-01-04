import Menu from "./menu"

const Header = props => {
    return (
        <div style={{
            position: "fixed",
            width: "100%",
            zIndex: "999",
            boxShadow: "0 0 30px rgba(0, 0, 0, 0.58)",
        }} className="preserv-3d">
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