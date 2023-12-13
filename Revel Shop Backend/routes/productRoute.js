const express = require("express");
const router = express.Router();
const {
  getAllMen,
  getMenBySlug,
  getAllWomen,
  getWomenBySlug,
  getAllkids,
  getKidsBySlug,
  getAllAccessories,
  getAccessoriesBySlug,
} = require("../controller/basic_controller");
const {
  postPurchase,
  getAllPurchase,
  checkingProcductId,
  updateHistory,
} = require("../controller/purchase_controller");
const {
  signup,
  checkEmail,
  uploadImage,
  login,
  resetPassword,
  getUserByToken,
} = require("../controller/auth_controller");
// men
router.get("/men", getAllMen);
router.get("/men/:slug", getMenBySlug);
// women
router.get("/women", getAllWomen);
router.get("/women/:slug", getWomenBySlug);
//kids
router.get("/kids", getAllkids);
router.get("/kids/:slug", getKidsBySlug);
//accessories
router.get("/accessories", getAllAccessories);
router.get("/accessories/:slug", getAccessoriesBySlug);
// purchase
router.get("/purchase/:email", getAllPurchase);
router.post("/purchase", checkingProcductId, updateHistory, postPurchase);
// auth
router.post("/signup",checkEmail,uploadImage, signup);
router.post("/login", login);
router.post("/resetPassword", resetPassword);
router.get("/user", getUserByToken);
module.exports = router;
