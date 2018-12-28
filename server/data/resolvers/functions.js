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

module.exports = {
  strainFilters
};
