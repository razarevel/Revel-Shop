const mongoose = require("mongoose");

// kids

const kidsSchem = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A Kids data should have a name"],
  },
  slug: {
    type: String,
    required: [true, "A Kids data should have a Slug"],
  },
  image: [String],
});
const Kids = mongoose.model("Kids", kidsSchem);
module.exports = Kids;
