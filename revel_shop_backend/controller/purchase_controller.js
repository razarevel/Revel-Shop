const Purchase = require("../model/purchaseModel");
const UserPurchases = require("../model/userPurchaseModel");
const Men = require("../model/menModels");
const Women = require("../model/womenModel");
const Kids = require("../model/KidsModel");
const Accessories = require("../model/accessories");
const sendReq = (section, req) => {
  return (req.body.section = section);
};
exports.checkHistory = async (req, res, next) => {
  const purchase = await Purchase.findOne({ email: req.body.email });
  if (purchase) {
    const data = {
      product_slug: req.body.purchases.product_slug,
      section: req.body.purchases.section,
      productQuantity: req.body.quantity,
    };
    purchase.purchases.push(data);
    await purchase.save();
    return res.status(200).json({
      status: "Success",
      message: `You have ${purchase.purchases.length} purchases`,
    });
  }
  next();
};
exports.postPurchase = async (req, res) => {
  try {
    const purchase = await Purchase.create({
      email: req.body.email,
      town: req.body.town,
      country: req.body.country,
      address: req.body.address,
      purchases: {
        product_slug: req.body.purchases.product_slug,
        section: req.body.purchases.section,
        productQuantity: req.body.quantity,
      },
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
    const purchases = await Purchase.findOne({
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
