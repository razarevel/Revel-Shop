const mongoose = require("mongoose");

// accessories
const accessoriesSchem = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A Accessories data should have a name"],
  },
  slug: {
    type: String,
    required: [true, "A Accessories data should have a Slug"],
  },
  image: [String],
});
const Accessories = mongoose.model("Accessories", accessoriesSchem);
module.exports = Accessories;
