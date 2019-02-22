let filter = ([...strains], filter, withMatch = false) => {
  //   let _filter = Array.isArray(filter)
  //     ? filter
  //     : filter.split(",").map(a => a.trim().tolowerCase());
  let _filter = filter;

  if (Object.keys(_filter).length == 0) return strains;

  let _arr = [];

  let match, pass, strain;

  while (strains.length != 0 || strain != null) {
    if (pass && match != null)
      _arr.push(withMatch ? { strain, match } : strain);

    match = undefined;
    pass = false;

    strain = strains.shift();
    if (strain == null) continue;

    let $genetic = strain.genetic.toLowerCase();
    let $type = strain.type.toLowerCase();
    let $cbd = strain.cbd.toLowerCase();
    let $thc = strain.thc.toLowerCase();
    let $name = strain.name.toLowerCase();
    let $flowerTime = strain.flowerTime.toLowerCase();
    let $yield = strain.yield[2].toLowerCase();

    // Check if related to type
    if (_filter.type != null && _filter.type == $type) {
      pass = true;
      match = "Type";
      continue;
    }

    // Check if related to genetic
    if (
      _filter.genetic != null &&
      _filter.genetic.length != 0 &&
      _filter.genetic.includes($genetic)
    ) {
      pass = true;
      match = "Genetic";
      continue;
    }

    // Check if related to cbd
    if (_filter.cbd != null && _filter.cbd == $cbd) {
      match = "CBD";
      pass = true;
      continue;
    }

    // Check if related to thc
    if (_filter.thc != null && _filter.thc == $thc) {
      match = "THC";
      pass = true;
      continue;
    }

    // Check if related to text fragments
    if (_filter.text != null && _filter.text.length != 0) {
      for (let text of _filter.text) {
        if ($genetic.includes(text)) {
          match = "Genetic";
          pass = true;
          break;
        }
        if ($name.includes(text)) {
          match = "Name";
          pass = true;
          break;
        }
        if ($type.includes(text)) {
          match = "Type";
          pass = true;
          break;
        }
        if ($flowerTime.includes(text)) {
          match = "Flower Time";
          pass = true;
          break;
        }
        if ($yield.includes(text)) {
          match = "Yield";
          pass = true;
          break;
        }
      }
      if (pass) continue;
    }
  }

  return _arr;
};

module.exports = {
  filter
};
