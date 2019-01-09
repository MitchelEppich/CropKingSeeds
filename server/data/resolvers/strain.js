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
        console.log(strain.genetic);
        strain.packageImg = `../static/img/strains/package/${(() => {
          switch (strain.genetic) {
            case 0:
              return "GTF";
            case 1:
              return "AHA";
            case 2:
              return "OSR";
            case 3:
              return "CBD";
            case 4:
              return "DWA";
            case 5:
              return "AFM";
          }
        })()}.png`;
        strain.save();
      }
    }
  }
};

module.exports = resolvers;
