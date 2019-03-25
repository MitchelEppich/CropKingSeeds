let filter = (
  [...strains],
  filter,
  withMatch = false,
  isCompounding = false
) => {
  //   let _filter = Array.isArray(filter)
  //     ? filter
  //     : filter.split(",").map(a => a.trim().tolowerCase());
  let _filter = filter;

  if (Object.keys(_filter).length == 0) return strains;

  let _arr = [];

  let match, pass, strain;

  while (strains.length != 0 || strain != null) {
    console.log(pass, match);
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

    console.log($genetic, $type);
    // Check if related to type
    if (_filter.type != null) {
      if (_filter.type == $type) {
        pass = true;
        match = "Type";
        if (isCompounding) continue;
      } else {
        pass = false;
        match = null;
        continue;
      }
    }

    // Check if related to genetic
    if (_filter.genetic != null && _filter.genetic.length != 0) {
      if (_filter.genetic.includes($genetic)) {
        pass = true;
        match = "Genetic";
        if (isCompounding) continue;
      } else {
        pass = false;
        match = null;
        continue;
      }
    }

    // Check if related to cbd
    if (_filter.cbd != null) {
      if (_filter.cbd == $cbd) {
        match = "CBD";
        pass = true;
        if (isCompounding) continue;
      } else {
        pass = false;
        match = null;
        continue;
      }
    }

    // Check if related to thc
    if (_filter.thc != null) {
      if (_filter.thc == $thc) {
        match = "THC";
        pass = true;
        if (isCompounding) continue;
      } else {
        pass = false;
        match = null;
        continue;
      }
    }
    // Check if related to text fragments
    if (_filter.text != null && _filter.text.length != 0) {
      for (let text of _filter.text) {
        if ($genetic.includes(text)) {
          match = "Genetic";
          pass = true;
          if (isCompounding) break;
        } else {
          pass = false;
          match = null;
          break;
        }
        if ($name.includes(text)) {
          match = "Name";
          pass = true;
          if (isCompounding) break;
        } else {
          pass = false;
          match = null;
          break;
        }
        if ($type.includes(text)) {
          match = "Type";
          pass = true;
          if (isCompounding) break;
        } else {
          pass = false;
          match = null;
          break;
        }
        if ($flowerTime.includes(text)) {
          match = "Flower Time";
          pass = true;
          if (isCompounding) break;
        } else {
          pass = false;
          match = null;
          break;
        }
        if ($yield.includes(text)) {
          match = "Yield";
          pass = true;
          if (isCompounding) break;
        } else {
          pass = false;
          match = null;
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
