


const filters = props => {
    let activeButton = "border border-red-dark rounded-lg p-2 m-1 font-bold slowish bg-red-dark text-white";
    let notActiveButton = "text-red-dark border border-red-dark rounded-lg p-2 m-1 font-bold slowish hover:bg-red-dark hover:text-white";

    let toggleCategory = (props, toToggle, toTurnOff) => {
        if(props.misc.activeFilters.includes(toTurnOff)){
            props.toggleFilter(toToggle);
            props.toggleFilter(toTurnOff);
        } else {
            props.toggleFilter(toToggle);
        }
    }

    return (
        <div className="w-full h-700 pt-12 text-red-dark">
            <ul className="leading-loose flex flex-wrap">
                <li className="text-red-dark font-bold w-full">Type</li>
                <li><button onClick={() => props.toggleFilter("indica")} className={props.misc.activeFilters.includes("indica") ? activeButton : notActiveButton}>Indica</button></li>
                <li><button onClick={() => props.toggleFilter("sativa")} className={props.misc.activeFilters.includes("sativa") ? activeButton : notActiveButton}>Sativa</button></li>
                <li><button onClick={() => props.toggleFilter("hybrid")} className={props.misc.activeFilters.includes("hybrid") ? activeButton : notActiveButton}>Hybrid</button></li>
            </ul>
            <hr className="filter__hr"/>
            <ul className="leading-loose flex flex-wrap">
                <li className="text-red-dark font-bold w-full">Genetics</li>
                <li><button onClick={() => props.toggleFilter("autoflower")} className={props.misc.activeFilters.includes("autoflower") ? activeButton : notActiveButton}>Autoflower</button></li>
                <li><button onClick={() => props.toggleFilter("feminized")} className={props.misc.activeFilters.includes("feminized") ? activeButton : notActiveButton}>Feminized</button></li>
                <li><button onClick={() => props.toggleFilter("regular")} className={props.misc.activeFilters.includes("regular") ? activeButton : notActiveButton}>Regular</button></li>
                <li><button onClick={() => props.toggleFilter("cbd")} className={props.misc.activeFilters.includes("cbd") ? activeButton : notActiveButton}>CBD</button></li>
                <li><button onClick={() => props.toggleFilter("dwarf")} className={props.misc.activeFilters.includes("dwarf") ? activeButton : notActiveButton}>Dwarf</button></li>
            </ul>
            <hr className="filter__hr"/>
            <ul className="leading-loose flex flex-wrap">
                <li className="text-red-dark font-bold w-full">THC Percentage</li>
                <li><button onClick={() => toggleCategory(props, "thcLow", "thcHigh")} className={props.misc.activeFilters.includes("thcLow") ? activeButton : notActiveButton}>Low</button></li>
                <li><button onClick={() => toggleCategory(props, "thcHigh", "thcLow")} className={props.misc.activeFilters.includes("thcHigh") ? activeButton : notActiveButton}>High</button></li>
            </ul>
            <hr className="filter__hr"/>
            <ul className="leading-loose flex flex-wrap">
                <li className="text-red-dark font-bold w-full">CBD Percentage</li>
                <li><button onClick={() => toggleCategory(props, "cbdLow", "cbdHigh")} className={props.misc.activeFilters.includes("cbdLow") ? activeButton : notActiveButton}>Low</button></li>
                <li><button onClick={() => toggleCategory(props, "cbdHigh", "cbdLow")} className={props.misc.activeFilters.includes("cbdHigh") ? activeButton : notActiveButton}>High</button></li>
            </ul>
            <hr className="filter__hr"/>
            <button onClick={() => props.clearFilters()} className="text-red-dark border border-red-dark rounded-lg p-2 w-1/2 m-2 mt-4 mx-auto block font-bold slowish hover:bg-red-dark hover:text-white">Clear</button>
        </div>
    );
}
export default filters;