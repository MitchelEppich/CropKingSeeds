const { Strain } = require("../../models");

const { strainFilters } = require("./functions");

// const { PubSub, withFilter } = require("graphql-subscriptions");

// const pubsub = new PubSub();

const resolvers = {
  Query: {
    strain: (_, { input }) => {
      return Strain.findOne(input);
    },
    allStrains: (_, { filter }) => {
      let query = filter ? { $or: strainFilters(filter) } : {};
      return Strain.find(query);
    }
  },
  Strain: {},
  Subscription: {},
  Mutation: {
    createStrain: (_, { input }) => {
      let strain = new Strain({
        ...input
      });

      strain.save();

      return strain.toObject();
    },
    typeToDom: async (_, { input }) => {
      let _strains = await Strain.find({});
      for (let strain of _strains) {
        let _i = strain.indica;
        let _s = strain.sativa;
        let _r = strain.ruderalis;

        strain.type = (() => {
          if (Math.abs(_i - _s) <= 0.2) return 2;
          if (_i - _s <= -0.3) return 0;
          if (_s - _i <= -0.3) return 1;
        })();

        strain.save();

        console.log(strain);
      }
    }
  }
};

module.exports = resolvers;
