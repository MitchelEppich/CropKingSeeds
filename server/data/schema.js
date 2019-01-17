const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
type Query {
  sendString: String
  strain(input: StrainInput!): Strain
  allStrains(filter: StrainInput): [Strain]!
  order(input: OrderInput!): Order
  allOrders: [Order]!

  getNewOrderId: String
  getBitcoinData(input: BitcoinDataInput): String
}

input BitcoinDataInput {
  currency: String
  value: String
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
  indica: Float
  sativa: Float
  ruderalis: Float
  env: String
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
  indica: Float
  sativa: Float
  ruderalis: Float
  env: String
}

type Order {
  _id: String
  billAddress: String
  billApartment: String
  billCity: String
  billCountry: String
  billEmail: String
  billFullName: String
  billPhone: String
  billPostalZip: String
  billState: String
  shipAddress: String
  shipApartment: String
  shipCity: String
  shipCountry: String
  shipEmail: String
  shipFullName: String
  shipPhone: String
  shipPostalZip: String
  shipState: String
  shipCost: Float
  shipDetail: String
  orderId: Int
  transactionId: Int
  productList: String
  tax: Float
  provTax: Float
  provTaxType: String
  currency: String
  coupon: String
  paymentMethod: String
  paymentStatus: String
}

input OrderInput {
  billAddress: String
  billApartment: String
  billCity: String
  billCountry: String
  billEmail: String
  billFullName: String
  billPhone: String
  billPostalZip: String
  billState: String
  shipAddress: String
  shipApartment: String
  shipCity: String
  shipCountry: String
  shipEmail: String
  shipFullName: String
  shipPhone: String
  shipPostalZip: String
  shipState: String
  shipCost: Float
  shipDetail: String
  orderId: Int
  transactionId: Int
  productList: String
  tax: Float
  provTax: Float
  provTaxType: String
  currency: String
  coupon: String
  paymentMethod: String
  paymentStatus: String
}

input PaymentInput {
  orderId: String
  amount: String
  cardNumber: String
  cardType: String
  cardExpiry: String
  cardHolderName: String
  cvv: String
}

type Mutation {
  createStrain(input: StrainInput): Strain
  typeToDom: String
  
  createOrder(input: OrderInput): Order

  processPayment(input: PaymentInput): String
}

`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;
