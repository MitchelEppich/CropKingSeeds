const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
type Query {
  sendString: String
  strain(input: StrainInput!): Strain
  allStrains(filter: StrainInput): [Strain]!
}

input StrainFilter {
  OR: [StrainFilter!]
  genetic: Int
}

type Strain {
  _id: String
  name: String
  price: [Float]
  strainImg: String
  packageImg: String
  description: String
  effect: [Int]
  genetic: Int
  yield: [Int]
  flowerTime: String
  difficulty: Int
  type: Int
  og: [String]
  pthc: [Float]
  pcbd: [Float]
  pcbn: [Float]
  country: [Int]
  sotiId: String
}

input StrainInput {
  name: String
  price: [Float]
  strainImg: String
  packageImg: String
  description: String
  effect: [Int]
  genetic: Int
  yield: [Int]
  flowerTime: String
  difficulty: Int
  type: Int
  og: [String]
  pthc: [Float]
  pcbd: [Float]
  pcbn: [Float]
  country: [Int]
  sotiId: String
}

type Mutation {
  createStrain(input: StrainInput): Strain
}

`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;
