const Men = require("../model/menModels");
const Women = require("../model/womenModel");
const Kids = require("../model/KidsModel");
const Accessories = require("../model/accessories");
// men
exports.getAllMen = async (req, res) => {
  const men = await Men.find({});
  res.status(200).json({
    status: "success",
    result: men.length,
    data: { men },
  });
  try {
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.getMenById = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const men = await Men.findOne({ _id: id });
  res.status(200).json({
    status: "success",
    data: { men },
  });
  try {
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
// women
exports.getAllWomen = async (req, res) => {
  const women = await Women.find({});
  res.status(200).json({
    status: "success",
    result: women.length,
    data: { women },
  });
  try {
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.getWomenById = async (req, res) => {
  const women = await Women.findOne({ _id: req.params.id });
  res.status(200).json({
    status: "success",
    data: { women },
  });
  try {
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
// kids
exports.getAllkids = async (req, res) => {
  const kids = await Kids.find({});
  res.status(200).json({
    status: "success",
    result: kids.length,
    data: { kids },
  });
  try {
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.getKidsById = async (req, res) => {
  const kids = await Kids.findOne({ _id: req.params.id });
  res.status(200).json({
    status: "success",
    data: { kids },
  });
  try {
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
// accessories
exports.getAllAccessories = async (req, res) => {
  const accessories = await Accessories.find({});
  res.status(200).json({
    status: "success",
    result: accessories.length,
    data: { accessories },
  });
  try {
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.getAccessoriesById = async (req, res) => {
  const accessories = await Accessories.findOne({ _id: req.params.id });
  res.status(200).json({
    status: "success",
    data: { accessories },
  });
  try {
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
