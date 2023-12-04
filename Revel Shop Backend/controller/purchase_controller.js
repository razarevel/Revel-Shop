const Purchase = require("../model/purchaseModel");
const UserPurchases = require("../model/userPurchaseModel");
const Men = require("../model/menModels");
const Women = require("../model/womenModel");
const Kids = require("../model/KidsModel");
const Accessories = require("../model/accessories");
const sendReq = (section, req) => {
  return (req.body.section = section);
};
// posting the purchase
exports.checkingProcductId = async (req, res, next) => {
  try {
    const id = req.body.product_id;
    const men = await Men.findOne({ _id: id });
    const women = await Women.findOne({ _id: id });
    const kids = await Kids.findOne({ _id: id });
    const accessories = await Accessories.findOne({ _id: id });
    if (men) sendReq("men", res);
    else if (women) sendReq("women", req);
    else if (kids) sendReq("kids", req);
    else if (accessories) sendReq("accessories", req);
    next();
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "Invalid id",
    });
  }
};
exports.updateHistory = async (req, res, next) => {
  const userPurchase = await UserPurchases.findOne({
    email: req.body.email,
  }).select("email");
  // updating user purchase
  if (!userPurchase) {
    const data = {
      email: req.body.email,
      name: req.body.name,
      address: req.body.address,
      purchases: [
        {
          product_id: req.body.product_id,
          productQuantity: req.body.productQuantity,
          section: req.body.section,
        },
      ],
    };
    await UserPurchases.create(data);
  } else if (userPurchase) {
    const data = {
      product_id: req.body.product_id,
      productQuantity: req.body.productQuantity,
    };
    await UserPurchases.findOneAndUpdate(
      { email: req.body.email },
      { $push: { purchases: data } },
      { new: true }
    );
  }
  next();
};
exports.postPurchase = async (req, res) => {
  try {
    const purchase = await Purchase.create({
      product_id: req.body.product_id,
      productQuantity: req.body.productQuantity,
      email: req.body.email,
      name: req.body.name,
      address: req.body.address,
      section: req.body.section,
    });

    // sending request
    res.status(200).json({
      status: "success",
      data: { purchase },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
// get all purchase by email
exports.getAllPurchase = async (req, res) => {
  try {
    const purchases = await UserPurchases.find({
      email: req.params.email,
    }).select("purchases");
    res.status(200).json({
      status: "success",
      result: purchases.length,
      data: { purchases },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
