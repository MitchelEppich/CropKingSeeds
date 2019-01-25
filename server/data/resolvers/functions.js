// Strain filters
const strainFilters = ({ OR = [], genetic }) => {
  const filter = genetic ? {} : null;

  if (genetic) {
    filter.genetic = genetic;
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

module.exports = {
  strainFilters,
  orderFilters
};
