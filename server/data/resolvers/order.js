const { Order } = require("../../models");

// const { orderFilters } = require("./functions");

// const { PubSub, withFilter } = require("graphql-subscriptions");

// const pubsub = new PubSub();

const resolvers = {
  Query: {
    order: (_, { input }) => {
      return Order.findOne(input);
    },
    allOrders: (_, {}) => {
      return Order.find({});
    }
  },
  Order: {},
  Subscription: {},
  Mutation: {
    createOrder: (_, { input }) => {
      let order = new Order({
        ...input
      });
      console.log(input, order);
      order.save();
      return order.toObject();
    }
  }
};

module.exports = resolvers;
