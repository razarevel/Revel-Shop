const User = require("../model/userModel");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const AWS = require("aws-sdk");

s3 = new AWS.S3({
  credentials: {
    accessKeyId: process.env.AWS_accesskey,
    secretAccessKey: process.env.AWS_securekey,
  },
});
exports.checkEmail = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (user)
    return res.status(400).json({
      status: "fail",
      message: "user exist",
    });
  next();
};
exports.uploadImage = (req, res, next) => {
  if (req.files && req.files.image) {
    const uploadParams = {
      Bucket: "webrevelshop",
      Key: `profilPics/${req.body.email || "revel"}`,
      Body: req.files.image.data, // Use req.files.image.data directly
      ContentType: req.files.image.mimetype,
      ACL: "public-read",
    };

    s3.upload(uploadParams, function (err, data) {
      if (err) {
        console.log("Error", err.message);
        return res.status(500).send("Error uploading file");
      }

      // Attach the image URL to req.body.image
      req.body.image = data.Location;
      next();
    });
  } else {
    req.body.image = "no";
    next();
  }
};
// sign up
exports.signup = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfrom: req.body.passwordConfrom,
      image: req.body.image,
    });
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    console.log(newUser);
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
    console.log(err.message);
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
    user.passwordConfrom = passwordConform;
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
    if (!user)
      return res.status(401).json({
        status: "fail",
        message: "Invalid Token",
      });
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
