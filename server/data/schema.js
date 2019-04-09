const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
type Query {
  exportAllStrains: String
  sendString: String
  strain(input: StrainInput!): Strain
  fetchCurrentProduct(input: StrainNameInput!): Strain
  allStrains(filter: StrainFilter): [Strain]!
  order(input: OrderInput!): Order
  allOrders(filter: OrderFilter): [Order]!
  news(input: NewsInput!): News
  allNews: [News]!
  allFeaturedNews: [News]!
  allBlockedZips: [String]!
  allBlockedIps: [String]!

  getDailyStats(input: StatInput): Stat
  
  isRepeatCustomer(input: OrderInput!): Boolean
  getBanners: [String]
  getFeaturedList(input: FeaturedInput): [Strain]!
  getRelatedList(input: RelatedInput!): [Strain]!
  getPopularList(input: PopularInput!): [Strain]!
  getBitcoinData(input: BitcoinDataInput): String
  getExchangeRates: String
  getCoupon(coupon: String, ip: String): Coupon
  getTaxes: String

  getRandomWinnerBetweenDates(input: DateRangeInput!): Order

  getTrustPilotRating: Float

  getDailyMessage: String
}

input StatInput {
  startDate: String
  endDate: String
  hourly: Boolean
}

type Data {
  tag: String
  total: String
  partial: String
}

type TotalObject {
  time: String
  total: String
}

type Stat {
  dailyTotal: String
  hourlyTotal: [TotalObject]
}

input RelatedInput {
  limit: Int
  sotiId: String
}
input FeaturedInput {
  limit: Int
}
input PopularInput {
  limit: Int
}

input DateRangeInput {
  startDate: String
  endDate: String
}

type BlockedIp {
  value: String
}
type BlockedZip {
  value: String
}
type Bannrs {
  value: Int
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
  featured: Boolean
  relationData: String
  releaseDate: String
  soldQuantity: [Int]
  inStock: Boolean
  moreInfo: [String]
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
  featured: Boolean
  relationData: String,
  response: String
  releaseDate: String
  moreInfo: [String]
}

input StrainNameInput {
  name: String
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
  ccPaidAmount: Float
  orderAmount: Float
  total: Float
  processor: String
  ccType: String
  orderDate: String
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
  ccPaidAmount: Float
  orderAmount: Float
  total: Float
  processor: String
  ccType: String
  orderDate: String
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
  country: String
}

type PaymentResponse {
  transactionId: String
  status: String
  approvalCode: String
  response: String
  processor: String
  descriptor: String
}

input EmailInput {
  type: String
  name: String
  email: String
  subject: String
  body: String
  response: String
  ccStatus: String
  ccDescriptor: String
  orderId: String
  productList: String
  paymentMethod: String
  shippingDestination: String
  shippingType: String
  shippingTypeDescription: String
  subtotal: Float
  total: Float
  tax: Float
  shipping: Float
  date: String
  company: String
  cost: Float
  mediaKit: String
  phone: String
  location: String
  website: String
  eventName: String
}

type News {
  _id: String
  title: String
  body: String
  date: String
  url: String
  imageUrl: String
  location: String
  locationUrl:String
  sponsored: Boolean
  category: String
  featured: Boolean
}

input NewsInput {
  title: String
  body: String
  date: String
  url: String
  imageUrl: String
  location: String
  locationUrl:String
  sponsored: Boolean
  category: String
  featured: Boolean
}

input SotiInput {
  orderId: Int
  transactionId: String
  status: String
}

input ArchiveInput { 
  content: String
}

type Mutation {
  createStrain(input: StrainInput): Strain
  updateStrain(input: StrainInput): Strain
  updateStrainInfo: [Strain]
  typeToDom: [Strain]

  postToProcessOrder(input: SotiInput): String
  postToAddNoteToOrder(input: SotiInput): String

  createOrder(input: OrderInput): Order

  createNewsEntry(input: NewsInput): News

  acquireOrderId: String

  sendEmail(input: EmailInput): String
  subscribeToNewsletter(email: String): String

  processPayment(input: PaymentInput): PaymentResponse
  processOrder(input: OrderProcessInput): String
}

`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;
