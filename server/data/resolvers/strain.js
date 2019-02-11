const { Strain } = require("../../models");

const { strainFilters, decompress } = require("./functions");

// const { PubSub, withFilter } = require("graphql-subscriptions");

// const pubsub = new PubSub();

const moment = require("moment");

const resolvers = {
  Query: {
    strain: (_, { input }) => {
      return Strain.findOne(input);
    },
    allStrains: (_, { filter }) => {
      let query = filter ? { $or: strainFilters(filter) } : {};
      return Strain.find(query);
    },
    getRelatedList: async (_, { input }) => {
      let { sotiId, limit } = input;

      let relation = decompress((await Strain.findOne({ sotiId })).relationData)
        .split(" ")
        .slice(0, limit)
        .map(a => a.slice(0, 3));

      let relatedStrains = await Strain.find({
        sotiId: { $in: relation }
      });

      limit -= relatedStrains.length;

      if (limit != 0) {
        relatedStrains.push(
          ...(await getRandomStrains(limit, {
            sotiId: { $nin: relation }
          }))
        );
      }

      return randomize(relatedStrains);
    },
    getFeaturedList: async _ => {
      let limit = 10;
      let featuredStrains = await Strain.find({
        featured: true
      }).limit(limit);

      limit -= featuredStrains.length;
      if (limit != 0) {
        featuredStrains.push(
          ...(await getRandomStrains(limit, {
            $or: [{ featured: false }, { featured: undefined }]
          }))
        );
      }

      return randomize(featuredStrains);
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
    updateStrain: async (_, { input }) => {
      let strain = await Strain.findOne({ sotiId: input.sotiId });

      if (input.review != null) {
        if (strain.reviews == null) strain.reviews = {};
        if (strain.rating == null) strain.rating = 0;

        let [, email, , rating] = input.review.split("/&=>");
        rating = parseInt(rating);

        // Add one for rating quantity
        let ratingQuantity = [...strain.ratingQuantity];
        ratingQuantity[rating - 1] += 1;

        // Get Totals
        let total = 0;
        for (let value of ratingQuantity) {
          total += value;
        }
        let pReviews =
          strain.ratingQuantity[0] +
          strain.ratingQuantity[1] +
          strain.ratingQuantity[2] +
          1;

        // Filter reviews
        if (rating < 4 && total >= 10 && pReviews / total > 0.1) {
          let index = [...strain.reviews].reverse().findIndex(a => {
            let rating = a.split("/&=>")[3];
            if (rating < 4) {
              ratingQuantity[rating - 1] -= 1;
              return true;
            }
          });
          strain.reviews.splice(strain.reviews.length - 1 - index, 1);
        }

        // Set rating quantity
        strain.ratingQuantity = [...ratingQuantity];

        // Set Rating
        strain.rating = (() => {
          let rating = 0;

          for (let i = 1; i <= 5; i++) {
            let _total = ratingQuantity[i - 1];
            rating += _total * i;
          }

          return (rating / (total * 5)) * 5;
        })();

        // Set Reviews
        strain.reviews = [`${input.review}/&=>${moment()}`, ...strain.reviews];
      }

      strain.save();

      return strain;
    },
    typeToDom: async (_, { input }) => {
      let _strains = await Strain.find({});

      for (let strain of _strains) {
        console.log(strain.strainImg);
        // strain.strainImg = "/plant/cannabis-plant.png";
        strain.strainImg = "/plant/" + strain.sotiId.toUpperCase() + ".png";

        strain.save();
      }

      return _strains;
    }
  }
};

let randomize = arr => {
  return arr.sort((a, b) => {
    return Math.random() - 0.5;
  });
};

let getRandomStrains = async (limit, match) => {
  return await Strain.aggregate([
    {
      $sample: { size: limit }
    },
    {
      $match: match
    }
  ]);
};

module.exports = resolvers;
