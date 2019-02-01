import Menu from "./menu";
// import SearchBar from "./searchBar";

const Header = props => {
    let HeaderStyle = {
        position: "fixed",
        width: "100%",
        zIndex: "50",
        boxShadow: "0 2px 3px rgba(47, 46, 46, 0.34)"
    };

    return (
        <div style={HeaderStyle} className="preserve-3d">
            <Menu {...props} />
            {/* <SearchBar {...props} /> */}
        </div>
    );
};

export default Header;
