const { Strain } = require("../../models");

const { strainFilters, decompress } = require("./functions");

const request = require("request-promise");

// const { PubSub, withFilter } = require("graphql-subscriptions");

// const pubsub = new PubSub();

const moment = require("moment");

const resolvers = {
  Query: {
    strain: (_, { input }) => {
      return Strain.findOne(input);
    },
    allStrains: async (_, { filter }) => {
      let query = filter ? { $or: strainFilters(filter) } : {};
      return randomize(await Strain.find(query));
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
    getPopularList: async (_, { input }) => {
      let limit = input.limit;
      let popularStrains = (await Strain.find({}))
        .sort((a, b) => {
          let _a = a.soldQuantity.reduce((sum, _) => {
            return sum + _;
          });
          let _b = b.soldQuantity.reduce((sum, _) => {
            return sum + _;
          });
          if (_a > _b) return -1;
          if (_a < _b) return 1;
          return 0;
        })
        .slice(0, limit);

      return popularStrains;
    },
    getFeaturedList: async (_, { input }) => {
      let limit = input.limit;
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
      var options = {
        method: "POST",
        uri: "https://www.google.com/recaptcha/api/siteverify",
        formData: {
          secret: "6LdVgJIUAAAAAAinDAgg0p2N2v3KuIIK7wDlpMhh",
          response: input.response
        },
        headers: {
          "content-type": "application/x-www-form-urlencoded"
        }
      };
      return request(options)
        .then(function(parsedBody) {
          // POST succeeded...
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
              strain.ratingQuantity[0] + strain.ratingQuantity[1] + 1;

            // Filter reviews
            let margin = 2;
            let cap = 20;
            if (rating <= margin && total >= cap && pReviews / total > 0.2) {
              let index = [...strain.reviews].reverse().findIndex(a => {
                let rating = a.split("/&=>")[3];
                if (rating <= margin) {
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
            strain.reviews = [
              `${input.review}/&=>${moment()}`,
              ...strain.reviews
            ];
          }
          strain.save();
          return strain;
        })
        .catch(function(err) {
          // POST failed...
          console.log(err);
        });
    },
    typeToDom: async (_, { input }) => {
      let _strains = await Strain.find({});

      for (let strain of _strains) {
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
