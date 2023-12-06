const Men = require("../model/menModels");
const Women = require("../model/womenModel");
const Kids = require("../model/KidsModel");
const Accessories = require("../model/accessories");
// men
exports.getAllMen = async (req, res) => {
  try {
    let query = Men.find();
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    }
    if (req.query.limit) {
      query = query.limit(req.query.limit*1);
    }
    const men = await query;
    res.status(200).json({
      status: "success",
      result: men.length,
      data: { men },
    });
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
  try {
    let query = Women.find();
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    }
    if (req.query.limit) {
      query = query.limit(req.query.limit);
    }
    const women = await query;
    res.status(200).json({
      status: "success",
      result: women.length,
      data: { women },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.getWomenById = async (req, res) => {
  try {
    const women = await Women.findOne({ _id: req.params.id });
    res.status(200).json({
      status: "success",
      data: { women },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
// kids
exports.getAllkids = async (req, res) => {
  try {
    let query = Kids.find();
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    }
    if (req.query.limit) {
      query = query.limit(req.query.limit);
    }
    const kids = await query;
    res.status(200).json({
      status: "success",
      result: kids.length,
      data: { kids },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.getKidsById = async (req, res) => {
  try {
    const kids = await Kids.findOne({ _id: req.params.id });
    res.status(200).json({
      status: "success",
      data: { kids },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
// accessories
exports.getAllAccessories = async (req, res) => {
  try {
    let query = Accessories.find();
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    }
    if (req.query.limit) {
      query = query.limit(req.query.limit);
    }
    const accessories = await query;
    res.status(200).json({
      status: "success",
      result: accessories.length,
      data: { accessories },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
exports.getAccessoriesById = async (req, res) => {
  try {
    const accessories = await Accessories.findOne({ _id: req.params.id });
    res.status(200).json({
      status: "success",
      data: { accessories },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
