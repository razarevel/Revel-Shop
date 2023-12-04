const express = require("express");
const router = express.Router();
const {
  getAllMen,
  getMenById,
  getAllWomen,
  getWomenById,
  getAllkids,
  getKidsById,
  getAllAccessories,
  getAccessoriesById,
} = require("../controller/basic_controller");
const {
  postPurchase,
  getAllPurchase,
  checkingProcductId,
  updateHistory,
} = require("../controller/purchase_controller");
const {
  signup,
  login,
  resetPassword,
  getUserByToken,
} = require("../controller/auth_controller");
// men
router.get("/men", getAllMen);
router.get("/men/:id", getMenById);
// women
router.get("/women", getAllWomen);
router.get("/women/:id", getWomenById);
//kids
router.get("/kids", getAllkids);
router.get("/kids/:id", getKidsById);
//accessories
router.get("/accessories", getAllAccessories);
router.get("/accessories/:id", getAccessoriesById);
// purchase
router.get("/purchase/:email", getAllPurchase);
router.post("/purchase", checkingProcductId, updateHistory, postPurchase);
// auth
router.post("/signup", signup);
router.post("/login", login);
router.post("/resetPassword", resetPassword);
router.get("/user", getUserByToken);
module.exports = router;
