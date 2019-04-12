let inferStrainData = (strain, options = {}) => {
  let ret = {};
  let _countries = [
    "Canada",
    "United States",
    "Spain",
    "Netherlands",
    "United Kingdom",
    "South Africa",
    "Central America"
  ];
  let _genetics = ["Feminized", "Autoflower", "Regular", "CBD", "Dwarf", "Mix"];
  let _difficulties = ["Easy", "Moderate", "Experienced", "Master"];
  let _envs = ["Indoors or Outdoors", "Indoors", "Outdoors"];
  let _types = ["Sativa", "Indica", "Hybrid"];

  let {
    country,
    difficulty,
    genetic,
    type,
    env,
    pcbd,
    pcbn,
    pthc,
    name,
    yield: _yield,
    flowerTime
    // packageImg
  } = strain;

  // Infer Country
  if (country != null)
    (() => {
      let str = "";
      let arr = [];
      do {
        let _countryIndex = country.shift();
        let _countriesLeft = country.length;

        let _country = _countries[_countryIndex];
        str += _country;
        arr.push(_country);

        if (_countriesLeft > 1) str += ", ";
        else if (_countriesLeft == 1) str += " and ";
      } while (country.length > 0);
      ret.country = str;
      ret.aCountry = arr;
    })();

  // Infer difficulty
  if (difficulty != null) {
    ret.difficulty = _difficulties[difficulty];
    ret.ndifficulty = difficulty;
  }

  // Infer Genetics
  let _genetic;
  if (genetic != null) {
    _genetic = _genetics[genetic];
    ret.genetic = _genetic;
  }

  // Infer Names
  if (name != null)
    (() => {
      let _name = name;
      _name = _name.replace("Cannabis", "").replace("Seeds", "");

      if (_genetic != null) {
        if (_genetic != "Mix" && options.excludeGenetic)
          _name = _name.replace(_genetic, "");
        else _name = _name.replace("Mix", "Mixed");
      }
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
      if (_max >= 0.7) ret.cbd = "high";
      else ret.cbd = "low";
    })();

  // Infer thc
  if (pthc != null)
    (() => {
      let _max = pthc[pthc.length - 1];
      if (_max >= 18.49) ret.thc = "high";
      else ret.thc = "low";
    })();

  //   pcbd = pcbd.map(a => `${a.toFixed(2)}%`).join("-");
  //   pcbn = pcbn.map(a => `${a.toFixed(2)}%`).join("-");
  //   pthc = pthc.map(a => `${a.toFixed(2)}%`).join("-");

  // Infer yield
  if (_yield != null) {
    (() => {
      let arr = [];

      let { _combo, _avg } = (() => {
        let _str;
        let _avg;
        let _i = _yield[0];
        let _o = _yield[1];
        if (_i != -1 && _o != -1 && _i != _o) {
          _avg = (_i + _o) / 2;
          if (_i > _o) _str = `${_o}g to ${_i}g`;
          else _str = `${_i}g to ${_o}g`;
        } else if (_i == _o || _o == -1) {
          _str = `${_i}g`;
          _avg = _i;
        } else if (_i == -1) {
          _str = `${_o}g`;
          _avg = _o;
        }

        return { _combo: _str, _avg };
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
      ret.avgYield = _avg;
      ret.yield = arr;
    })();
  }
  if (flowerTime != null) {
    let _upper = (flowerTime.includes(" to ")
      ? flowerTime.split(" to ")[1]
      : flowerTime
    ).replace(/\D/g, "");
    ret.nFlowerTime = parseInt(_upper);
  }
  // if (flowerTime != null) {
  //   ret.nFlowerTime = [...flowerTime];
  //   ret.flowerTime = (() => {
  //     if (flowerTime.length == 2) {
  //       return `${flowerTime[0]} to ${flowerTime[1]} Weeks`;
  //     }
  //     return `${flowerTime[0]} Weeks`;
  //   })();
  // }

  // console.log(packageImg.includes(".png"));
  // if (packageImg.includes(".png")) {
  //   ret.packageImg = packageImg.replace(".png", ".jpg");
  // }
  // console.log(ret.packageImg);
  return {
    ...strain,
    ...ret
  };
};

module.exports = {
  inferStrainData
};
