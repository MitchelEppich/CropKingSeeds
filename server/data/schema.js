const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
type Query {
  sendString: String
  strain(input: StrainInput!): Strain
  allStrains(filter: StrainFilter): [Strain]!
  order(input: OrderInput!): Order
  allOrders(filter: OrderFilter): [Order]!

  getBitcoinData(input: BitcoinDataInput): String
  getNewOrderId: Int
  getCoupon(coupon: String, ip: String): Coupon
}

type Coupon {
  error: String
  code: String
  type: String
  amount: Float
  minimumOrder: Float
  usage: String
  itemName: String
  itemId: String
}

input BitcoinDataInput {
  currency: String
  value: String
}

input OrderFilter {
  OR: [OrderFilter!]
  ip: String
  coupon: String
}

input StrainFilter {
  OR: [StrainFilter!]
  genetic: Int
  nameContains: String
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
  rating: Float
  reviews: [String]
  ratingQuantity: [Int]
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
  review: String
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
  ip: String
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
  transactionId: String
  productList: String
  tax: Float
  provTax: Float
  provTaxType: String
  currency: String
  coupon: String
  paymentMethod: String
  paymentStatus: String
  ip: String
}

input OrderProcessInput {
  content: String
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

type PaymentResponse {
  transactionId: String
  status: String
  approvalCode: String
  response: String
  processor: String
}

type Mutation {
  createStrain(input: StrainInput): Strain
  updateStrain(input: StrainInput): Strain
  typeToDom: [Strain]
  
  createOrder(input: OrderInput): Order

  processPayment(input: PaymentInput): PaymentResponse
  processOrder(input: OrderProcessInput): Order
}

`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;
