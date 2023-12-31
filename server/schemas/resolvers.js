const { Profile, BakeryItem } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    profiles: async () => {
      console.log("Getting profiles");
      return Profile.find();
    },

    bakeryItems: async () => {
      console.log("Getting all bakery items");
      return BakeryItem.find();
    },

    bakeryItem: async (parent, { bakeryItemId }) => {
      console.log("Getting one bakery item");
      return BakeryItem.findOne({ _id: bakeryItemId });
    },
    //   By adding context to our query, we can retrieve the logged in user without specifically searching for them
    //   me: async (parent, args, context) => {
    //     if (context.user) {
    //       return Profile.findOne({ _id: context.user._id });
    //     }
    //     throw AuthenticationError;
    //   },
    // },
  },
  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      console.log("Creating profile");
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw AuthenticationError;
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(profile);
      return { token, profile };
    },

    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
