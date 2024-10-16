const express = require("express");
const {
  createBooking,
  getBookings,
  cancelBooking,
} = require("../controllers/bookingController");
const router = express.Router();

router.post("/book", createBooking);
router.get("/", getBookings);
router.delete("/cancel/:id", cancelBooking);

module.exports = router;
