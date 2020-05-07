const mongoose = require("mongoose");
 
const { Schema } = mongoose;
 
const PriceAdjustment = {
  _id: false,
  netPrice: Number,
  tax: Number,
  grossPrice: Number,
  basePrice: Number,
  lineitemText: String,
  taxBasis: Number,
  promotionId: String,
  campaignId: String,
};
 
const Item = {
  lineitemText: String,
  itemStatus: String,
  doNumber: String,
  netPrice: Number,
  tax: Number,
  grossPrice: Number,
  basePrice: Number,
  taxBasis: Number,
  position: Number,
  productId: String,
  productName: String,
  quantity: Number,
  unitOfMeasure: String,
  taxRate: Number,
  shipmentId: String,
  gift: Boolean,
  giftMessage: String,
  invoiceNumber: String,
  AWBNo: String,
  refundAmount: Number,
  itemNo: Number,
  optionLineItems: [],
  customAttributes: { type: Map, of: Object },
  priceAdjustments: [PriceAdjustment],
  remainingQuantity: Number,
  isReturnable: { type: Boolean, default: true },
  isInstallationEnabled: Boolean,
  isTwomanEnabled: Boolean,
};
 
const OptionItem = {
  _id: false,
  optionLineItems: [Item],
};
 
const LineItem = { ...OptionItem, ...Item };
 
const Total = {
  netPrice: Number,
  grossPrice: Number,
  tax: Number,
  priceAdjustments: [PriceAdjustment],
};
 
const PriceInfo = {
  merchandizeTotal: Total,
  adjustedMerchandizeTotal: Total,
  shippingTotal: Total,
  adjustedShippingTotal: Total,
  shipmentTotal: Total,
  orderTotal: Total,
};
 
const Address = {
  title: String,
  firstName: String,
  lastName: String,
  address1: String,
  address2: String,
  address3: String,
  city: String,
  countryCode: String,
  postalCode: Number,
  phone: String,
  area: String,
  email: String,
  customAttributes: { type: Map, of: Object },
};
 
const Shipment = {
  _id: false,
  uniqueId: String,
  status: { type: Map, of: Object },
  shippingMethod: String,
  invoiceNumber: String,
  awbNumber: String,
  trackingURL: String,
  shippingAddress: Address,
  translatedShippingAddress: Address,
  isTranslationRequired: Boolean,
  isTranslated: Boolean,
  gift: Boolean,
  shippingPriceInfo: PriceInfo,
  customAttributes: { type: Map, of: Object },
  shipmentId: String,
  parentShipmentId: String,
  shipmentStatus: String,
  awbGenerationFailureHistory: Array,
  deliveryDate: Date,
  carrier: String,
  weight: Number,
  isInstallationEnabled: Boolean,
  paymentStatus: String,
  shippedTime: Date,
};
 
const Payment = {
  _id: false,
  customMethod: { type: Map, of: Object },
  creditCard: { type: Map, of: Object },
  dwApplePay: { type: Map, of: Object },
  amount: Number,
  processorId: String,
  transactionId: String,
  isAuthReversed: { type: Boolean, default: false },
  authReversedAmount: { type: Number, default: 0 },
  totalRefundedAmount: { type: Number, default: 0 },
  totalCapturedAmount: { type: Number, default: 0 },
  customAttributes: { type: Map, of: Object },
};
 
const ReAuthDetail = {
  reAuthorizedDate: Date,
  authExpiryDate: Date,
  fileDetails: [],
  index: Number,
  _id: false,
};
 
 
const orderSchema = Schema(
  {
    orderNo: String,
    sapPiOrderId: String,
    orderDate: Date,
    createdBy: String,
    currentOrderNo: String,
    originalOrderNo: String,
    customerNo: String,
    customerLocale: String,
    customerName: String,
    customerEmail: String,
    billingAddress: { type: Map, of: Object },
    channelType: String,
    currency: String,
    siteId: String,
    storeId: Number,
    taxation: String,
    invoiceNo: String,
    status: String,
    shippingStatus: String,
    confirmationStatus: String,
    paymentStatus: String,
    fulfillmentType: String,
    documentType: String,
    parentOrderId: String,
    paymentType: String,
    remoteHost: String,
    shippingLineItems: [],
    lineItems: [LineItem],
    shipments: [Shipment],
    payments: [Payment],
    priceInfo: PriceInfo,
    returnReason: { type: Map, of: Object },
    refundResponse: { type: Map, of: Object },
    customAttributes: { type: Map, of: Object },
    stagingLocation: String,
    returnType: String,
    rproDetails: [],
    isReturnedFullOrder: { type: Boolean, default: false },
    picksheetCreatedTime: Date,
    picksheetCreatedUser: String,
    sapOrderPostingDate: Date,
    authExpiryDate: Date,
    captureReferenceId: String,
    reAuthDetails: [ReAuthDetail],
  },
  { timestamps: true, shardKey: "orderNo" },
  {
      collection :"orders"
  }
);
 
module.exports = mongoose.model("orders", orderSchema);