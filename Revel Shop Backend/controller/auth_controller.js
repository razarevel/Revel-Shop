const User = require("../model/userModel");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
exports.signup = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    res.status(201).json({
      status: "success",
      token,
      data: { newUser },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",

      message: err.message,
    });
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({
        status: "fail",
        message: "Please Provide an Email and Password",
      });
    const user = await User.findOne({ email });
    const correct = await user.correctPassword(password, user.password);
    if (!user || !correct)
      return res.status(401).json({
        status: "fail",
        message: "Invalid email and password",
      });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    res.status(200).json({
      status: "success",
      token,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.resetPassword = async (req, res) => {
  try {
    const { email, password, passwordConform } = req.body;
    const user = await User.findOne({ email });
    if (!user) return Error("User not found");
    user.password = password;
    user.passwordConform = passwordConform;
    await user.save();
    res.status(200).json({
      status: "success",
      message: "Password reseted",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.getUserByToken = async (req, res) => {
  try {
    const userToken = req.headers.authorization.split(" ")[1];
    const decoded = await promisify(jwt.verify)(
      userToken,
      process.env.JWT_SECRET
    );
    const user = await User.findById({ _id: decoded.id });
    res.status(200).json({
      status: "success",
      data: { user },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid Token",
    });
  }
};
