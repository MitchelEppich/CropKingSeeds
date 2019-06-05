// Strain filters
const strainFilters = ({ OR = [], genetic, nameContains }) => {
  const filter = genetic || nameContains ? {} : null;

  if (genetic) {
    filter.genetic = genetic;
  }
  if (nameContains) {
    filter.name = { $regex: `.*(?i)${nameContains}.*` };
  }

  let filters = filter ? [filter] : [];
  for (let i = 0; i < OR.length; i++) {
    filters = filters.concat(strainFilters(OR[i]));
  }

  return filters;
};

// Article filters
const articleFilters = ({
  OR = [],
  bodyContains,
  titleContains,
  subtitleContains,
  relatedStrainsContains,
  relatedArticlesContains,
  authorContains,
  categoryContains,
  tagsContains
}) => {
  const filter = genetic || nameContains ? {} : null;

  if (bodyContains) {
    filter.body = { $regex: `.*(?i)${bodyContains}.*` };
  }
  if (titleContains) {
    filter.title = { $regex: `.*(?i)${titleContains}.*` };
  }
  if (subtitleContains) {
    filter.subtitle = { $regex: `.*(?i)${subtitleContains}.*` };
  }
  if (relatedStrainsContains) {
    filter.relatedStrains = { $regex: `.*(?i)${relatedStrainsContains}.*` };
  }
  if (relatedArticlesContains) {
    filter.relatedArticles = { $regex: `.*(?i)${relatedArticlesContains}.*` };
  }
  if (authorContains) {
    filter.author = { $regex: `.*(?i)${authorContains}.*` };
  }
  if (categoryContains) {
    filter.category = { $regex: `.*(?i)${categoryContains}.*` };
  }
  if (tagsContains) {
    filter.tags = { $regex: `.*(?i)${tagsContains}.*` };
  }

  let filters = filter ? [filter] : [];
  for (let i = 0; i < OR.length; i++) {
    filters = filters.concat(strainFilters(OR[i]));
  }

  return filters;
};

// Order filters
const orderFilters = ({ OR = [], coupon, ip }) => {
  const filter = coupon || ip ? {} : null;

  if (coupon) {
    filter.coupon = coupon;
  }
  if (ip) {
    filter.ip = ip;
  }

  let filters = filter ? [filter] : [];
  for (let i = 0; i < OR.length; i++) {
    filters = filters.concat(orderFilters(OR[i]));
  }

  return filters;
};

// LZW-compress a string
const compress = s => {
  var dict = {};
  var data = (s + "").split("");
  var out = [];
  var currChar;
  var phrase = data[0];
  var code = 256;
  for (var i = 1; i < data.length; i++) {
    currChar = data[i];
    if (dict[phrase + currChar] != null) {
      phrase += currChar;
    } else {
      out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
      dict[phrase + currChar] = code;
      code++;
      phrase = currChar;
    }
  }
  out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
  for (var i = 0; i < out.length; i++) {
    out[i] = String.fromCharCode(out[i]);
  }
  return out.join("");
};

// Decompress an LZW-encoded string
const decompress = s => {
  var dict = {};
  var data = (s + "").split("");
  var currChar = data[0];
  var oldPhrase = currChar;
  var out = [currChar];
  var code = 256;
  var phrase;
  for (var i = 1; i < data.length; i++) {
    var currCode = data[i].charCodeAt(0);
    if (currCode < 256) {
      phrase = data[i];
    } else {
      phrase = dict[currCode] ? dict[currCode] : oldPhrase + currChar;
    }
    out.push(phrase);
    currChar = phrase.charAt(0);
    dict[code] = oldPhrase + currChar;
    code++;
    oldPhrase = phrase;
  }
  return out.join("");
};

module.exports = {
  strainFilters,
  orderFilters,
  compress,
  decompress
};
