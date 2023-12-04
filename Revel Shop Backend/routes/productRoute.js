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
module.exports = router;
