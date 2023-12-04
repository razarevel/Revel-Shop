const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema(
  {
    product_id: {
      type: String,
      required: [true, "A product id is required"],
    },
    section: String,
    productQuantity: {
      type: Number,
      required: [true, "Product Quantity is required"],
    },
    purchaseAt: {
      type: Date,
      default: Date.now(),
    },
    email: {
      type: String,
      required: [true, "Email is required for purchase"],
    },
    name: String,
    address: {
      type: String,
      required: [true, "Address is required for purchase"],
    },
  },
  { autoIndex: false }
);
purchaseSchema.set("autoIndex", false);
const Purchase = mongoose.model("Purchase", purchaseSchema);
module.exports = Purchase;
