const Booking = require("../models/booking");

// Create new booking
exports.createBooking = async (req, res) => {
  const { maid, user, date, time } = req.body;
  try {
    const booking = new Booking({ maid, user, date, time });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Get all bookings
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("maid").populate("user");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Cancel booking
exports.cancelBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ msg: "Booking not found" });
    }
    booking.status = "canceled";
    await booking.save();
    res.json({ msg: "Booking canceled" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
