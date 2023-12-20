const typeDefs = `
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    favorites: [String]!
  }

  type BakeryItem{
     _id: ID
    name: String
    cost: Int
    calories: Int
    img: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    bakeryItems:[BakeryItem]!
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeProfile: Profile
    
  }
`;

module.exports = typeDefs;
