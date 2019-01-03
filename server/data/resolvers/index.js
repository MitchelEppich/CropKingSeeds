const StrainResolvers = require("./strain");

const axios = require("axios");

const Strain = StrainResolvers.Strain;

const resolvers = {
  Query: {
    ...StrainResolvers.Query,
    getBitcoinData: async (_, { input }) => {
      return await axios
        .get(
          `https://blockchain.info/tobtc?currency=${input.currency}&value=${
            input.value
          }`
        )
        .then(res => {
          return res.data;
        });
    }
  },
  Strain,
  Mutation: {
    ...StrainResolvers.Mutation
  }
};

module.exports = resolvers;
