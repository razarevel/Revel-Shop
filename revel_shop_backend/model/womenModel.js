const mongoose = require("mongoose");

// women
const womenSchem = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A women data should have a name"],
  },
  slug: {
    type: String,
    required: [true, "A women data should have a Slug"],
  },
  image: [String],
});
const Women = mongoose.model("Women", womenSchem);
module.exports = Women;
