const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
const useSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A Name must be required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exist"],
  },
  password: {
    type: String,
    required: [true, "Please Enter your password"],
  },
  passwordConform: {
    type: String,
    required: [true, "password conform is required"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Password and Conform password are not the sames",
    },
  },
});
useSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcryptjs.hash(this.password, 12);
  this.passwordConform = undefined;
  next();
});
useSchema.methods.correctPassword = async function (
  candidatePasswrod,
  userPassword
) {
  return await bcryptjs.compare(candidatePasswrod, userPassword);
};
const User = mongoose.model("User", useSchema);
module.exports = User;
