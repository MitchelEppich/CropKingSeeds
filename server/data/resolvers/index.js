const StrainResolvers = require("./strain");

// const Strain = StrainResolvers.Strain

const resolvers = {
  Query: {
    ...StrainResolvers.Query
  },
  Mutation: {
    ...StrainResolvers.Mutation
  }
};

module.exports = resolvers;
