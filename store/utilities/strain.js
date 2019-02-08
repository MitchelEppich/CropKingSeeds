let inferStrainData = strain => {
    let ret = {};
    let _countries = ["Canada", "United States", "Spain", "Netherlands", "United Kingdom", "South Africa"];
    let _genetics = ["Feminized", "Autoflower", "Regular", "CBD", "Dwarf", "Mix"];
    let _difficulties = ["Easy", "Moderate", "Experienced", "Master"];
    let _envs = ["Indoors or Outdoors", "Indoors", "Outdoors"];
    let _types = ["Sativa", "Indica", "Hybrid"];

    let { country, difficulty, genetic, type, env, pcbd, pcbn, pthc, name, yield: _yield } = strain;

    // Infer Country
    if (country != null)
        (() => {
            let str = "";
            do {
                let _countryIndex = country.shift();
                let _countriesLeft = country.length;

                str += _countries[_countryIndex];

                if (_countriesLeft > 1) str += ", ";
                else if (_countriesLeft == 1) str += " and ";
            } while (country.length > 0);
            ret.country = str;
        })();

    // Infer difficulty
    if (difficulty != null) ret.difficulty = _difficulties[difficulty];

    // Infer Genetics
    if (genetic != null) ret.genetic = _genetics[genetic];

    // Infer Names
    if (name != null)
        (() => {
            let _name = name;
            _name = _name.replace("Cannabis", "").replace("Seeds", "");
            if (genetic != "Mix") _name = _name.replace(genetic, "");
            else _name = _name.replace("Mix", "Mixed");
            // if (genetic == "CBD") _name = _name.replace("CB", "");
            ret.name = _name.replace(/\s+/g, " ").trim();
        })();

    // Infer types
    if (type != null) ret.type = _types[type];

    // Infer env
    if (env != null) ret.env = _envs[env];

    // Infer cbd
    if (pcbd != null)
        (() => {
            let _max = pcbd[pcbd.length - 1];
            if (_max >= 2) ret.cbd = "high";
            ret.cbd = "low";
        })();

    // Infer thc
    if (pthc != null)
        (() => {
            let _max = pthc[pthc.length - 1];
            if (_max >= 15) ret.thc = "high";
            else ret.thc = "low";
        })();

    //   pcbd = pcbd.map(a => `${a.toFixed(2)}%`).join("-");
    //   pcbn = pcbn.map(a => `${a.toFixed(2)}%`).join("-");
    //   pthc = pthc.map(a => `${a.toFixed(2)}%`).join("-");

    // Infer yield
    if (_yield != null)
        (() => {
            let arr = [];

            let _combo = (() => {
                let _str;
                let _i = _yield[0];
                let _o = _yield[1];
                if (_i > _o) _str = `${_o}g to ${_i}g *`;
                else if (_i == _o) _str = `${_i}g *`;
                else _str = `${_i}g to ${_o}g *`;
                return _str;
            })();
            do {
                let _output = _yield.shift();
                if (_output != -1) {
                    if (_yield.length == 1) _output = `${_output}g Indoors`;
                    else _output = `${_output}g Outdoors`;
                }
                arr.push(_output);
            } while (_yield.length > 0);
            arr.push(_combo);
            ret.yield = arr;
        })();

    return {
        ...strain,
        ...ret
    };
};

module.exports = {
    inferStrainData
};
