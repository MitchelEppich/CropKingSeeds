const { Article } = require("../../models");

const request = require("request-promise");

// const { PubSub, withFilter } = require("graphql-subscriptions");

// const pubsub = new PubSub();

const moment = require("moment");

const resolvers = {
  Query: {
    article: (_, { input }) => {
      return Strain.findOne(input);
    },
    allArticles: async (_, { filter, cursor, limit }) => {
      let query = filter ? { $or: articleFilters(filter) } : {};
      return randomize(await Article.find(query));
    }
  },
  Article: {},
  Subscription: {},
  Mutation: {
    createArticle: (_, { input }) => {
      let article = new Article({
        ...input
      });

      article.save();

      return article.toObject();
    }
  }
};

module.exports = resolvers;
