const express = require("express");
const {
  getMaids,
  addMaid,
  updateMaid,
  deleteMaid,
} = require("../controllers/maidController");
const router = express.Router();

router.get("/", getMaids);
router.post("/add", addMaid); // Admin route
router.put("/update/:id", updateMaid); // Admin route
router.delete("/delete/:id", deleteMaid); // Admin route

module.exports = router;
