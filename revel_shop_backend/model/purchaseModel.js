const mongoose = require("mongoose");

const purchase = new mongoose.Schema({
  product_slug: {
    type: String,
    required: [true, "Product id is required"],
  },
  section: String,
  productQuantity: {
    type: Number,
    required: [true, "Product quantity is required"],
  },
  purchaseAt: {
    type: Date,
    default: Date.now(),
  },
});
const userPurchaseSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "An email is required"],
  },
  country: {
    type: String,
    required: [true, "Country is required"],
  },
  town: {
    type: String,
    required: [true, "Town name is required"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  purchases: [purchase],
});
userPurchaseSchema.set("autoIndex", false);
const Purchase = mongoose.model("Purchase", userPurchaseSchema);
module.exports = Purchase;
