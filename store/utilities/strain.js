let inferStrainData = strain => {
  let _countries = [
    "Canada",
    "United States",
    "Spain",
    "Netherlands",
    "United Kingdom",
    "South Africa"
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
    name
  } = strain;
  let _yield = strain.yield;
  country = (() => {
    let str = "";
    do {
      let _countryIndex = country.shift();
      let _countriesLeft = country.length;

      str += _countries[_countryIndex];

      if (_countriesLeft > 1) str += ", ";
      else if (_countriesLeft == 1) str += " and ";
    } while (country.length > 0);
    return str;
  })();
  difficulty = _difficulties[difficulty];
  genetic = _genetics[genetic];
  name = (() => {
    let _name = name;
    _name = _name.replace("Cannabis", "").replace("Seeds", "");
    if (genetic != "Mix") _name = _name.replace(genetic, "");
    else _name = _name.replace("Mix", "Mixed");
    // if (genetic == "CBD") _name = _name.replace("CB", "");
    return _name.replace(/\s+/g, " ").trim();
  })();
  type = _types[type];
  env = _envs[env];
  let cbd = (() => {
    let _max = pcbd[pcbd.length - 1];
    if (_max >= 2) return "high";
    return "low";
  })();
  let thc = (() => {
    let _max = pthc[pthc.length - 1];
    if (_max >= 15) return "high";
    return "low";
  })();

  //   pcbd = pcbd.map(a => `${a.toFixed(2)}%`).join("-");
  //   pcbn = pcbn.map(a => `${a.toFixed(2)}%`).join("-");
  //   pthc = pthc.map(a => `${a.toFixed(2)}%`).join("-");

  _yield = (() => {
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
    return arr;
  })();

  return {
    ...strain,
    country,
    difficulty,
    genetic,
    type,
    env,
    pthc,
    pcbd,
    pcbn,
    yield: _yield,
    cbd,
    thc,
    name
  };
};

module.exports = {
  inferStrainData
};
