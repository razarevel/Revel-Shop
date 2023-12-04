const mongoose = require("mongoose");
// men schema
const menSchem = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A men data should have a name"],
  },
  slug: {
    type: String,
    required: [true, "A men data should have a Slug"],
  },
  image: [String],
});
const Men = mongoose.model("Men", menSchem);
module.exports = Men;
