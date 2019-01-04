


const filters = props => {
    let activeButton = "border border-red-dark p-2 m-1 font-bold slow bg-red-dark text-white";
    let notActiveButton = "text-red-dark border border-red-dark  p-2 m-1 font-bold slow hover:bg-red-dark hover:text-white";

    let toggleCategory = (props, type, toToggle, toTurnOff) => {
        if (props.misc.activeFilters.some(e => e[type] === toTurnOff)) {
            if (type == "thc") {
                props.toggleFilter({ thc: toToggle });
                props.toggleFilter({ thc: toTurnOff });
            } else {
                props.toggleFilter({ cbd: toToggle });
                props.toggleFilter({ cbd: toTurnOff });
            }
        } else {
            if (type == "thc") {
                props.toggleFilter({ thc: toToggle });
            } else {
                props.toggleFilter({ cbd: toToggle });
            }
        }
    }

    return (
        <div className="w-full h-500 pt-12 text-red-dark">
            <ul className="leading-loose flex flex-wrap pl-4">
                <li className="text-red-dark font-bold w-full text-2xl">Type</li>
                <li><button onClick={() => props.toggleFilter({ type: 0 })} className={props.misc.activeFilters.some(e => e.type === 0) ? activeButton : notActiveButton}>Sativa</button></li>
                <li><button onClick={() => props.toggleFilter({ type: 1 })} className={props.misc.activeFilters.some(e => e.type === 1) ? activeButton : notActiveButton}>Indica</button></li>
                <li><button onClick={() => props.toggleFilter({ type: 2 })} className={props.misc.activeFilters.some(e => e.type === 2) ? activeButton : notActiveButton}>Hybrid</button></li>
            </ul>
            <hr className="hr__filters" />
            <ul className="leading-loose flex flex-wrap pl-4">
                <li className="text-red-dark font-bold w-full text-2xl">Genetics</li>
                <li><button onClick={() => props.toggleFilter({ genetic: 1 })} className={props.misc.activeFilters.some(e => e.genetic === 1) ? activeButton : notActiveButton}>Autoflower</button></li>
                <li><button onClick={() => props.toggleFilter({ genetic: 0 })} className={props.misc.activeFilters.some(e => e.genetic === 0) ? activeButton : notActiveButton}>Feminized</button></li>
                <li><button onClick={() => props.toggleFilter({ genetic: 2 })} className={props.misc.activeFilters.some(e => e.genetic === 2) ? activeButton : notActiveButton}>Regular</button></li>
                <li><button onClick={() => props.toggleFilter({ genetic: 3 })} className={props.misc.activeFilters.some(e => e.genetic === 3) ? activeButton : notActiveButton}>CBD</button></li>
                <li><button onClick={() => props.toggleFilter({ genetic: 4 })} className={props.misc.activeFilters.some(e => e.genetic === 4) ? activeButton : notActiveButton}>Dwarf</button></li>
                <li><button onClick={() => props.toggleFilter({ genetic: 5 })} className={props.misc.activeFilters.some(e => e.genetic === 5) ? activeButton : notActiveButton}>Mix</button></li>
            </ul>
            <hr className="hr__filters" />
            <ul className="leading-loose flex flex-wrap pl-4">
                <li className="text-red-dark font-bold w-full text-2xl">THC Percentage</li>
                <li><button onClick={() => toggleCategory(props, "thc", "thcLow", "thcHigh")} className={props.misc.activeFilters.some(e => e.thc === 'thcLow') ? activeButton : notActiveButton}>Low</button></li>
                <li><button onClick={() => toggleCategory(props, "thc", "thcHigh", "thcLow")} className={props.misc.activeFilters.some(e => e.thc === 'thcHigh') ? activeButton : notActiveButton}>High</button></li>
            </ul>
            <hr className="hr__filters" />
            <ul className="leading-loose flex flex-wrap pl-4">
                <li className="text-red-dark font-bold w-full text-2xl">CBD Percentage</li>
                <li><button onClick={() => toggleCategory(props, "cbd", "cbdLow", "cbdHigh")} className={props.misc.activeFilters.some(e => e.cbd === "cbdLow") ? activeButton : notActiveButton}>Low</button></li>
                <li><button onClick={() => toggleCategory(props, "cbd", "cbdHigh", "cbdLow")} className={props.misc.activeFilters.some(e => e.cbd === "cbdHigh") ? activeButton : notActiveButton}>High</button></li>
            </ul>
            <hr className="hr__filters" />
            <button onClick={() => props.clearFilters()} className="text-red-dark border border-red-dark slow p-2 w-1/2 m-2 mt-4 mx-auto block font-bold hover:bg-red-dark hover:text-white">Clear</button>
        </div>
    );
}
export default filters;